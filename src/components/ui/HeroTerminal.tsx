'use client';

import { useEffect, useState, useRef } from 'react';

const LINES = [
  { type: 'cmd',     text: 'acm --version' },
  { type: 'output',  text: 'ACM SRM AP  v2026.1.0  ✓ active' },
  { type: 'gap',     text: '' },
  { type: 'cmd',     text: 'acm members --count' },
  { type: 'success', text: '500+ active members enrolled' },
  { type: 'gap',     text: '' },
  { type: 'cmd',     text: 'acm events --upcoming' },
  { type: 'info',    text: '→  Responsible AI Symposium   May 15' },
  { type: 'info',    text: '→  IdeaForge Challenge        Apr 28' },
  { type: 'gap',     text: '' },
  { type: 'cmd',     text: 'acm domains list' },
  { type: 'domain',  text: '◆  Foundry        Technical & Dev' },
  { type: 'domain',  text: '◆  Amplifier      PR & Outreach' },
  { type: 'domain',  text: '◆  Canvas         Design & Media' },
  { type: 'domain',  text: '◆  Elevators      Sponsorship' },
  { type: 'domain',  text: '◆  Orchestrators  Events & Ops' },
  { type: 'gap',     text: '' },
  { type: 'cmd',     text: 'acm join --apply' },
  { type: 'success', text: 'Opening application... ✓' },
];

const CHAR_DELAY = 28;
const LINE_PAUSE = 300;

const typeClass: Record<string, string> = {
  cmd:     'text-dark-text font-medium',
  output:  'text-muted',
  success: 'text-emerald-600',
  info:    'text-acm-blue font-medium',
  domain:  'text-acm-blue-dark',
  gap:     '',
};

export default function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState<{ text: string; type: string }[]>([]);
  const [typingText, setTypingText]     = useState('');
  const [lineIdx, setLineIdx]           = useState(0);
  const [charIdx, setCharIdx]           = useState(0);

  const done = lineIdx >= LINES.length;

  // Ref directly on the scrollable body — scrolls ONLY that div, not the page
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visibleLines, typingText]);

  useEffect(() => {
    if (lineIdx >= LINES.length) return;

    const line = LINES[lineIdx];

    if (line.type !== 'cmd') {
      const t = setTimeout(() => {
        setVisibleLines(p => [...p, { text: line.text, type: line.type }]);
        setLineIdx(p => p + 1);
      }, LINE_PAUSE);
      return () => clearTimeout(t);
    }

    if (charIdx < line.text.length) {
      const t = setTimeout(() => {
        setTypingText(line.text.slice(0, charIdx + 1));
        setCharIdx(p => p + 1);
      }, CHAR_DELAY);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setVisibleLines(p => [...p, { text: line.text, type: line.type }]);
      setTypingText('');
      setCharIdx(0);
      setLineIdx(p => p + 1);
    }, LINE_PAUSE);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  return (
    /* Fixed 420px width — never grows or shrinks */
    <div style={{ width: '420px', flexShrink: 0 }} className="font-mono text-sm select-none">
      <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-xl shadow-acm-blue/8 flex flex-col">

        {/* Title bar — fixed height */}
        <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border" style={{ flexShrink: 0 }}>
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="flex-1 mx-4">
            <span className="block w-full bg-white border border-border rounded-md px-3 py-0.5 text-xs text-muted text-center tracking-wide">
              acm-cli — bash
            </span>
          </span>
        </div>

        {/* Body — FIXED height via inline style, clips overflow */}
        <div
          ref={bodyRef}
          className="p-5 bg-white space-y-0.5 overflow-y-auto"
          style={{ height: '288px', flexShrink: 0 }}
        >
          {visibleLines.map((line, i) =>
            line.type === 'gap' ? (
              <div key={i} className="h-2" />
            ) : (
              <div key={i} className={`leading-relaxed ${typeClass[line.type]}`}>
                {line.type === 'cmd' && (
                  <span className="text-acm-blue mr-2 font-bold">$</span>
                )}
                {line.text}
              </div>
            )
          )}

          {!done && lineIdx < LINES.length && LINES[lineIdx].type === 'cmd' && (
            <div className="leading-relaxed text-dark-text font-medium">
              <span className="text-acm-blue mr-2 font-bold">$</span>
              {typingText}
              <span className="inline-block w-[2px] h-4 bg-acm-blue ml-px align-middle animate-pulse" />
            </div>
          )}

          {done && (
            <div className="leading-relaxed">
              <span className="text-acm-blue mr-2 font-bold">$</span>
              <span className="inline-block w-[2px] h-4 bg-acm-blue ml-px align-middle animate-pulse" />
            </div>
          )}
        </div>

        {/* Status bar — fixed height */}
        <div className="px-4 py-2 bg-acm-blue flex items-center gap-3 text-xs text-blue-100" style={{ flexShrink: 0 }}>
          <span className="w-2 h-2 rounded-full bg-acm-yellow" />
          <span>ACM SRM AP</span>
          <span className="ml-auto opacity-70">branch: main</span>
        </div>
      </div>
    </div>
  );
}
