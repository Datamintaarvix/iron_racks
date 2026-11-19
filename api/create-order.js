// Vercel Serverless Function: Create Razorpay Order
// Endpoint: POST /api/create-order

const crypto = require('crypto');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { amount, receipt, notes } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Valid amount in paise is required' });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return res.status(503).json({
        error: 'Razorpay keys not configured on server. Please use manual / WhatsApp payment fallback.',
        fallback: true
      });
    }

    // Call Razorpay API using native fetch
    const authHeader = 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64');
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify({
        amount: Math.round(amount),
        currency: 'INR',
        receipt: receipt || `rcpt_${Date.now()}`,
        notes: notes || {}
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || 'Failed to create Razorpay order' });
    }

    return res.status(200).json({
      id: data.id,
      amount: data.amount,
      currency: data.currency,
      receipt: data.receipt,
      keyId: keyId
    });
  } catch (err) {
    console.error('Error creating Razorpay order:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

