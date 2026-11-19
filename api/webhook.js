// Vercel Serverless Function: Razorpay Webhook Handler
// Endpoint: POST /api/webhook

const crypto = require('crypto');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const signature = req.headers['x-razorpay-signature'];

    if (!webhookSecret || !signature) {
      return res.status(400).json({ error: 'Webhook secret or signature missing' });
    }

    const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex');

    if (expectedSignature !== signature) {
      return res.status(400).json({ error: 'Invalid webhook signature' });
    }

    const event = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

    console.log(`[Webhook Event Received]: ${event.event}`, event.payload);

    if (event.event === 'payment.captured') {
      // Payment captured successfully
      // Update order status in persistent database
    } else if (event.event === 'payment.failed') {
      // Payment failed
    }

    return res.status(200).json({ status: 'ok' });
  } catch (err) {
    console.error('Webhook error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

