// Backend Service: Email Notifications (Customer & Store)
const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.host = process.env.SMTP_HOST;
    this.port = process.env.SMTP_PORT || 587;
    this.user = process.env.SMTP_USER;
    this.pass = process.env.SMTP_PASS;
    this.businessEmail = process.env.BUSINESS_EMAIL || 'modismetalracks@gmail.com';
  }

  isConfigured() {
    return Boolean(this.host && this.user && this.pass);
  }

  getTransporter() {
    return nodemailer.createTransport({
      host: this.host,
      port: Number(this.port),
      secure: Number(this.port) === 465,
      auth: {
        user: this.user,
        pass: this.pass
      }
    });
  }

  async sendOrderEmails(orderData) {
    if (!this.isConfigured()) {
      console.log('[EmailService] SMTP not configured. Skipping automated email transmission.');
      return false;
    }

    const transporter = this.getTransporter();
    const itemsHtml = (orderData.items || [])
      .map(i => `<li><strong>${i.name}</strong> × ${i.qty} - ₹${(i.price * i.qty).toLocaleString('en-IN')}</li>`)
      .join('');

    // 1. Send confirmation to customer if email is provided
    if (orderData.customer?.email) {
      await transporter.sendMail({
        from: `"Modi's Metal Racks & Furnitures" <${this.user}>`,
        to: orderData.customer.email,
        subject: `Your Order Confirmation – Modi's Metal Racks & Furnitures (#${orderData.orderId})`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #111318; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
            <h2 style="color: #0753A6; margin-bottom: 8px;">Order Received!</h2>
            <p>Dear ${orderData.customer.name},</p>
            <p>Thank you for choosing <strong>MODI'S METAL RACKS & FURNITURES</strong> (Est. 2001). We have received your order details.</p>
            <h3>Summary (#${orderData.orderId})</h3>
            <ul>${itemsHtml}</ul>
            <p><strong>Total:</strong> ₹${orderData.total.toLocaleString('en-IN')}</p>
            <p><strong>Payment Status:</strong> ${orderData.paymentStatus}</p>
            <p><strong>Delivery Address:</strong> ${orderData.customer.address}</p>
            <p style="font-size: 13px; color: #5A6270; margin-top: 24px;">
              For immediate dispatch arrangement, contact our Shivaji Nagar workshop at <strong>+91 7892043478</strong>.
            </p>
          </div>
        `
      });
    }

    // 2. Send notification to store
    await transporter.sendMail({
      from: `"Order Portal" <${this.user}>`,
      to: this.businessEmail,
      subject: `[NEW ORDER] #${orderData.orderId} - ₹${orderData.total} from ${orderData.customer?.name || 'Customer'}`,
      html: `
        <h2>New Order Received (#${orderData.orderId})</h2>
        <p><strong>Customer:</strong> ${orderData.customer?.name} (${orderData.customer?.phone})</p>
        <p><strong>Address:</strong> ${orderData.customer?.address}</p>
        <p><strong>Total Amount:</strong> ₹${orderData.total}</p>
        <p><strong>Payment:</strong> ${orderData.paymentStatus} (${orderData.paymentMethod})</p>
        <ul>${itemsHtml}</ul>
      `
    });

    return true;
  }
}

module.exports = new EmailService();

