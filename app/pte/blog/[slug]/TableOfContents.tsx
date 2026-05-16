'use client';
import { useEffect, useState } from 'react';

function extractHeadings(html: string) {
  const matches = [...html.matchAll(/<h([23])[^>]*>(.*?)<\/h[23]>/gi)];
  return matches.map((m, i) => ({
    level: parseInt(m[1]),
    text: m[2].replace(/<[^>]*>/g, '').trim(),
    id: `heading-${i}`,
  }));
}

export default function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState('');
  const headings = extractHeadings(content);

  useEffect(() => {
    // Assign IDs to actual DOM headings
    const articleHeadings = document.querySelectorAll('article h2, article h3');
    articleHeadings.forEach((el, i) => {
      el.id = `heading-${i}`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-10% 0% -85% 0%' }
    );

    articleHeadings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return <p className="text-xs text-slate-400">No headings found.</p>;

  return (
    <nav className="space-y-1">
      <ul className="space-y-0.5">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? 'pl-4' : ''}>
            <a
              href={`#${h.id}`}
              className={`block text-[13px] py-1.5 px-3 rounded-lg transition-all duration-200 ${
                activeId === h.id
                  ? 'text-[#1565d8] font-bold bg-[#1565d8]/5'
                  : 'text-slate-500 hover:text-[#091e42] hover:bg-slate-100'
              }`}
            >
              {h.level === 3 && <span className="mr-1.5 text-slate-300">└</span>}
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
