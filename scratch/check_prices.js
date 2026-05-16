const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkPrices() {
  const { data, error } = await supabase.from('exam_prices').select('*');
  if (error) {
    console.error('Error fetching prices:', error);
    return;
  }
  console.log('Prices in DB:', JSON.stringify(data, null, 2));
}

checkPrices();
