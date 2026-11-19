// Backend Service: Razorpay API Helper
const crypto = require('crypto');

class RazorpayService {
  constructor() {
    this.keyId = process.env.RAZORPAY_KEY_ID;
    this.keySecret = process.env.RAZORPAY_KEY_SECRET;
  }

  isConfigured() {
    return Boolean(this.keyId && this.keySecret);
  }

  async createOrder({ amount, receipt, notes }) {
    if (!this.isConfigured()) {
      throw new Error('Razorpay credentials not configured');
    }

    const authHeader = 'Basic ' + Buffer.from(`${this.keyId}:${this.keySecret}`).toString('base64');
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
      throw new Error(data.error?.description || 'Razorpay order creation failed');
    }

    return { ...data, keyId: this.keyId };
  }

  verifyPaymentSignature({ razorpay_order_id, razorpay_payment_id, razorpay_signature }) {
    if (!this.keySecret) {
      throw new Error('Secret key not configured');
    }

    const hmac = crypto.createHmac('sha256', this.keySecret);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generated = hmac.digest('hex');

    return generated === razorpay_signature;
  }
}

module.exports = new RazorpayService();

