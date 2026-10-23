import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const EMAIL = 'digitisemyschool@gmail.com';

const Arrow = ({ className = '' }) => (
  <svg className={'nudge inline-block ' + className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Tick = ({ className = '' }) => (
  <svg className={'flex-none ' + className} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3.5 9.5l3.5 3.5 7.5-8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Navigation */
const navLinks = [['Sound familiar?', '#familiar'], ['Anne', '#about'], ['Services', '#services'], ['OpenApply audit', '#audit']];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="gutter sticky top-0 z-30 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-site items-center justify-between gap-6 py-4">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="text-[18px] font-semibold tracking-tight">Digitise My School<span className="text-apricotdeep">.</span></span>
          <span className="hidden text-[13px] text-muted lg:inline">a small, smart digital studio for schools</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-8 text-[15px] text-muted md:flex">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} className="link-u hover:text-ink">{label}</a>
          ))}
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-[3px] bg-forest px-4 py-2.5 font-medium text-forestink hover:bg-forestdeep">
            Let's talk<Arrow />
          </a>
        </nav>
        <button type="button" className="rounded-[3px] border border-line px-3.5 py-2 text-[15px] md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
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

/* Hero graphic: messy channels in, one tidy record out */
const tags = [
  { x: 0, y: 24, t: 'Inbox' },
  { x: 70, y: 96, t: 'WhatsApp' },
  { x: 6, y: 170, t: 'admissions_FINAL_v2.xlsx' },
  { x: 84, y: 244, t: 'Shared calendar' },
  { x: 20, y: 318, t: 'Sticky note on a monitor' }
];
const tangles = [
  'M63 39 C 180 10, 300 120, 250 160 S 200 260, 300 230 S 380 170, 360 200',
  'M155 111 C 240 60, 330 90, 300 150 S 210 210, 290 250 S 400 230, 360 200',
  'M210 185 C 270 140, 340 300, 280 270 S 250 150, 330 160 S 370 210, 360 200',
  'M221 259 C 300 320, 380 260, 320 230 S 260 170, 340 180 S 350 205, 360 200',
  'M224 333 C 330 360, 400 300, 330 290 S 280 220, 350 230 S 365 205, 360 200'
];

function HeroGraphic() {
  return (
    <figure className="hero-graphic">
      <svg viewBox="0 0 640 400" className="h-auto w-full" role="img" aria-label="Five scattered places where admissions information lives, tangled together, then tidied into one record">
        <g className="tangle" fill="none" stroke="var(--sage-deep)" strokeWidth="1.25">
          {tangles.map((d, i) => <path key={i} d={d} />)}
        </g>
        {tags.map(({ x, y, t }) => {
          const w = t.length * 7.4 + 26;
          return (
            <g key={t}>
              <rect x={x} y={y} width={w} height="30" rx="5" fill="var(--paper)" stroke="var(--forest)" strokeWidth="1.25" />
              <text x={x + 13} y={y + 19.5} fontSize="13" fill="var(--ink)">{t}</text>
            </g>
          );
        })}
        <circle cx="360" cy="200" r="5" fill="var(--apricot-deep)" />
        <path className="draw" d="M366 200 H 428" stroke="var(--apricot-deep)" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M420 193 l9 7 -9 7" stroke="var(--apricot-deep)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        <path d="M440 122 v-14 a6 6 0 0 1 6 -6 h96 a6 6 0 0 1 6 6 v14" fill="var(--forest)" />
        <text x="454" y="117" fontSize="12" fontWeight="500" letterSpacing="1" fill="var(--forest-ink)">ONE RECORD</text>
        <rect x="440" y="122" width="190" height="176" rx="6" fill="var(--paper)" stroke="var(--forest)" strokeWidth="1.5" />
        {[['Enquiry logged', 158], ['Tour booked', 198], ['Reply sent today', 238]].map(([t, y]) => (
          <g key={t}>
            <path d={`M456 ${y - 4} l5 5 l10 -11`} stroke="var(--apricot-deep)" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text x="480" y={y} fontSize="13.5" fill="var(--ink)">{t}</text>
          </g>
        ))}
        <rect x="456" y="262" width="120" height="6" rx="3" fill="var(--sage)" />
        <rect x="456" y="276" width="84" height="6" rx="3" fill="var(--sage)" />

        <text x="250" y="16" fontSize="13" fontStyle="italic" fontWeight="300" fill="var(--muted)">where things live now</text>
        <text x="470" y="88" fontSize="13" fontStyle="italic" fontWeight="300" fill="var(--muted)">where they should</text>
      </svg>
    </figure>
  );
}

function Hero() {
  return (
    <section id="top" className="gutter">
      <div className="mx-auto max-w-site pb-20 pt-12 md:pb-28 md:pt-16">
        <span className="doc-tab">A small, smart digital studio for schools</span>
        <div className="tab-rule text-forest"></div>

        <h1 className="display mt-10 text-[54px] sm:text-[88px] lg:text-[128px] xl:text-[148px]">
          Schools are complicated.
          <span className="mt-3 block font-light text-forest">Your systems <span className="marker-thin">shouldn't be.</span></span>
        </h1>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-[19px] leading-[1.65] sm:text-[21px]">
              I help international schools untangle OpenApply, CRM workflows and all the admin in between, so the system does the copying and pasting and your team gets back to the families.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#contact" className="group inline-flex items-center gap-3 rounded-[3px] bg-apricot px-6 py-4 text-[16px] font-medium text-ink hover:bg-apricotdeep">
                Book a 20-minute chat<Arrow />
              </a>
              <a href="#audit" className="group inline-flex items-center gap-2 text-[16px] font-medium text-forest">
                <span className="link-u">See the OpenApply audit</span><Arrow />
              </a>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6 md:-mr-6">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Sound familiar? */
function Spreadsheets() {
  const files = ['admissions_2026.xlsx', 'admissions_2026_FINAL.xlsx', 'admissions_2026_FINAL_v2 (use this one).xlsx'];
  return (
    <div className="relative h-[150px]" aria-hidden="true">
      {files.map((f, i) => (
        <div key={f} className={'absolute flex items-center gap-2.5 rounded-[5px] border-[1.5px] bg-paper px-3 py-2.5 text-[13.5px] leading-snug shadow-[0_6px_14px_-8px_rgba(20,50,35,.45)] ' + (i === 2 ? 'border-apricotdeep' : 'border-forest')}
          style={{ top: i * 38, left: i * 26, maxWidth: `calc(100% - ${i * 26}px)` }}>
          <svg width="14" height="16" viewBox="0 0 14 16" className="flex-none" aria-hidden="true"><path d="M1 1h8l4 4v10H1z" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M9 1v4h4" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
          <span>{f}</span>
        </div>
      ))}
    </div>
  );
}

function LostEnquiry() {
  return (
    <svg viewBox="0 0 340 120" className="h-auto w-full max-w-[340px]" aria-hidden="true">
      <rect x="2" y="44" width="70" height="34" rx="5" fill="var(--paper)" stroke="var(--forest)" strokeWidth="1.5" />
      <path d="M8 50 l29 16 l29 -16" fill="none" stroke="var(--forest)" strokeWidth="1.5" />
      <text x="16" y="98" fontSize="12.5" fill="var(--ink)">Inbox</text>
      <path d="M76 61 C 110 20, 140 110, 170 60 S 210 30, 222 70" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeDasharray="4 5" />
      <text x="228" y="80" fontSize="30" fontWeight="600" fill="var(--apricot-deep)">?</text>
      <rect x="262" y="44" width="74" height="34" rx="5" fill="var(--paper)" stroke="var(--forest)" strokeWidth="1.5" />
      <text x="283" y="66" fontSize="13" fontWeight="500" fill="var(--ink)">CRM</text>
    </svg>
  );
}

function CopyPaste() {
  return (
    <div className="flex flex-wrap items-center gap-3" aria-hidden="true">
      <span className="key">⌘ C</span>
      <span className="text-[22px] text-muted">→</span>
      <span className="key">⌘ V</span>
      <span className="note ml-2 text-muted">repeat for every new family</span>
    </div>
  );
}

function WhoSetThisUp() {
  const rows = [['Status', 'Pending (old) – do not use'], ['Created by', 'admin_temp'], ['Last changed', 'a while ago']];
  return (
    <div className="max-w-[340px]" aria-hidden="true">
      <span className="doc-tab dark !rounded-[5px_5px_0_0] !text-[10px]">Settings</span>
      <dl className="rounded-[0_5px_5px_5px] border-[1.5px] border-forest bg-paper px-4 py-2 text-[13.5px]">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 border-b border-line py-1.5 last:border-b-0">
            <dt className="text-muted">{k}</dt><dd className={k === 'Created by' ? 'marker-soft font-medium' : 'font-medium'}>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

const frustrations = [
  { q: 'Another spreadsheet?', s: 'Three versions of the same admissions list.', art: <Spreadsheets />, fix: "One live list in OpenApply, with saved reports for the views people actually need. Then the spreadsheets can retire gracefully." },
  { q: 'Where did that enquiry go?', s: 'Somewhere between the inbox and the CRM.', art: <LostEnquiry />, fix: 'Every channel feeds the same record, someone owns new enquiries each day, and nobody has to remember to forward anything.' },
  { q: 'Is this automated?', s: "Not if someone's copying and pasting it.", art: <CopyPaste />, fix: 'Templates, triggers and checklists that do the copying for you. Set up once, tested properly, and written down so they stay that way.' },
  { q: 'Who set this up?', s: 'Nobody seems quite sure anymore.', art: <WhoSetThisUp />, fix: 'A tidy, documented setup with a named owner, so the next person to inherit it isn\'t starting from scratch.' }
];

function Frustration({ item, index }) {
  const [open, setOpen] = useState(false);
  const id = 'fix-' + index;
  return (
    <article className={'border-t-[1.5px] border-forest pt-6 ' + (index % 2 === 1 ? 'md:mt-24' : '')}>
      <p className="text-[14px] font-medium tabular-nums text-forest">0{index + 1}</p>
      <h3 className="mt-3 text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[44px]">{item.q}</h3>
      <p className="mt-3 text-[19px] text-muted">{item.s}</p>
      <div className="mt-8 min-h-[120px]">{item.art}</div>
      <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}
        className="group mt-8 inline-flex items-center gap-3 text-[16px] font-medium text-forest">
        <span className={'grid h-7 w-7 place-items-center rounded-full border-[1.5px] border-forest text-[18px] leading-none transition ' + (open ? 'rotate-45 bg-forest text-forestink' : 'group-hover:bg-apricot')} aria-hidden="true">+</span>
        {open ? 'Hide the fix' : "What I'd do about it"}
      </button>
      <div id={id} hidden={!open} className="mt-4 max-w-[30rem] border-l-[3px] border-apricot pl-5 text-[17px] leading-[1.7]">
        {item.fix}
      </div>
    </article>
  );
}

function SoundFamiliar() {
  return (
    <section id="familiar" className="gutter bg-sage">
      <div className="mx-auto max-w-site py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="display text-[64px] sm:text-[104px] lg:text-[132px] md:col-span-9">Sound familiar?</h2>
          <p className="note text-[17px] text-forest md:col-span-3 md:pb-4">Four things we hear from admissions offices more often than you'd think.</p>
        </div>
        <div className="mt-16 grid gap-x-16 gap-y-16 md:grid-cols-2">
          {frustrations.map((f, i) => <Frustration key={f.q} item={f} index={i} />)}
        </div>
        <a href="#contact" className="group mt-24 block border-t-[1.5px] border-forest pt-10">
          <p className="text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[52px]">
            If you're nodding along, <span className="marker">we should probably talk.</span>
            <Arrow className="ml-3 h-8 w-8 align-middle sm:h-10 sm:w-10" />
          </p>
        </a>
      </div>
    </section>
  );
}

/* Founder */
function Founder() {
  return (
    <section id="about" className="gutter">
      <div className="mx-auto grid max-w-site gap-12 py-20 md:grid-cols-12 md:gap-10 md:py-32">
        <div className="relative md:col-span-6 md:-ml-6 lg:-ml-16">
          <div className="flex aspect-[5/6] flex-col justify-end rounded-[3px] bg-cream p-8 outline-dashed outline-2 -outline-offset-[14px] outline-line">
            <p className="label text-muted">Photo of Anne</p>
            <p className="mt-2 max-w-[22rem] text-[15px] leading-relaxed text-muted">A natural, everyday photo works best: at a desk, mid-conversation, or out on a school site. Not a formal headshot.</p>
          </div>
          <p className="note absolute -bottom-7 right-2 text-muted md:-right-4">↑ the person you'll actually be talking to</p>
        </div>
        <div className="md:col-span-6 md:pt-10">
          <span className="doc-tab apricot">Founder</span>
          <h2 className="display mt-6 text-[60px] sm:text-[88px]">Hi, I'm Anne.</h2>
          <div className="mt-8 max-w-[34rem] space-y-6 text-[18px] leading-[1.75]">
            <p>Digitise My School is me. When you get in touch, you'll talk to me, and I'll be the one doing the work, from the first look at your system to the final debrief.</p>
            <p className="rounded-[3px] bg-apricotsoft px-4 py-3">[In your own words: a couple of sentences about your time in international schools and how you ended up fixing admissions systems.]</p>
            <p className="rounded-[3px] bg-apricotsoft px-4 py-3">[Something human: the kind of problem you most enjoy untangling, or the one thing you wish every admissions office knew.]</p>
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
    title: 'OpenApply, set up properly',
    body: "Statuses nobody uses, checklists that differ by year group, and three people with admin rights but only one who knows what they do. I'll tidy the lot and write down how it works.",
    eg: 'Cutting eleven application statuses to seven that everyone understands.'
  },
  {
    tag: 'Workflows',
    title: 'Admissions workflows',
    body: 'From first enquiry to first day, I map who does what and take out the steps that only exist because they always have.',
    eg: 'Getting tour bookings into OpenApply instead of a shared calendar and a sticky note.'
  },
  {
    tag: 'CRM and comms',
    title: 'Parent communications',
    body: 'Families hear from admissions, marketing, finance and the class teacher, often all in the same week. I help you decide who sends what, then set it up so it sends itself.',
    eg: 'A welcome sequence in English, Vietnamese and Korean that nobody has to translate each time.'
  },
  {
    tag: 'Marketing',
    title: 'Marketing that brings the right families',
    body: "Admissions pages that answer the questions parents actually ask, social content your team can keep up with, and a check on what AI assistants say when parents ask them for a recommendation.",
    eg: "Rewriting a fees page so parents stop emailing to ask what's included."
  },
  {
    tag: 'Training',
    title: 'Training and support',
    body: "Short, practical sessions for the people using the system every day, guides they'll genuinely open, and someone to ask when term starts and something breaks.",
    eg: "A one-page 'how we handle enquiries here' that new staff can follow on day one."
  }
];

function Services() {
  return (
    <section id="services" className="gutter bg-cream">
      <div className="mx-auto max-w-site py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-12">
          <h2 className="display text-[52px] sm:text-[80px] md:col-span-7 md:col-start-6">What I can help with</h2>
          <p className="text-[18px] leading-[1.7] text-muted md:col-span-4 md:col-start-6 md:row-start-2">
            Bring me in for one of these, or for whatever is causing the most grumbling in the office right now.
          </p>
        </div>
        <ol className="mt-16">
          {services.map(s => (
            <li key={s.title} className="group grid gap-5 py-10 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-12">
                <span className="doc-tab transition group-hover:bg-apricotsoft group-hover:text-[#7A4120]">{s.tag}</span>
                <div className="tab-rule text-forest"></div>
              </div>
              <h3 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[38px] md:col-span-5">{s.title}</h3>
              <p className="text-[18px] leading-[1.75] md:col-span-4">{s.body}</p>
              <p className="text-[16px] leading-[1.6] text-muted md:col-span-3">
                <span className="note block text-forest">For example</span>
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
            <p className="rounded-[2px] bg-apricotsoft px-2.5 py-1 text-[12px] font-medium uppercase tracking-[0.08em] text-[#7A4120]">Illustrative example</p>
          </div>
          <p className="mt-3 text-[24px] font-semibold tracking-[-0.015em]">Example International School</p>
          <p className="text-[15px] text-muted">Section 2 of 6 · Findings</p>
        </header>

        <div role="tablist" aria-label="Report sections" className="flex gap-1 overflow-x-auto px-4 pt-2 sm:px-8">
          {tabs.map(t => (
            <button key={t} role="tab" type="button" aria-selected={tab === t} onClick={() => setTab(t)}
              className={'whitespace-nowrap rounded-[6px_6px_0_0] px-4 py-2.5 text-[14.5px] transition ' + (tab === t ? 'bg-sage font-medium text-forest' : 'text-muted hover:text-ink')}>
              {t}
            </button>
          ))}
        </div>
        <div className="mx-4 border-t-[1.5px] border-forest sm:mx-8"></div>

        <div role="tabpanel" aria-label={tab} className="px-6 py-6 sm:px-10 sm:py-8">
          {tab === 'Summary' && (
            <div>
              <p className="text-[16px] leading-[1.7]">
                Overall <strong className="font-semibold">61 out of 100</strong>. The system itself is sound, but <span className="marker-soft">enquiries arriving by WhatsApp and through agents never reach OpenApply</span>, so a big slice of the pipeline can't be seen or followed up.
              </p>
              <table className="mt-6 w-full text-left text-[15px]">
                <thead>
                  <tr className="border-b border-line text-[12.5px] uppercase tracking-[0.08em] text-muted">
                    <th className="py-2 pr-3 font-medium">Area</th>
                    <th className="hidden py-2 pr-3 font-medium sm:table-cell"><span className="sr-only">Bar</span></th>
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
            <div className="space-y-5 text-[16px] leading-[1.7]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-[20px] font-semibold">1.3 · First reply to a new enquiry</p>
                <p className="text-[14px] text-muted">Priority: High · Effort: Low</p>
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
                  <p className="text-[15px] font-semibold">{when}</p>
                  <p className="text-[16px] leading-[1.7]">{what}</p>
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
      <div className="mx-auto max-w-site py-20 md:py-28">
        <span className="doc-tab apricot">The flagship</span>
        <div className="tab-rule text-forestmuted"></div>
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="display text-[58px] sm:text-[96px] lg:text-[120px] md:col-span-8">The OpenApply audit</h2>
          <p className="text-[19px] leading-[1.6] md:col-span-4 md:pb-3">
            A proper look under the bonnet of your admissions system, written up in plain English with the fixes in the order you should do them.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-8">
            <Report />
          </div>
          <ul className="grid content-start gap-7 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1 lg:pt-10">
            {annotations.map(([a, b]) => (
              <li key={a} className="flex gap-4">
                <span className="mt-[13px] hidden h-px w-10 flex-none bg-apricot lg:block" aria-hidden="true"></span>
                <div>
                  <p className="text-[18px] font-semibold">{a}</p>
                  <p className="note mt-1 text-forestmuted">{b}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h3 className="text-[28px] font-semibold tracking-[-0.02em]">What you get</h3>
            <ul className="mt-6 space-y-4">
              {included.map(i => (
                <li key={i} className="flex gap-4 text-[17px] leading-snug"><Tick className="mt-0.5 text-apricot" />{i}</li>
              ))}
            </ul>
            <p className="mt-8 text-[16px] leading-[1.7] text-forestmuted">Typically around three weeks from questionnaire to debrief. Only anonymised data ever leaves your school.</p>
            <a href="#contact" className="group mt-9 inline-flex items-center gap-3 rounded-[3px] bg-apricot px-6 py-4 text-[16px] font-medium text-ink hover:bg-apricotdeep">
              Ask about an audit for your school<Arrow />
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-[28px] font-semibold tracking-[-0.02em]">The kind of change it leads to</h3>
              <p className="note text-forestmuted">illustrative, not a client result</p>
            </div>
            <div className="mt-6">
              {beforeAfter.map(([what, before, after]) => (
                <div key={what} className="grid gap-3 border-t border-forest py-5 sm:grid-cols-[11rem_1fr_auto_1fr] sm:items-baseline sm:gap-5">
                  <p className="label text-forestmuted">{what}</p>
                  <p className="text-[16px] text-forestmuted line-through decoration-apricot decoration-[1.5px]">{before}</p>
                  <span className="hidden text-apricot sm:inline" aria-hidden="true">→</span>
                  <p className="text-[16px] font-medium">{after}</p>
                </div>
              ))}
            </div>
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
      <div className="mx-auto max-w-site py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <span className="doc-tab">How I work</span>
            <div className="tab-rule text-forest"></div>
            <h2 className="mt-8 text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[52px]">
              The answer is rarely another piece of software.
            </h2>
            <p className="mt-6 text-[18px] leading-[1.75] text-muted">
              More often it's a clearer process, a better-configured system you already pay for, and a team that feels confident using it. If an idea won't survive the first week of September, it isn't the right idea.
            </p>
          </div>
          <figure className="md:col-span-6 md:col-start-7">
            <div className="photo-frame aspect-[4/3]">
              <img src="img/admissions-conversation.webp" alt="An admissions officer talking through next steps with a parent" className="photo" style={{ objectPosition: '30% center' }} loading="lazy" decoding="async" />
            </div>
            <figcaption className="note mt-3 text-muted">The bit no system replaces: a good conversation with a family.</figcaption>
          </figure>
        </div>

        <ol className="relative mt-20 grid gap-10 md:grid-cols-4 md:gap-8">
          <span className="absolute left-0 right-0 top-[11px] hidden h-px bg-forest md:block" aria-hidden="true"></span>
          {steps.map(([name, text], i) => (
            <li key={name} className="relative">
              <span className={'relative z-10 block h-[23px] w-[23px] rounded-full border-[1.5px] border-forest ' + (i === 0 ? 'bg-apricot' : 'bg-bg')} aria-hidden="true"></span>
              <h3 className="mt-6 text-[26px] font-semibold tracking-[-0.02em]">{name}</h3>
              <p className="mt-2 text-[17px] leading-[1.7] text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Contact */
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get('name') || ''}\nSchool: ${f.get('school') || ''}\nEmail: ${f.get('email') || ''}\n\nWhat's going on:\n${f.get('message') || ''}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Enquiry from the website')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <section id="contact" className="gutter bg-apricotsoft">
      <div className="mx-auto grid max-w-site gap-14 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-6">
          <h2 className="display text-[56px] sm:text-[88px]">Let's have a proper chat.</h2>
          <p className="mt-8 max-w-[30rem] text-[18px] leading-[1.75]">
            A couple of lines is plenty: what system you're using, what's going wrong, and roughly when you'd like it sorted. I'll reply myself.
          </p>
          <p className="mt-8 text-[17px]">Or email <a href={`mailto:${EMAIL}`} className="link-u font-medium">{EMAIL}</a></p>
        </div>
        <form className="grid gap-5 md:col-span-5 md:col-start-8" onSubmit={onSubmit}>
          {[['name', 'Your name', 'text', 'name'], ['school', 'School', 'text', 'organization'], ['email', 'Email', 'email', 'email']].map(([n, l, t, ac]) => (
            <label key={n} className="grid gap-2 text-[15px] font-medium">{l}
              <input id={'contact-' + n} name={n} type={t} autoComplete={ac} className="rounded-[3px] border-[1.5px] border-line px-4 py-3.5 text-[17px] font-normal focus:border-forest" />
            </label>
          ))}
          <label className="grid gap-2 text-[15px] font-medium">What's going on?
            <textarea id="contact-message" name="message" rows="4" placeholder="e.g. Our enquiries live in four places and nobody trusts the numbers." className="rounded-[3px] border-[1.5px] border-line px-4 py-3.5 text-[17px] font-normal placeholder:text-muted focus:border-forest"></textarea>
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className="group inline-flex items-center gap-3 rounded-[3px] bg-forest px-6 py-4 text-[16px] font-medium text-forestink hover:bg-forestdeep">
              Send<Arrow />
            </button>
            {sent && <p className="text-[15px]" role="status">Your email app should open with your message ready to send.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="gutter bg-forestdeep text-forestink">
      <div className="mx-auto grid max-w-site gap-8 py-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="text-[22px] font-semibold tracking-tight">Digitise My School<span className="text-apricot">.</span></p>
          <p className="mt-2 text-[16px] text-forestmuted">A small, smart digital studio for schools.</p>
        </div>
        <div className="grid gap-2 text-[16px] md:col-span-3">
          {navLinks.map(([label, href]) => <a key={href} href={href} className="link-u w-fit text-forestmuted hover:text-forestink">{label}</a>)}
        </div>
        <div className="text-[16px] md:col-span-3">
          <a href={`mailto:${EMAIL}`} className="link-u">{EMAIL}</a>
          <p className="mt-6 text-[14px] text-forestmuted">© 2026 Digitise My School</p>
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
