const fs = require('fs');
const path = require('path');

const dirsToSearch = ['components/pte', 'components/exam', 'app'];

const replacements = {
  'text-slate-900': 'text-on-surface',
  'text-slate-800': 'text-on-surface',
  'text-slate-700': 'text-on-surface',
  'text-slate-600': 'text-on-surface-variant',
  'text-slate-500': 'text-on-surface-variant',
  'text-slate-400': 'text-outline',
  'bg-slate-50': 'bg-surface-dim',
  'bg-slate-100': 'bg-surface-muted',
  'border-slate-100': 'border-outline-variant',
  'border-slate-200': 'border-outline',
  
  'text-emerald-700': 'text-primary',
  'text-emerald-600': 'text-primary',
  'text-emerald-500': 'text-primary-light',
  'text-emerald-50': 'text-surface-dim',
  'bg-emerald-50': 'bg-surface-dim',
  'bg-emerald-100': 'bg-surface-muted',
  'bg-emerald-500': 'bg-primary',
  'bg-emerald-600': 'bg-primary-dark',
  'border-emerald-100': 'border-outline-variant',
  'border-emerald-200': 'border-outline',

  'text-teal-700': 'text-secondary-dark',
  'text-teal-600': 'text-secondary-dark',
  'bg-teal-50': 'bg-surface-dim',
  'bg-teal-100': 'bg-surface-muted',
  'border-teal-100': 'border-outline-variant',

  'from-emerald-600': 'from-primary',
  'to-teal-700': 'to-primary-dark',
  
  'ring-emerald-500': 'ring-primary',
  'shadow-emerald-900': 'shadow-primary',
  
  // Specific gradients that might be lingering
  'from-slate-50 via-emerald-50 to-teal-50': 'bg-surface-dim',
};

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

      for (const [oldClass, newClass] of Object.entries(replacements)) {
        if (content.includes(oldClass)) {
          // Replace using word boundary, except for complex strings with spaces
          if (oldClass.includes(' ')) {
             content = content.split(oldClass).join(newClass);
          } else {
             content = content.replace(new RegExp(`\\b${oldClass}\\b`, 'g'), newClass);
          }
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Updated colors in: ${filepath}`);
      }
    });
  }
});
