"use client";

import React, { useEffect, useState } from 'react';

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    // Basic extraction of <h2> and <h3> tags for TOC
    if (!content) return;
    const matches = content.match(/<h([2-3])[^>]*>(.*?)<\/h\1>/g);
    if (matches) {
      const extracted = matches.map(match => {
        const level = parseInt(match.replace(/<h([2-3]).*/, '$1'), 10);
        const textMatch = match.match(/<h[2-3][^>]*>(.*?)<\/h[2-3]>/);
        const text = textMatch ? textMatch[1].replace(/<[^>]*>/g, '') : '';
        const idMatch = match.match(/id="([^"]+)"/);
        const id = idMatch ? idMatch[1] : text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return { id, text, level };
      }).filter(h => h.text.trim().length > 0);
      setHeadings(extracted);
    }
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <div className="bg-surface-dim border border-outline-variant rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold text-on-surface mb-4">Table of Contents</h3>
      <ul className="space-y-3">
        {headings.map((heading, i) => (
          <li key={i} style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}>
            <a 
              href={`#${heading.id}`}
              className="text-sm font-medium text-primary/80 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(heading.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
