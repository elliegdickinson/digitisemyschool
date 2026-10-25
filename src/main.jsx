import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const EMAIL = 'digitisemyschool@gmail.com';

const Arrow = ({ className = '' }) => (
  <svg className={'nudge inline-block ' + className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Tick = ({ className = '' }) => (
  <svg className={'flex-none ' + className} width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3.5 9.5l3.5 3.5 7.5-8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Navigation */
const navLinks = [['Sound familiar?', '#familiar'], ['Meet Anne', '#about'], ['Services', '#services'], ['OpenApply audit', '#audit']];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="gutter sticky top-0 z-30 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-site items-center justify-between gap-6 py-4">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="text-[19px] font-semibold tracking-tight">Digitise My School<span className="text-apricotdeep">.</span></span>
          <span className="hidden text-[14px] text-muted xl:inline">a small, smart digital studio for schools</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 text-[16px] text-muted md:flex">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} className="link-u hover:text-ink">{label}</a>
          ))}
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-[3px] bg-forest px-4 py-2.5 font-medium text-forestink hover:bg-forestdeep">
            Let's talk<Arrow />
          </a>
        </nav>
        <button type="button" className="rounded-[3px] border border-line px-3.5 py-2 text-[16px] md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="mx-auto grid max-w-site pb-6 md:hidden">
          {[...navLinks, ["Let's talk", '#contact']].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-line py-3.5 text-[18px]">{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* Hero illustration: scattered admissions admin on the left, one organised CRM record on the right */
const C = { ink: 'var(--ink)', muted: 'var(--muted)', forest: 'var(--forest)', paper: 'var(--paper)', sage: 'var(--sage)', sageDeep: 'var(--sage-deep)', apricot: 'var(--apricot)', apricotDeep: 'var(--apricot-deep)', apricotSoft: 'var(--apricot-soft)', line: 'var(--line)' };

const EmailCard = ({ x, y, w }) => (
  <g>
    <rect x={x} y={y} width={w} height="78" rx="6" fill={C.paper} stroke={C.forest} strokeWidth="1.5" />
    <rect x={x + 14} y={y + 16} width="26" height="18" rx="2" fill="none" stroke={C.forest} strokeWidth="1.5" />
    <path d={`M${x + 14} ${y + 17} l13 9 l13 -9`} fill="none" stroke={C.forest} strokeWidth="1.5" />
    <text x={x + 52} y={y + 31} fontSize="15" fontWeight="600" fill={C.ink}>Re: Fwd: Year 3 place?</text>
    <text x={x + 14} y={y + 60} fontSize="14" fill={C.muted}>Unanswered · 4 days</text>
    <circle cx={x + w - 18} cy={y + 55} r="5" fill={C.apricotDeep} />
  </g>
);

const SheetCard = ({ x, y, w }) => (
  <g>
    <rect x={x} y={y} width={w} height="104" rx="6" fill={C.paper} stroke={C.forest} strokeWidth="1.5" />
    <text x={x + 14} y={y + 26} fontSize="14.5" fontWeight="500" fill={C.ink}>admissions_FINAL_v2.xlsx</text>
    <rect x={x + 14} y={y + 40} width={w - 28} height="50" fill="none" stroke={C.sageDeep} strokeWidth="1" />
    <rect x={x + 14} y={y + 57} width={w - 28} height="16" fill={C.apricotSoft} />
    {[57, 73].map(yy => <line key={yy} x1={x + 14} x2={x + w - 14} y1={y + yy} y2={y + yy} stroke={C.sageDeep} strokeWidth="1" />)}
    {[0.36, 0.68].map(f => <line key={f} x1={x + 14 + (w - 28) * f} x2={x + 14 + (w - 28) * f} y1={y + 40} y2={y + 90} stroke={C.sageDeep} strokeWidth="1" />)}
  </g>
);

const ChatBubble = ({ x, y, w, text = 'Hi! Any space in Year 7?' }) => (
  <g>
    <path d={`M${x + 14} ${y} h${w - 28} a14 14 0 0 1 14 14 v24 a14 14 0 0 1 -14 14 h${-(w - 46)} l-14 10 v-10 a14 14 0 0 1 -14 -14 v-24 a14 14 0 0 1 14 -14z`} fill={C.sage} stroke={C.forest} strokeWidth="1.5" />
    <text x={x + 18} y={y + 32} fontSize="15" fill={C.ink}>{text}</text>
  </g>
);

const StickyNote = ({ x, y, rotate = -4 }) => (
  <g transform={`rotate(${rotate} ${x + 75} ${y + 42})`}>
    <rect x={x} y={y} width="150" height="84" fill={C.apricotSoft} stroke={C.apricotDeep} strokeWidth="1.25" />
    <text x={x + 14} y={y + 34} fontSize="15.5" fontStyle="italic" fill={C.ink}>Call Mrs Tan</text>
    <text x={x + 14} y={y + 58} fontSize="15.5" fontStyle="italic" fill={C.ink}>back!!</text>
  </g>
);

const RecordCard = ({ x, y, w, gap }) => {
  const stages = [['Enquiry, via WhatsApp', 'done'], ['Tour booked', 'done'], ['Application received', 'now'], ['Offer', 'next'], ['Enrolled', 'next']];
  const top = y + 150;
  return (
    <g>
      <path d={`M${x} ${y + 22} v-16 a6 6 0 0 1 6 -6 h112 a6 6 0 0 1 6 6 v16`} fill={C.forest} />
      <text x={x + 14} y={y + 16} fontSize="12.5" fontWeight="500" letterSpacing="1.2" fill="var(--forest-ink)">ONE RECORD</text>
      <rect x={x} y={y + 22} width={w} height={gap * 4 + 200} rx="6" fill={C.paper} stroke={C.forest} strokeWidth="1.5" />
      <text x={x + 24} y={y + 62} fontSize="20" fontWeight="600" fill={C.ink}>The Tran family</text>
      <text x={x + 24} y={y + 86} fontSize="14.5" fill={C.muted}>Year 3 · August entry</text>
      <line x1={x + 24} x2={x + w - 24} y1={y + 106} y2={y + 106} stroke={C.line} />
      <line x1={x + 36} x2={x + 36} y1={top} y2={top + gap * 4} stroke={C.line} strokeWidth="2" />
      <line x1={x + 36} x2={x + 36} y1={top} y2={top + gap * 2} stroke={C.forest} strokeWidth="2" />
      {stages.map(([label, state], i) => {
        const cy = top + gap * i;
        return (
          <g key={label}>
            {state === 'done' && <><circle cx={x + 36} cy={cy} r="11" fill={C.forest} /><path d={`M${x + 30} ${cy} l4 4 l8 -8`} stroke="var(--forest-ink)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>}
            {state === 'now' && <><circle cx={x + 36} cy={cy} r="11" fill={C.paper} stroke={C.apricotDeep} strokeWidth="3" /><circle cx={x + 36} cy={cy} r="4" fill={C.apricotDeep} /></>}
            {state === 'next' && <circle cx={x + 36} cy={cy} r="9" fill={C.paper} stroke={C.sageDeep} strokeWidth="1.5" />}
            <text x={x + 60} y={cy + 5} fontSize="15.5" fontWeight={state === 'now' ? 600 : 400} fill={state === 'next' ? C.muted : C.ink}>{label}</text>
          </g>
        );
      })}
      <rect x={x + 24} y={top + gap * 4 + 26} width={w - 48} height="34" rx="4" fill={C.sage} />
      <text x={x + 38} y={top + gap * 4 + 48} fontSize="14" fill={C.forest}>Next: assessment on Thursday</text>
    </g>
  );
};

function HeroGraphicWide() {
  const knot = [400, 236];
  const lines = [
    'M246 58 C 330 40, 360 140, 310 152 S 270 228, 352 214 S 414 230, 400 236',
    'M316 174 C 384 160, 344 280, 324 252 S 384 196, 400 236',
    'M234 290 C 304 312, 364 206, 344 266 S 424 272, 400 236',
    'M306 376 C 388 364, 334 284, 374 292 S 404 252, 400 236',
    'M126 410 C 206 446, 306 424, 354 334 S 334 252, 400 236'
  ];
  return (
    <svg viewBox="0 0 780 470" className="hidden h-auto w-full md:block" role="img" aria-label="An unanswered email, a spreadsheet, a WhatsApp message, a sticky note and a calendar entry, tangled together, then organised into one family record moving through enquiry, tour, application, offer and enrolment">
      <text x="120" y="14" fontSize="14" fontStyle="italic" fontWeight="300" fill={C.muted}>where things live now</text>
      <text x="500" y="14" fontSize="14" fontStyle="italic" fontWeight="300" fill={C.muted}>where they should</text>
      <g className="tangle" fill="none" stroke={C.sageDeep} strokeWidth="1.4">{lines.map((d, i) => <path key={i} d={d} />)}</g>
      <EmailCard x={6} y={28} w={240} />
      <SheetCard x={66} y={124} w={250} />
      <ChatBubble x={4} y={262} w={230} />
      <StickyNote x={156} y={330} />
      <g>
        <rect x="4" y="366" width="122" height="88" rx="6" fill={C.paper} stroke={C.forest} strokeWidth="1.5" />
        <rect x="4" y="366" width="122" height="24" rx="6" fill={C.forest} />
        <rect x="4" y="380" width="122" height="10" fill={C.forest} />
        <text x="16" y="383" fontSize="12.5" fontWeight="500" letterSpacing="1" fill="var(--forest-ink)">TOUR</text>
        <text x="16" y="424" fontSize="15" fill={C.ink}>Tues 10:00?</text>
      </g>
      <circle cx={knot[0]} cy={knot[1]} r="6" fill={C.apricotDeep} />
      <path className="draw" d="M408 236 H 462" stroke={C.apricotDeep} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M454 228 l10 8 -10 8" stroke={C.apricotDeep} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <RecordCard x={478} y={28} w={296} gap={44} />
    </svg>
  );
}

function HeroGraphicNarrow() {
  const lines = [
    'M250 40 C 330 60, 300 150, 240 170 S 150 240, 200 280 S 190 320, 180 336',
    'M346 140 C 360 220, 250 200, 230 250 S 200 300, 180 336',
    'M210 236 C 260 300, 120 300, 150 290 S 190 310, 180 336',
    'M190 290 C 120 330, 220 330, 180 336'
  ];
  return (
    <svg viewBox="0 0 360 760" className="h-auto w-full md:hidden" role="img" aria-label="An unanswered email, a spreadsheet, a WhatsApp message and a sticky note, tangled together, then organised into one family record moving through enquiry, tour, application, offer and enrolment">
      <g className="tangle" fill="none" stroke={C.sageDeep} strokeWidth="1.4">{lines.map((d, i) => <path key={i} d={d} />)}</g>
      <EmailCard x={2} y={4} w={250} />
      <SheetCard x={100} y={96} w={248} />
      <ChatBubble x={2} y={214} w={214} text="Any space in Year 7?" />
      <StickyNote x={196} y={226} rotate={4} />
      <circle cx="180" cy="340" r="6" fill={C.apricotDeep} />
      <path d="M180 348 V 384" stroke={C.apricotDeep} strokeWidth="3" strokeLinecap="round" />
      <path d="M172 376 l8 10 8 -10" stroke={C.apricotDeep} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <RecordCard x={10} y={400} w={340} gap={40} />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="gutter">
      <div className="mx-auto max-w-site pb-20 pt-10 md:pb-24 md:pt-14">
        <span className="doc-tab">A small, smart digital studio for schools</span>
        <div className="tab-rule text-forest"></div>

        <h1 className="display mt-9 text-[54px] sm:text-[88px] lg:text-[128px] xl:text-[148px]">
          Schools are complicated.
          <span className="mt-3 block font-light text-forest">Your systems <span className="marker-thin">shouldn't be.</span></span>
        </h1>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-[20px] leading-[1.65] sm:text-[22px]">
              I help international schools untangle OpenApply, CRM workflows and all the admin in between, so the system does the copying and pasting and your team gets back to the families.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#contact" className="group inline-flex items-center gap-3 rounded-[3px] bg-apricot px-6 py-4 text-[17px] font-medium text-ink hover:bg-apricotdeep">
                Book a 20-minute chat<Arrow />
              </a>
              <a href="#audit" className="group inline-flex items-center gap-2 text-[17px] font-medium text-forest">
                <span className="link-u">See the OpenApply audit</span><Arrow />
              </a>
            </div>
          </div>
          <figure className="hero-graphic lg:col-span-8 lg:-mr-4">
            <HeroGraphicWide />
            <HeroGraphicNarrow />
          </figure>
        </div>
      </div>
    </section>
  );
}

/* Sound familiar? */
function Spreadsheets() {
  const files = ['admissions_2026.xlsx', 'admissions_2026_FINAL.xlsx', 'admissions_2026_FINAL_v2 (use this one).xlsx'];
  return (
    <div className="relative h-[168px] w-full" aria-hidden="true">
      {files.map((f, i) => (
        <div key={f} className={'absolute flex w-max items-center gap-3 rounded-[5px] border-[1.5px] bg-paper px-3.5 py-2.5 text-[15px] leading-snug shadow-[0_6px_14px_-8px_rgba(20,50,35,.45)] ' + (i === 2 ? 'border-apricotdeep font-medium' : 'border-forest')}
          style={{ top: i * 46, left: i * 24, maxWidth: `calc(100% - ${i * 24}px)` }}>
          <svg width="15" height="18" viewBox="0 0 14 16" className="flex-none" aria-hidden="true"><path d="M1 1h8l4 4v10H1z" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M9 1v4h4" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
          <span>{f}</span>
        </div>
      ))}
    </div>
  );
}

const MiniCard = ({ children, className = '' }) => (
  <span className={'inline-flex items-center gap-2.5 rounded-[5px] border-[1.5px] border-forest bg-paper px-3.5 py-2.5 text-[15px] font-medium ' + className}>{children}</span>
);

function LostEnquiry() {
  return (
    <div className="flex w-full max-w-[420px] items-center gap-3" aria-hidden="true">
      <MiniCard>
        <svg width="20" height="15" viewBox="0 0 20 15" aria-hidden="true"><rect x="1" y="1" width="18" height="13" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M1.5 2l8.5 6 8.5-6" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
        Inbox
      </MiniCard>
      <span className="relative h-0 min-w-[80px] flex-1 border-t-2 border-dashed border-forest">
        <span className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sage text-[22px] font-semibold text-apricotdeep">?</span>
      </span>
      <MiniCard className="opacity-60">CRM</MiniCard>
    </div>
  );
}

function CopyPaste() {
  return (
    <div className="flex flex-wrap items-center gap-3" aria-hidden="true">
      <span className="key">⌘ C</span>
      <span className="text-[22px] text-forest">→</span>
      <span className="key">⌘ V</span>
      <span className="note ml-1 text-forest">…for every new family</span>
    </div>
  );
}

function WhoSetThisUp() {
  const rows = [['Status', 'Pending (old)'], ['Created by', 'admin_temp'], ['Last changed', 'a while ago']];
  return (
    <div className="max-w-[360px]" aria-hidden="true">
      <span className="doc-tab dark !rounded-[5px_5px_0_0]">Settings</span>
      <dl className="rounded-[0_5px_5px_5px] border-[1.5px] border-forest bg-paper px-4 py-2 text-[15px]">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 border-b border-line py-2 last:border-b-0">
            <dt className="text-muted">{k}</dt><dd className={k === 'Created by' ? 'marker-soft font-medium' : 'font-medium'}>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

const frustrations = [
  { q: 'Another spreadsheet?', s: 'Three versions of the same admissions list.', art: <Spreadsheets />, fix: 'One live list in OpenApply, with saved reports for the views people actually need. Then the spreadsheets can retire gracefully.' },
  { q: 'Where did that enquiry go?', s: 'Somewhere between the inbox and the CRM.', art: <LostEnquiry />, fix: 'Every channel feeds the same record, someone owns new enquiries each day, and nobody has to remember to forward anything.' },
  { q: 'Is this automated?', s: "Not if someone's copying and pasting it.", art: <CopyPaste />, fix: 'Templates, triggers and checklists that do the copying for you. Set up once, tested properly, and written down so they stay that way.' },
  { q: 'Who set this up?', s: 'Nobody seems quite sure anymore.', art: <WhoSetThisUp />, fix: "A tidy, documented setup with a named owner, so the next person to inherit it isn't starting from scratch." }
];

function Frustration({ item, index }) {
  const [open, setOpen] = useState(false);
  const id = 'fix-' + index;
  return (
    <article className={'border-t-[1.5px] border-forest pt-6 ' + (index % 2 === 1 ? 'md:mt-16' : '')}>
      <p className="text-[15px] font-medium tabular-nums text-forest">0{index + 1}</p>
      <h3 className="mt-2 text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[44px]">{item.q}</h3>
      <p className="mt-3 text-[20px] leading-snug text-muted">{item.s}</p>
      <div className="mt-7 flex min-h-[110px] items-center">{item.art}</div>
      <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}
        className="group mt-6 inline-flex items-center gap-3 text-[17px] font-medium text-forest">
        <span className={'grid h-8 w-8 place-items-center rounded-full border-[1.5px] border-forest text-[19px] leading-none transition ' + (open ? 'rotate-45 bg-forest text-forestink' : 'group-hover:bg-apricot')} aria-hidden="true">+</span>
        {open ? 'Hide the fix' : "What I'd do about it"}
      </button>
      <p id={id} hidden={!open} className="mt-4 max-w-[32rem] border-l-[3px] border-apricot pl-5 text-[18px] leading-[1.7]">
        {item.fix}
      </p>
    </article>
  );
}

function SoundFamiliar() {
  return (
    <section id="familiar" className="gutter bg-sage">
      <div className="mx-auto max-w-site py-20 md:py-24">
        <div className="grid gap-5 md:grid-cols-12 md:items-end">
          <h2 className="display text-[64px] sm:text-[104px] lg:text-[132px] md:col-span-8">Sound familiar?</h2>
          <p className="note text-[18px] text-forest md:col-span-4 md:pb-4">Four things admissions teams tell me more often than you'd think.</p>
        </div>
        <div className="mt-12 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {frustrations.map((f, i) => <Frustration key={f.q} item={f} index={i} />)}
        </div>
        <a href="#contact" className="group mt-16 block border-t-[1.5px] border-forest pt-9">
          <p className="text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[52px]">
            If you're nodding along, <span className="marker">we should probably talk.</span>
            <Arrow className="ml-3 h-8 w-8 align-middle sm:h-10 sm:w-10" />
          </p>
        </a>
      </div>
    </section>
  );
}

/* Meet Anne */
const cares = [
  'Fixing the process before adding more software.',
  'Leaving your team confident, not dependent on me.',
  'Families feeling looked after from their very first message.'
];

function Founder() {
  return (
    <section id="about" className="gutter">
      <div className="mx-auto grid max-w-site gap-12 py-20 md:py-24 lg:grid-cols-12 lg:gap-10">
        <figure className="lg:col-span-6 lg:-ml-6 xl:-ml-16">
          <div className="flex aspect-[4/5] flex-col justify-end rounded-[3px] bg-cream p-8 outline-dashed outline-2 -outline-offset-[16px] outline-line sm:p-10">
            <p className="label text-forest">Photo of Anne</p>
            <p className="mt-2 max-w-[24rem] text-[16px] leading-relaxed text-muted">A big, natural photo: at her desk, mid-conversation or walking round a school. Daylight, not a studio headshot.</p>
          </div>
          <figcaption className="note mt-3 text-[16px] text-muted">↑ the person you'll actually be talking to</figcaption>
        </figure>

        <div className="lg:col-span-6 lg:pt-6">
          <span className="doc-tab apricot">Meet Anne</span>
          <h2 className="display mt-6 text-[60px] sm:text-[92px]">Hi, I'm Anne.</h2>
          <div className="mt-8 max-w-[36rem] space-y-6 text-[19px] leading-[1.75]">
            <p>
              I'm the person behind Digitise My School. If you get in touch, you'll be emailing me, you'll be talking to me on the call, and it'll be me working through your OpenApply settings afterwards. No account managers, no hand-offs.
            </p>
            <p className="rounded-[3px] bg-apricotsoft px-5 py-4 text-[18px]">
              <span className="label block text-[#7A4120]">Anne, edit me</span>
              [My background, in my own words: the international schools I've worked in, what I did there, and what I learned about how admissions really runs.]
            </p>
            <p className="rounded-[3px] bg-apricotsoft px-5 py-4 text-[18px]">
              <span className="label block text-[#7A4120]">Anne, edit me</span>
              [Why I started this: the problem I kept seeing in admissions offices that made me want to help fix it.]
            </p>
          </div>

          <div className="mt-10 max-w-[36rem] border-t-[1.5px] border-forest pt-6">
            <p className="text-[19px] font-semibold">What I care about</p>
            <ul className="mt-4 space-y-3">
              {cares.map(c => <li key={c} className="flex gap-3 text-[18px] leading-snug"><Tick className="mt-0.5 text-apricotdeep" />{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Services */
const services = [
  {
    tag: 'OpenApply',
    title: 'Make OpenApply work for you',
    body: "I review your statuses, forms, checklists, user permissions and automated emails, remove what's no longer used, and set the rest up around how your admissions team actually works. You get a written record of the setup, so it no longer lives in one person's head.",
    eg: 'Cutting eleven application statuses down to seven, each with a clear definition.'
  },
  {
    tag: 'Workflows',
    title: 'Less admin, better admissions',
    body: 'I map the journey from first enquiry to first day, find where details are re-keyed or passed along by email, and redesign those steps with automation, checklists and clear ownership in the systems you already have.',
    eg: "Moving tour bookings out of a shared calendar and into OpenApply, so every visit sits on the family's record."
  },
  {
    tag: 'Communications',
    title: 'Keep families in the loop',
    body: 'Families hear from admissions, marketing, finance and teachers. I help you agree who sends what and when, then build the templates and triggered emails so the right message goes out at each stage, in the languages your families use.',
    eg: 'A welcome sequence in English, Vietnamese and Korean that goes out automatically when an offer is accepted.'
  },
  {
    tag: 'Marketing',
    title: "Reach the families you're looking for",
    body: 'Admissions pages that answer the questions parents really ask, enquiry forms that feed straight into your CRM, social content your team can keep up with, and a check on how your school appears when parents ask AI assistants for recommendations.',
    eg: "Rewriting a fees page so parents stop emailing to ask what's included."
  },
  {
    tag: 'Training',
    title: 'Get your whole team on board',
    body: 'Practical training for admissions, marketing and front-office staff, short written procedures people will actually follow, and support when a new term or a new colleague arrives.',
    eg: "A one-page 'how we handle enquiries' guide that a new starter can follow on day one."
  }
];

function Services() {
  return (
    <section id="services" className="gutter bg-cream">
      <div className="mx-auto max-w-site py-20 md:py-24">
        <div className="grid gap-5 md:grid-cols-12">
          <h2 className="display text-[52px] sm:text-[80px] md:col-span-7 md:col-start-6">What I can help with</h2>
          <p className="text-[19px] leading-[1.7] text-muted md:col-span-5 md:col-start-6">
            Bring me in for one of these, or for whatever is causing the most grumbling in the office right now.
          </p>
        </div>
        <ol className="mt-12">
          {services.map(s => (
            <li key={s.title} className="group grid gap-x-8 gap-y-4 py-8 md:grid-cols-12">
              <div className="md:col-span-12">
                <span className="doc-tab transition group-hover:bg-apricotsoft group-hover:text-[#7A4120]">{s.tag}</span>
                <div className="tab-rule text-forest"></div>
              </div>
              <h3 className="pt-2 text-[30px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[36px] md:col-span-4">{s.title}</h3>
              <p className="pt-2 text-[19px] leading-[1.7] md:col-span-5">{s.body}</p>
              <p className="pt-2 text-[17px] leading-[1.6] text-muted md:col-span-3">
                <span className="note block text-[16px] text-forest">For example</span>
                {s.eg}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* OpenApply audit */
const scores = [
  ['Enquiry capture and response', 52, 'Needs work'],
  ['Application form and parent experience', 71, 'Needs work'],
  ['Workflow, statuses and checklists', 58, 'Needs work'],
  ['Communications and templates', 44, 'Priority'],
  ['Data quality and reporting', 49, 'Priority'],
  ['Data protection and access', 80, 'Good'],
  ['Integrations and handover to the MIS', 75, 'Good'],
  ['Team, ownership and training', 63, 'Needs work']
];
const ratingStyle = { Good: 'text-forest', 'Needs work': 'text-[#8E5226]', Priority: 'font-semibold text-[#9A3B22]' };
const plan = [
  ['First 30 days', 'Retire four unused statuses and write a one-line definition for each remaining one. Agree a same-day reply standard for new enquiries.'],
  ['Days 31 to 60', 'Make enquiry source a required field with a fixed list. Rewrite the five core automated emails and add Vietnamese and Korean versions.'],
  ['Days 61 to 90', 'Build the monthly leadership report inside OpenApply so nobody has to rebuild it in a spreadsheet.']
];
const included = [
  'A short questionnaire for your admissions lead',
  'A review of your configuration, forms, checklists, permissions and emails',
  'A timed test enquiry, made exactly as a parent would',
  'Your admissions funnel rebuilt from anonymised data',
  'A written report scoring eight areas, every finding backed by evidence',
  'A debrief with leadership and a 90-day plan your team can own'
];
const beforeAfter = [
  ['Application statuses', 'Eleven of them. Four unused, two meaning the same thing.', 'Seven, each with a one-line definition.'],
  ['First reply to an enquiry', 'Whoever spots it, whenever they can.', 'A named owner each day and a same-day standard.'],
  ['Monthly leadership report', 'Rebuilt by hand in a spreadsheet.', 'A saved OpenApply report, ready on the 1st.']
];
const annotations = [
  ['Scored against 36 criteria', 'so you can see where you stand, area by area'],
  ['Evidence for every finding', 'screenshots, timings and what we tested'],
  ['Written in plain English', 'for leadership as well as the system admin'],
  ['Ordered by impact and effort', 'quick wins first, bigger projects planned']
];

function Report() {
  const tabs = ['Summary', 'Sample finding', '90-day plan'];
  const [tab, setTab] = useState(tabs[0]);
  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2px] bg-[#E6E0D2]" aria-hidden="true"></div>
      <article className="paper-shadow relative rounded-[2px] bg-paper text-ink">
        <header className="border-b border-line px-6 pb-5 pt-7 sm:px-10">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <p className="label text-muted">OpenApply audit</p>
            <p className="rounded-[2px] bg-apricotsoft px-2.5 py-1 text-[12.5px] font-medium uppercase tracking-[0.08em] text-[#7A4120]">Illustrative example</p>
          </div>
          <p className="mt-3 text-[25px] font-semibold tracking-[-0.015em]">Example International School</p>
          <p className="text-[16px] text-muted">Section 2 of 6 · Findings</p>
        </header>

        <div role="tablist" aria-label="Report sections" className="flex gap-1 overflow-x-auto px-4 pt-2 sm:px-8">
          {tabs.map(t => (
            <button key={t} role="tab" type="button" aria-selected={tab === t} onClick={() => setTab(t)}
              className={'whitespace-nowrap rounded-[6px_6px_0_0] px-4 py-2.5 text-[15.5px] transition ' + (tab === t ? 'bg-sage font-medium text-forest' : 'text-muted hover:text-ink')}>
              {t}
            </button>
          ))}
        </div>
        <div className="mx-4 border-t-[1.5px] border-forest sm:mx-8"></div>

        <div role="tabpanel" aria-label={tab} className="px-6 py-6 sm:px-10 sm:py-8">
          {tab === 'Summary' && (
            <div>
              <p className="text-[17px] leading-[1.7]">
                Overall <strong className="font-semibold">61 out of 100</strong>. The system itself is sound, but <span className="marker-soft">enquiries arriving by WhatsApp and through agents never reach OpenApply</span>, so a big slice of the pipeline can't be seen or followed up.
              </p>
              <table className="mt-6 w-full text-left text-[16px]">
                <thead>
                  <tr className="border-b border-line text-[13px] uppercase tracking-[0.08em] text-muted">
                    <th className="py-2 pr-3 font-medium">Area</th>
                    <th className="hidden py-2 pr-3 font-medium sm:table-cell"><span className="sr-only">Score bar</span></th>
                    <th className="py-2 pr-3 text-right font-medium">Score</th>
                    <th className="py-2 text-right font-medium">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {scores.map(([area, score, rating]) => (
                    <tr key={area} className="border-b border-line last:border-b-0">
                      <td className="py-2.5 pr-3">{area}</td>
                      <td className="hidden w-24 py-2.5 pr-3 sm:table-cell">
                        <span className="block h-1.5 rounded-full bg-sage"><span className={'block h-1.5 rounded-full ' + (rating === 'Priority' ? 'bg-apricotdeep' : 'bg-forest')} style={{ width: score + '%' }}></span></span>
                      </td>
                      <td className="py-2.5 pr-3 text-right tabular-nums">{score}%</td>
                      <td className={'whitespace-nowrap py-2.5 text-right ' + ratingStyle[rating]}>{rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {tab === 'Sample finding' && (
            <div className="space-y-5 text-[17px] leading-[1.7]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-[21px] font-semibold">1.3 · First reply to a new enquiry</p>
                <p className="text-[15px] text-muted">Priority: High · Effort: Low</p>
              </div>
              <div>
                <p className="label text-muted">What we found</p>
                <p className="mt-1">A test enquiry sent through the website on a Tuesday morning got the automatic confirmation within a minute. <span className="marker-soft">The first personal reply arrived four working days later.</span></p>
              </div>
              <div>
                <p className="label text-muted">Why it matters</p>
                <p className="mt-1">Families usually contact several schools at once. A slow first reply is often the point at which they book a visit somewhere else.</p>
              </div>
              <div>
                <p className="label text-muted">What to do</p>
                <p className="mt-1">Agree a same-day reply standard, give one named person ownership of new enquiries each day, and set up two short reply templates in OpenApply that staff can personalise.</p>
              </div>
            </div>
          )}
          {tab === '90-day plan' && (
            <ol className="space-y-5">
              {plan.map(([when, what]) => (
                <li key={when} className="grid gap-1 border-b border-line pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <p className="text-[16px] font-semibold">{when}</p>
                  <p className="text-[17px] leading-[1.7]">{what}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </article>
    </div>
  );
}

function Audit() {
  return (
    <section id="audit" className="gutter bg-forestdeep text-forestink">
      <div className="mx-auto max-w-site py-20 md:py-24">
        <span className="doc-tab apricot">The flagship</span>
        <div className="tab-rule text-forestmuted"></div>
        <div className="mt-9 grid gap-7 md:grid-cols-12 md:items-end">
          <h2 className="display text-[58px] sm:text-[96px] lg:text-[120px] md:col-span-8">The OpenApply audit</h2>
          <p className="text-[20px] leading-[1.6] md:col-span-4 md:pb-3">
            A proper look under the bonnet of your admissions system, written up in plain English with the fixes in the order you should do them.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-8">
            <Report />
          </div>
          <ul className="grid content-start gap-7 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1 lg:pt-10">
            {annotations.map(([a, b]) => (
              <li key={a} className="flex gap-4">
                <span className="mt-[14px] hidden h-px w-10 flex-none bg-apricot lg:block" aria-hidden="true"></span>
                <div>
                  <p className="text-[19px] font-semibold">{a}</p>
                  <p className="note mt-1 text-[17px] text-forestmuted">{b}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h3 className="text-[30px] font-semibold tracking-[-0.02em]">What you get</h3>
            <ul className="mt-6 space-y-4">
              {included.map(i => (
                <li key={i} className="flex gap-4 text-[18px] leading-snug"><Tick className="mt-0.5 text-apricot" />{i}</li>
              ))}
            </ul>
            <p className="mt-8 text-[17px] leading-[1.7] text-forestmuted">Typically around three weeks from questionnaire to debrief. Only anonymised data ever leaves your school.</p>
            <a href="#contact" className="group mt-8 inline-flex items-center gap-3 rounded-[3px] bg-apricot px-6 py-4 text-[17px] font-medium text-ink hover:bg-apricotdeep">
              Ask about an audit for your school<Arrow />
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-[30px] font-semibold tracking-[-0.02em]">The kind of change it leads to</h3>
              <p className="note text-[16px] text-forestmuted">illustrative, not a client result</p>
            </div>
            <div className="mt-6 hidden grid-cols-[11rem_1fr_1fr] gap-6 pb-2 sm:grid">
              <span></span><p className="label text-forestmuted">Before</p><p className="label text-apricot">After</p>
            </div>
            {beforeAfter.map(([what, before, after]) => (
              <div key={what} className="grid gap-2 border-t border-forest py-5 sm:grid-cols-[11rem_1fr_1fr] sm:gap-6">
                <p className="text-[17px] font-semibold">{what}</p>
                <p className="text-[17px] leading-[1.6] text-forestmuted"><span className="label mr-2 text-forestmuted sm:hidden">Before</span>{before}</p>
                <p className="text-[17px] leading-[1.6]"><span className="label mr-2 text-apricot sm:hidden">After</span>{after}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Approach */
const steps = [
  ['Understand', 'I listen to the people doing the work, and go through admissions the way a family does.'],
  ['Unpick', "Then I find what's actually causing the friction. It's rarely where people first point."],
  ['Improve', 'Changes in a sensible order, starting with whatever saves the most time for the least effort.'],
  ['Support', 'Training, short guides and someone to ask afterwards, so it all survives the first busy week of term.']
];

function Approach() {
  return (
    <section id="approach" className="gutter">
      <div className="mx-auto max-w-site py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <span className="doc-tab">How I work</span>
            <div className="tab-rule text-forest"></div>
            <h2 className="mt-7 text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[52px]">
              The answer is rarely another piece of software.
            </h2>
            <p className="mt-6 text-[19px] leading-[1.75] text-muted">
              More often it's a clearer process, a better-configured system you already pay for, and a team that feels confident using it. If an idea won't survive the first week of September, it isn't the right idea.
            </p>
          </div>
          <figure className="md:col-span-6 md:col-start-7">
            <div className="photo-frame aspect-[4/3]">
              <img src="img/admissions-conversation.webp" alt="An admissions officer talking through next steps with a parent" className="photo" style={{ objectPosition: '30% center' }} loading="lazy" decoding="async" />
            </div>
            <figcaption className="note mt-3 text-[16px] text-muted">The bit no system replaces: a good conversation with a family.</figcaption>
          </figure>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          <span className="absolute left-0 right-0 top-[11px] hidden h-px bg-forest md:block" aria-hidden="true"></span>
          {steps.map(([name, text], i) => (
            <li key={name} className="relative">
              <span className={'relative z-10 block h-[23px] w-[23px] rounded-full border-[1.5px] border-forest ' + (i === 0 ? 'bg-apricot' : 'bg-bg')} aria-hidden="true"></span>
              <h3 className="mt-5 text-[26px] font-semibold tracking-[-0.02em]">{name}</h3>
              <p className="mt-2 text-[18px] leading-[1.7] text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Contact */
const inlineField = 'mx-1 inline-block w-full border-0 border-b-2 border-forest bg-transparent px-1 py-1 text-[20px] font-medium text-ink placeholder:font-normal placeholder:text-muted focus:border-apricotdeep focus:outline-none sm:w-60';

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Hi Anne,\n\nI'm ${f.get('name') || ''} from ${f.get('school') || ''}.\n\nHere's what's going on:\n${f.get('message') || ''}\n\nYou can reach me at ${f.get('email') || ''}.`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello from ' + (f.get('school') || 'a school'))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <section id="contact" className="gutter bg-apricotsoft">
      <div className="mx-auto max-w-site py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="display text-[56px] sm:text-[88px] md:col-span-7">Let's have a proper chat.</h2>
          <p className="text-[19px] leading-[1.7] md:col-span-5 md:pb-3">
            No forms in triplicate. Just tell me a little about what's going on, and I'll reply myself.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <form className="paper-shadow rounded-[3px] bg-paper px-6 py-8 sm:px-10 sm:py-10 lg:col-span-8" onSubmit={onSubmit}>
            <p className="text-[22px] font-semibold">Hi Anne,</p>
            <p className="mt-5 text-[20px] leading-[2.2]">
              I'm
              <label className="sr-only" htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" autoComplete="name" placeholder="your name" className={inlineField} />
              from
              <label className="sr-only" htmlFor="contact-school">Your school</label>
              <input id="contact-school" name="school" autoComplete="organization" placeholder="your school" className={inlineField} />.
            </p>
            <label htmlFor="contact-message" className="mt-6 block text-[20px]">Here's what's going on:</label>
            <textarea id="contact-message" name="message" rows="4" placeholder="e.g. Our enquiries live in four places and nobody quite trusts the numbers."
              className="mt-3 w-full rounded-[3px] border-[1.5px] border-line bg-bg px-4 py-3.5 text-[18px] leading-[1.6] placeholder:text-muted focus:border-forest focus:outline-none"></textarea>
            <p className="mt-6 text-[20px] leading-[2.2]">
              You can reach me at
              <label className="sr-only" htmlFor="contact-email">Your email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@school.edu" className={inlineField + ' sm:w-72'} />
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button type="submit" className="group inline-flex items-center gap-3 rounded-[3px] bg-forest px-6 py-4 text-[17px] font-medium text-forestink hover:bg-forestdeep">
                Send it to Anne<Arrow />
              </button>
              {sent && <p className="text-[16px]" role="status">Your email app should open with your note ready to send.</p>}
            </div>
          </form>

          <div className="lg:col-span-4 lg:pt-4">
            <p className="text-[21px] font-semibold">What happens next</p>
            <ol className="mt-5 space-y-5">
              {[
                ['I read it myself', 'No sales team, no automated sequence.'],
                ['I reply with a couple of questions', 'Usually about your setup and what you would like to change.'],
                ['We have a short call', 'Around 20 minutes, to see whether I can help. No obligation.']
              ].map(([t, d], i) => (
                <li key={t} className="grid grid-cols-[2rem_1fr] gap-x-3">
                  <span className="text-[17px] font-semibold tabular-nums text-apricotdeep">0{i + 1}</span>
                  <div>
                    <p className="text-[18px] font-medium">{t}</p>
                    <p className="text-[17px] leading-[1.6] text-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-[17px]">Prefer email? <a href={`mailto:${EMAIL}`} className="link-u font-medium">{EMAIL}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="gutter bg-forestdeep text-forestink">
      <div className="mx-auto grid max-w-site gap-8 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-[22px] font-semibold tracking-tight">Digitise My School<span className="text-apricot">.</span></p>
          <p className="mt-2 text-[17px] text-forestmuted">A small, smart digital studio for schools.</p>
        </div>
        <div className="grid gap-2 text-[17px] md:col-span-3">
          {navLinks.map(([label, href]) => <a key={href} href={href} className="link-u w-fit text-forestmuted hover:text-forestink">{label}</a>)}
        </div>
        <div className="text-[17px] [overflow-wrap:anywhere] md:col-span-4">
          <a href={`mailto:${EMAIL}`} className="link-u">{EMAIL}</a>
          <p className="mt-6 text-[15px] text-forestmuted">© 2026 Digitise My School</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SoundFamiliar />
        <Founder />
        <Services />
        <Audit />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
