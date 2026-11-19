// Vercel Serverless Function: Contact Form Submission
// Endpoint: POST /api/contact

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
    const { name, phone, email, subject, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({ error: 'Name, phone, and message are required' });
    }

    console.log(`[Contact Inquiry]: ${name} (${phone}): ${subject} - ${message}`);

    // If SMTP configured, optionally forward email to business
    return res.status(200).json({
      success: true,
      message: 'Inquiry received successfully'
    });
  } catch (err) {
    console.error('Contact API Error:', err);
    return res.status(500).json({ error: 'Server error handling inquiry' });
  }
};

