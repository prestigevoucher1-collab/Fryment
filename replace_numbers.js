const fs = require('fs');
const path = require('path');

const dirsToSearch = ['app', 'components'];
const oldNumber = '9325216364';
const newMobile = '9930635149';
const newWhatsapp = '8369074846';

function walkSync(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    var filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile() && (filepath.endsWith('.tsx') || filepath.endsWith('.ts') || filepath.endsWith('.js'))) {
      callback(filepath);
    }
  });
}

dirsToSearch.forEach((dir) => {
  if (fs.existsSync(dir)) {
    walkSync(dir, (filepath) => {
      let content = fs.readFileSync(filepath, 'utf8');
      let changed = false;

      // Replace WhatsApp specifically (e.g., wa.me/91...)
      if (content.includes(`wa.me/91${oldNumber}`)) {
        content = content.replace(new RegExp(`wa\\.me/91${oldNumber}`, 'g'), `wa.me/91${newWhatsapp}`);
        changed = true;
      }
      
      // Replace remaining instances of the old number with the new mobile number
      if (content.includes(oldNumber)) {
        content = content.replace(new RegExp(oldNumber, 'g'), newMobile);
        changed = true;
      }

      // Also handle formatted numbers if any "+91 932521 6364" -> "+91 993063 5149"
      if (content.includes("932521 6364")) {
         content = content.replace(/932521 6364/g, "993063 5149");
         changed = true;
      }

      if (changed) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Updated numbers in: ${filepath}`);
      }
    });
  }
});
