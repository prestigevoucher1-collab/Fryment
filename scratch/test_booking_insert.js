const { createClient } = require('@supabase/supabase-js');

const url = 'https://ojrdzuxxoeiwkpbbwtnu.supabase.co';
const key = 'sb_publishable_mkVPDbyMxtLbMbTE1_tmYQ_NTL1Wr3J';

const supabase = createClient(url, key);

async function insertDummy() {
  const { data, error } = await supabase.from('voucher_bookings').insert([
    {
      full_name: 'Test Admin',
      whatsapp_number: '919999999999',
      email: 'admin@fryment.com',
      location: 'Delhi',
      state: 'Delhi',
      quantity: 1,
      payment_status: 'paid',
      razorpay_order_id: 'order_test_123',
      razorpay_payment_id: 'pay_test_123'
    }
  ]).select();

  if (error) {
    console.error('Insert Error:', error);
  } else {
    console.log('Insert Success:', data);
  }
}

insertDummy();
