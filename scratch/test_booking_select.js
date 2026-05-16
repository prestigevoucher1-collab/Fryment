const { createClient } = require('@supabase/supabase-js');

const url = 'https://ojrdzuxxoeiwkpbbwtnu.supabase.co';
const key = 'sb_publishable_mkVPDbyMxtLbMbTE1_tmYQ_NTL1Wr3J';

const supabase = createClient(url, key);

async function testSelect() {
  const { data, error } = await supabase.from('voucher_bookings').select('*');
  if (error) {
    console.error('Select Error:', error);
  } else {
    console.log('Select Success. Row count:', data.length);
  }
}

testSelect();
