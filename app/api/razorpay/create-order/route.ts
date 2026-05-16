import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const IS_TEST_MODE = process.env.RAZORPAY_KEY_ID?.startsWith('rzp_test_');

// In test mode: ₹1 per voucher (100 paise) — avoids Razorpay's test account transaction limit
// In live mode: ₹14,200 per voucher (1,420,000 paise)
const PRICE_PER_VOUCHER_PAISE = IS_TEST_MODE ? 100 : 1_420_000;

const getRazorpay = () => {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret) {
    throw new Error('Razorpay credentials are not configured.');
  }
  return new Razorpay({ key_id, key_secret });
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { quantity, fullName, email, phone } = body;

    const qty = parseInt(quantity, 10);
    if (!qty || qty < 1 || qty > 5) {
      return NextResponse.json({ error: 'Invalid quantity.' }, { status: 400 });
    }

    const amount = PRICE_PER_VOUCHER_PAISE * qty;
    const razorpay = getRazorpay();

    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: `rcpt_${Date.now()}`,
      notes: {
        customer_name: fullName,
        customer_email: email,
        customer_phone: phone,
        quantity: qty.toString(),
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err: any) {
    console.error('[create-order]', err);
    return NextResponse.json(
      { error: err.message || 'Failed to create order.' },
      { status: 500 }
    );
  }
}
