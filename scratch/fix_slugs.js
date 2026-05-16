const { createClient } = require('@supabase/supabase-js');

const url = 'https://ojrdzuxxoeiwkpbbwtnu.supabase.co';
const key = 'sb_publishable_mkVPDbyMxtLbMbTE1_tmYQ_NTL1Wr3J';

const supabase = createClient(url, key);

async function fixSlugs() {
  const { data, error } = await supabase.from('blogs').select('id, title, slug');
  if (error) return console.error(error);

  for (const blog of data) {
    const newSlug = blog.title.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    console.log(`Updating "${blog.title}" slug from "${blog.slug}" to "${newSlug}"`);
    const { error: updateError } = await supabase
      .from('blogs')
      .update({ slug: newSlug, title: blog.title.trim() })
      .eq('id', blog.id);
    
    if (updateError) console.error('Update error:', updateError);
  }
}

fixSlugs();
