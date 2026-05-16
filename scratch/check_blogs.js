const { createClient } = require('@supabase/supabase-js');

const url = 'https://ojrdzuxxoeiwkpbbwtnu.supabase.co';
const key = 'sb_publishable_mkVPDbyMxtLbMbTE1_tmYQ_NTL1Wr3J';

const supabase = createClient(url, key);

async function checkBlogs() {
  const { data, error } = await supabase
    .from('blogs')
    .select('id, title, slug, published')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('Blogs in DB:');
  data.forEach(b => {
    console.log(`- Title: ${b.title}, Slug: ${b.slug}, Published: ${b.published}`);
  });
}

checkBlogs();
