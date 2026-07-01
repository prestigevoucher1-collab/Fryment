import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { EXAMS } from '@/data/pte/exams';

const IS_TEST_MODE = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID?.startsWith('rzp_test_');

const getRazorpay = () => {
  const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret) {
    throw new Error('Razorpay credentials are not configured.');
  }
  return new Razorpay({ key_id, key_secret });
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { quantity, fullName, email, phone, examId, price } = body;

    const qty = parseInt(quantity, 10);
    if (!qty || qty < 1 || qty > 5) {
      return NextResponse.json({ error: 'Invalid quantity.' }, { status: 400 });
    }

    let pricePerVoucherPaise = 100; // default test price
    
    if (!IS_TEST_MODE) {
      if (!examId || !EXAMS[examId]) {
        return NextResponse.json({ error: 'Invalid or missing exam type.' }, { status: 400 });
      }
      // TEMPORARY FOR TESTING: Force ₹1 on Live Mode
      pricePerVoucherPaise = 100;
      // TO REVERT: pricePerVoucherPaise = EXAMS[examId].price * 100;
    }

    const amount = pricePerVoucherPaise * qty;
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
        exam_id: examId || 'unknown',
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });
  } catch (err: any) {
    console.error('[create-order]', err);
    return NextResponse.json(
      { error: err.message || 'Failed to create order.' },
      { status: 500 }
    );
  }
}
