/**
 * MODI'S METAL RACKS & FURNITURES
 * Standalone Node.js & Express Backend Server
 * Run locally: npm start (or node backend/server.js)
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const orderRoutes = require('./routes/orderRoutes');
const emailService = require('./services/emailService');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mount modular API routes
app.use('/api', orderRoutes);

// Contact form endpoint with validation and email notification
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, email, enquiryType, product, quantity, message } = req.body;
    
    // Server-side validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Full name or company name is required.' });
    }
    const cleanPhone = (phone || '').replace(/[^0-9]/g, '');
    if (cleanPhone.length !== 10) {
      return res.status(400).json({ success: false, error: 'A valid 10-digit Indian mobile number is required.' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Rack dimensions and requirements are required.' });
    }

    const reference = 'MR-' + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    console.log(`[Enquiry #${reference}] Received from ${name} (${cleanPhone}) | Type: ${enquiryType || 'General'} | Product: ${product || 'General'}`);

    // Try sending automated notification via configured SMTP
    try {
      if (emailService && emailService.isConfigured()) {
        const transporter = emailService.getTransporter();
        await transporter.sendMail({
          from: `"Modi's Iron Racks Enquiries" <${emailService.user}>`,
          to: emailService.businessEmail,
          subject: `[NEW RACK ENQUIRY #${reference}] ${name} (${cleanPhone})`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px; color: #101216;">
              <h2 style="color: #073B83; margin-top: 0;">New Factory Rack Requirement</h2>
              <p style="font-size: 14px; color: #627184;">Reference: <strong>#${reference}</strong> | Date: ${dateStr}</p>
              <hr style="border: 0; border-top: 1px solid #E5EBF2; margin: 16px 0;">
              <table style="width: 100%; font-size: 15px; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; width: 160px;">Customer Name:</td><td>${name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Mobile:</td><td><a href="tel:${cleanPhone}">${cleanPhone}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email ? `<a href="mailto:${email}">${email}</a>` : 'Not provided'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Enquiry Type:</td><td>${enquiryType || 'General Enquiry'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Product Category:</td><td>${product || 'Slotted Angle Racks'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Quantity:</td><td>${quantity || 'Not specified'}</td></tr>
              </table>
              <h4 style="margin: 20px 0 8px; color: #073B83;">Dimensions & Requirements:</h4>
              <div style="background: #F3F7FC; border: 1px solid #D6DFEB; border-radius: 8px; padding: 14px; white-space: pre-wrap; font-size: 14px;">${message}</div>
              <p style="margin-top: 24px; font-size: 13px; color: #627184;">Direct inquiry received from Modi's Iron Racks contact page.</p>
            </div>
          `
        });
      }
    } catch (mailErr) {
      console.warn('[Contact] Automated email warning:', mailErr.message);
    }

    return res.json({
      success: true,
      reference,
      name,
      message: 'Your enquiry has been submitted successfully. Our team will contact you soon.'
    });
  } catch (err) {
    console.error('Contact endpoint error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error while recording enquiry.' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    business: "MODI'S METAL RACKS & FURNITURES",
    established: 2001,
    location: 'Shivaji Nagar, Bengaluru',
    timestamp: new Date().toISOString()
  });
});

// Serve frontend static assets from root workspace
app.use(express.static(path.join(__dirname, '..')));

// Catch-all route to serve index.html for client routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(` MODI'S METAL RACKS & FURNITURES - SERVER ACTIVE`);
  console.log(` Running on: http://localhost:${PORT}`);
  console.log(` Glassmorphic Frontend & Secure API Ready`);
  console.log(`======================================================\n`);
});
