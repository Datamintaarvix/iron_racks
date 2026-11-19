// Backend Routes: Orders & Payment Processing
const express = require('express');
const router = express.Router();
const razorpayService = require('../services/razorpayService');
const emailService = require('../services/emailService');

// POST /api/create-order
router.post('/create-order', async (req, res) => {
  try {
    const { amount, receipt, notes } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    if (!razorpayService.isConfigured()) {
      return res.status(503).json({
        error: 'Razorpay keys not configured on server. Please use manual / WhatsApp fallback.',
        fallback: true
      });
    }

    const order = await razorpayService.createOrder({ amount, receipt, notes });
    return res.json(order);
  } catch (err) {
    console.error('Create order error:', err);
    return res.status(500).json({ error: err.message || 'Failed to create order' });
  }
});

// POST /api/verify-payment
router.post('/verify-payment', (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing required signature fields' });
    }

    const isValid = razorpayService.verifyPaymentSignature({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    });

    if (isValid) {
      return res.json({ verified: true, message: 'Signature verified successfully' });
    } else {
      return res.status(400).json({ verified: false, message: 'Invalid payment signature' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Verification error' });
  }
});

// POST /api/send-email
router.post('/send-email', async (req, res) => {
  try {
    const orderData = req.body;
    const dispatched = await emailService.sendOrderEmails(orderData);
    return res.json({ success: true, dispatched });
  } catch (err) {
    return res.status(500).json({ error: 'Email service error' });
  }
});

module.exports = router;

