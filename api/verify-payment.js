// Vercel Serverless Function: Verify Razorpay Payment Signature
// Endpoint: POST /api/verify-payment

const crypto = require('crypto');

module.exports = async (req, res) => {
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
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing required signature fields' });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return res.status(500).json({ error: 'Server keySecret not configured' });
    }

    // Verify HMAC SHA256 signature
    const hmac = crypto.createHmac('sha256', keySecret);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generatedSignature = hmac.digest('hex');

    const isValid = generatedSignature === razorpay_signature;

    if (isValid) {
      return res.status(200).json({
        verified: true,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        message: 'Payment signature verified successfully'
      });
    } else {
      return res.status(400).json({
        verified: false,
        message: 'Invalid signature. Payment could not be validated.'
      });
    }
  } catch (err) {
    console.error('Error verifying payment:', err);
    return res.status(500).json({ error: 'Internal verification error' });
  }
};

