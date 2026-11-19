// Vercel Serverless Function: Send Order Emails
// Endpoint: POST /api/send-email

const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const orderData = req.body;
    if (!orderData || !orderData.orderId) {
      return res.status(400).json({ error: 'Order data missing' });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const businessEmail = process.env.BUSINESS_EMAIL || 'modismetalracks@gmail.com';

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log('SMTP credentials not configured. Email notification skipped.');
      return res.status(200).json({
        message: 'Order logged. Email service not configured on server (skipping email dispatch).'
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: smtpPort == 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const itemsSummary = (orderData.items || [])
      .map(i => `<li><strong>${i.name}</strong> × ${i.qty} - ₹${(i.price * i.qty).toLocaleString('en-IN')}</li>`)
      .join('');

    // 1. Email to Customer (if provided)
    if (orderData.customer && orderData.customer.email) {
      await transporter.sendMail({
        from: `"Modi's Metal Racks & Furnitures" <${smtpUser}>`,
        to: orderData.customer.email,
        subject: `Your Order Confirmation – Modi's Metal Racks & Furnitures (#${orderData.orderId})`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #191919; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px;">
            <h2 style="color: #202124; margin-bottom: 8px;">Order Confirmation</h2>
            <p style="color: #5f6368; font-size: 14px;">Order ID: <strong>#${orderData.orderId}</strong></p>
            <p>Dear ${orderData.customer.name},</p>
            <p>Thank you for placing your rack order with <strong>MODI'S METAL RACKS & FURNITURES</strong>. We have received your order details.</p>
            
            <h3 style="border-bottom: 1px solid #eee; padding-bottom: 8px;">Order Summary</h3>
            <ul>${itemsSummary}</ul>
            <p><strong>Total Amount:</strong> ₹${orderData.total.toLocaleString('en-IN')}</p>
            <p><strong>Payment Status:</strong> ${orderData.paymentStatus}</p>
            <p><strong>Delivery Address:</strong> ${orderData.customer.address}</p>
            
            <p style="font-size: 13px; color: #70757A; margin-top: 24px;">
              For immediate order confirmation or transport arrangement, reach our Shivaji Nagar workshop at <strong>+91 7892043478</strong>.
            </p>
          </div>
        `
      });
    }

    // 2. Email Notification to Business
    await transporter.sendMail({
      from: `"Store Booking System" <${smtpUser}>`,
      to: businessEmail,
      subject: `[NEW ORDER] #${orderData.orderId} - ₹${orderData.total} from ${orderData.customer ? orderData.customer.name : 'Customer'}`,
      html: `
        <h2>New Order Received (#${orderData.orderId})</h2>
        <p><strong>Customer:</strong> ${orderData.customer ? orderData.customer.name : ''}</p>
        <p><strong>Phone:</strong> ${orderData.customer ? orderData.customer.phone : ''}</p>
        <p><strong>Address:</strong> ${orderData.customer ? orderData.customer.address : ''}</p>
        <p><strong>Total:</strong> ₹${orderData.total}</p>
        <p><strong>Payment Status:</strong> ${orderData.paymentStatus}</p>
        <ul>${itemsSummary}</ul>
      `
    });

    return res.status(200).json({ success: true, message: 'Emails dispatched successfully' });
  } catch (err) {
    console.error('Error sending order emails:', err);
    return res.status(500).json({ error: 'Failed to send emails' });
  }
};

