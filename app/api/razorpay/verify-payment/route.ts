import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      // Booking details
      fullName,
      phone,
      email,
      state,
      quantity,
    } = body;

    // 1. Verify the payment signature
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) throw new Error('Razorpay secret not configured.');

    const generatedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        { success: false, error: 'Payment verification failed. Signature mismatch.' },
        { status: 400 }
      );
    }

    // 2. Insert verified booking into Supabase
    const { error: dbError } = await supabase.from('voucher_bookings').insert([
      {
        full_name: fullName,
        whatsapp_number: phone,
        email,
        location: 'N/A',
        state,
        quantity: parseInt(quantity, 10),
        payment_status: 'paid',
        razorpay_order_id,
        razorpay_payment_id,
      },
    ]);

    if (dbError) {
      console.error('[verify-payment] Supabase error:', dbError);
      // Payment succeeded — don't fail the user, just log it
    }

    return NextResponse.json({ success: true, paymentId: razorpay_payment_id });
  } catch (err: any) {
    console.error('[verify-payment]', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Verification error.' },
      { status: 500 }
    );
  }
}
