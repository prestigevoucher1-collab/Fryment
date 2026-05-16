const { createClient } = require('@supabase/supabase-js');

const url = 'https://ojrdzuxxoeiwkpbbwtnu.supabase.co';
const key = 'sb_publishable_mkVPDbyMxtLbMbTE1_tmYQ_NTL1Wr3J';

const supabase = createClient(url, key);

async function checkBookings() {
  const { data, error } = await supabase.from('voucher_bookings').select('*').limit(1);
  if (error) {
    console.error('Error fetching bookings:', error);
    return;
  }
  if (data && data.length > 0) {
    console.log('Columns:', Object.keys(data[0]));
    console.log('Sample Booking:', data[0]);
  } else {
    console.log('No data found in voucher_bookings table.');
  }
}

checkBookings();
