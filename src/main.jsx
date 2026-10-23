
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const Arrow = ({ className = '' }) => (
  <svg className={'nudge inline-block ' + className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Button = ({ href, children, tone = 'apricot' }) => {
  const tones = {
    apricot: 'bg-apricot text-[#1D2B24] hover:brightness-95',
    forest: 'bg-forest text-forestink hover:brightness-110',
    ghost: 'border border-forestmuted text-forestink hover:border-forestink'
  };
  return (
    <a href={href} className={'group inline-flex items-center gap-3 rounded-[4px] px-5 py-3.5 text-[15px] font-medium transition ' + tones[tone]}>
      {children}<Arrow />
    </a>
  );
};

/* Navigation */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [['What We Do', '#services'], ['How We Work', '#approach'], ['About', '#about'], ['Insights', '#insights']];
  return (
    <header className="gutter sticky z-30 border-b border-line bg-bg" style={{ top: 'env(safe-area-inset-top, 0px)' }}>
      <div className="mx-auto flex max-w-site items-center justify-between py-4">
        <a href="#top" className="text-[17px] font-semibold tracking-tight">
          Digitise My School<span className="text-apricot">.</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-8 text-[14px] text-muted md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="link-u hover:text-ink">{label}</a>
          ))}
          <a href="#talk" className="group inline-flex items-center gap-2 rounded-[4px] bg-forest px-4 py-2 font-medium text-forestink">Let's Talk<Arrow /></a>
        </nav>
        <button type="button" className="md:hidden rounded-[4px] border border-line px-3 py-2 text-sm" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="mx-auto grid max-w-site gap-1 pb-5 md:hidden">
          {[...links, ["Let's Talk", '#talk']].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-line py-3 text-[17px]">{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* Hero: admissions workflow */
const stages = [
  { key: 'enquiry', name: 'Enquiry', note: 'Every channel lands in one place, and every family gets a warm, personal reply the same day.' },
  { key: 'visit', name: 'Visit', note: 'Tours and open mornings are booked online and recorded against the family, so nobody is asked twice.' },
  { key: 'application', name: 'Application', note: 'A form parents can finish on their phone, in their language, without guessing what comes next.' },
  { key: 'assessment', name: 'Assessment', note: 'Clear next steps and dates, so families are never left waiting and wondering.' },
  { key: 'offer', name: 'Offer', note: 'Decisions recorded with reasons, and waitlists kept in a clear, fair order.' },
  { key: 'enrolled', name: 'Enrolled', note: 'Records pass straight to your school systems and finance, with no retyping.' }
];
const channels = ['Website form', 'Email', 'WhatsApp and Zalo', 'Agents and relocation firms'];

function Workflow() {
  const [active, setActive] = useState('enquiry');
  const current = stages.find(s => s.key === active);
  return (
    <figure className="rounded-[6px] border border-line bg-paper p-5 sm:p-7">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="eyebrow text-muted">An admissions journey, untangled</span>
        <span className="text-[12px] text-muted">Select a stage</span>
      </figcaption>

      <div className="mt-6 grid gap-6 sm:grid-cols-[0.9fr_1.4fr]">
        <div className="min-w-0">
          <p className="text-[12px] font-medium text-muted">Where families start</p>
          <ul className="mt-3 grid gap-2">
            {channels.map(c => (
              <li key={c} className="flex items-center gap-3 text-[13.5px]">
                <span className="h-px w-5 bg-muted" aria-hidden="true"></span>{c}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 text-[12px] text-muted" aria-hidden="true">
            <span className="h-px flex-1 bg-line"></span>all into one record<span className="h-px w-5 bg-line"></span>
          </div>
        </div>

        <ol className="relative min-w-0">
          <span className="absolute left-[11px] top-3 bottom-3 w-px bg-line" aria-hidden="true"></span>
          {stages.map(s => {
            const on = s.key === active;
            return (
              <li key={s.key} className="relative">
                <button
                  type="button"
                  onClick={() => setActive(s.key)}
                  onMouseEnter={() => setActive(s.key)}
                  aria-pressed={on}
                  className={'flex w-full items-center gap-4 rounded-[4px] py-2 pl-0 pr-2 text-left transition ' + (on ? 'text-ink' : 'text-muted hover:text-ink')}
                >
                  <span className={'relative z-10 grid h-6 w-6 place-items-center rounded-full border transition ' + (on ? 'border-forest bg-forest' : 'border-line bg-paper')} aria-hidden="true">
                    <span className={'h-1.5 w-1.5 rounded-full ' + (on ? 'bg-apricot' : 'bg-line')}></span>
                  </span>
                  <span className={'text-[15px] ' + (on ? 'font-medium' : '')}>{s.name}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-6 border-t border-line pt-5" aria-live="polite">
        <p className="text-[12px] font-medium text-mintink">What good looks like at {current.name.toLowerCase()}</p>
        <p className="mt-2 text-[15px] leading-relaxed">{current.note}</p>
      </div>
    </figure>
  );
}

function Hero() {
  return (
    <section id="top" className="gutter">
      <div className="mx-auto max-w-site pb-16 pt-14 md:pb-24 md:pt-24">
        <p className="eyebrow text-mintink">Digital consultancy for international schools</p>
        <h1 className="mt-6 max-w-[15ch] text-[44px] font-light leading-[1.02] tracking-[-0.03em] sm:text-[64px] lg:text-[88px]">
          Your school's systems should work <em className="font-light italic text-mintink">as hard as you do.</em>
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-[38rem] text-[18px] leading-relaxed text-muted md:col-span-7">
            From admissions platforms to digital strategy, we help international schools make better use of technology, simplify the complicated bits and create better experiences for everyone.
          </p>
          <div className="md:col-span-5 md:justify-self-end">
            <Button href="#services">See how we can help</Button>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-12">
          <div className="photo relative min-h-[300px] overflow-hidden rounded-[6px] md:col-span-5">
            <span className="absolute bottom-4 left-4 right-4 text-[12.5px] leading-snug text-[var(--photo-ink)]">
              <span className="font-medium">Photograph to come.</span> Candid: parents and a child being welcomed at the school gate, morning light.
            </span>
          </div>
          <div className="min-w-0 md:col-span-7"><Workflow /></div>
        </div>
      </div>
    </section>
  );
}

/* Services */
const services = [
  {
    title: 'Admissions systems & CRM',
    body: "Setting up, tidying up or getting more from OpenApply and the tools around it. Statuses that match how you really work, forms families can finish, and data you can trust.",
    work: ['Platform set-up and clean-up', 'Links to your MIS and finance', 'Reports leadership will actually read']
  },
  {
    title: 'Admissions journeys & processes',
    body: "The whole route from first enquiry to first day, seen through the eyes of a family and of your team. Fewer hand-offs, quicker replies and nothing slipping through the gaps.",
    work: ['Enquiry and first reply', 'Tours, visits and assessments', 'Offers, waitlists and enrolment']
  },
  {
    title: 'Digital marketing & strategy',
    body: "Websites, social media and search that bring the right families to you, with a plan your team can keep up with. That includes how your school appears when parents ask AI assistants for recommendations.",
    work: ['Admissions pages that convert', 'Realistic social media plans', 'Search and AI visibility']
  },
  {
    title: 'Training & team support',
    body: "Hands-on help so your team feels confident with the systems you already pay for. Practical sessions, plain-English guides and someone to call when things get stuck.",
    work: ['Team training sessions', 'Written procedures', 'Ongoing check-ins']
  }
];

function Services() {
  return (
    <section id="services" className="gutter border-t border-line">
      <div className="mx-auto grid max-w-site gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <p className="eyebrow text-mintink">What we do</p>
            <h2 className="mt-5 text-[34px] font-light leading-[1.08] tracking-[-0.02em] sm:text-[44px]">
              Making the complicated <em className="italic">feel simple.</em>
            </h2>
            <p className="mt-5 max-w-[30ch] text-[15.5px] leading-relaxed text-muted">
              Four areas, one aim: technology and processes that make school life easier for families and staff.
            </p>
          </div>
        </div>
        <div className="md:col-span-8">
          {services.map(s => (
            <article key={s.title} className="group grid gap-4 border-t border-line py-9 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_13rem] sm:gap-10">
              <div className="min-w-0">
                <h3 className="flex items-center gap-3 text-[24px] font-normal tracking-[-0.01em]">
                  <span className="h-2 w-2 rounded-full bg-mint transition group-hover:bg-apricot" aria-hidden="true"></span>
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[56ch] text-[15.5px] leading-relaxed text-muted">{s.body}</p>
              </div>
              <ul className="grid content-start gap-2 text-[13.5px] sm:border-l sm:border-line sm:pl-6">
                <li className="eyebrow mb-1 text-muted">Typical work</li>
                {s.work.map(w => <li key={w}>{w}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Featured: OpenApply audit */
const report = {
  Workflows: [
    ['Nine application statuses are set up, and three were not used this year.', 'Needs attention'],
    ['Checklists differ between year groups for the same entry route.', 'Needs attention'],
    ['Offers and waitlists are recorded consistently, with reasons.', 'Working well']
  ],
  Communications: [
    ['The automatic enquiry confirmation is warm and clear.', 'Working well'],
    ['A test enquiry waited several working days for a personal reply.', 'Priority'],
    ['Key emails are written in English only.', 'Needs attention']
  ],
  Data: [
    ['Enquiry source is often left blank, so channels cannot be compared.', 'Priority'],
    ['Re-applications create duplicate family records.', 'Needs attention'],
    ['The monthly leadership report is rebuilt by hand in a spreadsheet.', 'Needs attention']
  ],
  Recommendations: [
    ['Retire unused statuses and write a one-line definition for each.', 'Quick win'],
    ['Agree a same-day reply standard, with a template to support it.', 'Quick win'],
    ['Make enquiry source a required field with a fixed list.', 'Quick win'],
    ['Build the leadership report inside OpenApply.', 'Project']
  ]
};
const tagStyle = {
  'Working well': 'bg-mint text-mintink',
  'Needs attention': 'bg-apricotsoft text-ink',
  'Priority': 'bg-apricot text-[#1D2B24]',
  'Quick win': 'bg-mint text-mintink',
  'Project': 'border border-line text-muted'
};
const included = [
  'A short questionnaire for your admissions lead',
  'A review of your OpenApply setup, forms and emails',
  'A timed test enquiry, as a parent would make it',
  'Your admissions funnel rebuilt from anonymised data',
  'A scored report across eight areas',
  'A leadership debrief and a 90-day plan'
];

function Audit() {
  const tabs = Object.keys(report);
  const [tab, setTab] = useState(tabs[0]);
  const [open, setOpen] = useState(false);
  return (
    <section id="audit" className="gutter bg-forest text-forestink">
      <div className="mx-auto grid max-w-site gap-14 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow text-forestmuted">Featured: the OpenApply audit</p>
          <h2 className="mt-5 text-[34px] font-light leading-[1.08] tracking-[-0.02em] sm:text-[46px]">
            Is your OpenApply setup <em className="italic text-apricot">actually working</em> for you?
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-forestmuted">
            Good technology doesn't guarantee a smooth process. Over a few busy admissions seasons, schools often end up with complicated workflows, inconsistent data and manual workarounds that quietly eat into everyone's time.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-forestmuted">
            The audit looks at how your setup really works day to day, then gives you clear, prioritised changes your team can make.
          </p>
          <div className="mt-8">
            <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="audit-included"
              className="group inline-flex items-center gap-3 rounded-[4px] bg-apricot px-5 py-3.5 text-[15px] font-medium text-[#1D2B24] hover:brightness-95">
              Explore the OpenApply audit<Arrow className={open ? 'rotate-90' : ''} />
            </button>
          </div>
          {open && (
            <div id="audit-included" className="mt-6 border-t border-forestmuted pt-6">
              <p className="eyebrow text-forestmuted">What's included</p>
              <ul className="mt-4 grid gap-2.5 text-[15px]">
                {included.map(i => (
                  <li key={i} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-apricot" aria-hidden="true"></span>{i}</li>
                ))}
              </ul>
              <p className="mt-5 text-[13.5px] text-forestmuted">We only ever work from anonymised data. No family's personal details leave your school.</p>
            </div>
          )}
        </div>

        <div className="min-w-0 md:col-span-7">
          <div className="rounded-[6px] bg-paper text-ink">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line px-6 pb-5 pt-6 sm:px-8">
              <div>
                <p className="eyebrow text-muted">Admissions audit · Findings summary</p>
                <p className="mt-2 text-[20px] font-normal">Example International School</p>
              </div>
              <span className="rounded-[3px] border border-dashed border-muted px-2.5 py-1 text-[11.5px] font-medium uppercase tracking-[0.08em] text-muted">
                Sample report · illustrative only
              </span>
            </div>

            <div role="tablist" aria-label="Report sections" className="flex gap-1 overflow-x-auto border-b border-line px-4 sm:px-6">
              {tabs.map(t => (
                <button key={t} role="tab" type="button" aria-selected={tab === t} onClick={() => setTab(t)}
                  className={'whitespace-nowrap border-b-2 px-3 py-3.5 text-[14px] transition ' + (tab === t ? 'border-forest font-medium text-ink' : 'border-transparent text-muted hover:text-ink')}>
                  {t}
                </button>
              ))}
            </div>

            <ul role="tabpanel" aria-label={tab} className="px-6 py-3 sm:px-8">
              {report[tab].map(([text, tag]) => (
                <li key={text} className="grid grid-cols-[1fr_auto] items-start gap-4 border-b border-line py-4 last:border-b-0">
                  <p className="text-[15px] leading-relaxed">{text}</p>
                  <span className={'whitespace-nowrap rounded-[3px] px-2 py-1 text-[11.5px] font-medium ' + tagStyle[tag]}>{tag}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line px-6 py-4 text-[12.5px] text-muted sm:px-8">
              <span>Every finding links to evidence and a criterion in the full report.</span>
              <span>Page 2 of 12</span>
            </div>
          </div>
          <p className="mt-4 text-[13px] text-forestmuted">This is a sample to show the format. It is not a real school or a completed client project.</p>
        </div>
      </div>
    </section>
  );
}

/* Approach */
const steps = [
  { name: 'Understand', body: 'We listen first: who does what, where it hurts, and what families actually experience.' },
  { name: 'Unpick', body: "We look under the bonnet of your systems and processes to find what's really causing the friction." },
  { name: 'Improve', body: 'Practical changes in a sensible order, starting with what makes the biggest difference for the least effort.' },
  { name: 'Support', body: 'Training, simple guides and a friendly voice afterwards, so the changes stick.' }
];

function Approach() {
  const [step, setStep] = useState(0);
  return (
    <section id="approach" className="gutter">
      <div className="mx-auto max-w-site py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow text-mintink">How we work</p>
            <h2 className="mt-5 text-[34px] font-light leading-[1.08] tracking-[-0.02em] sm:text-[44px]">
              Good technology. <em className="italic">Better ways of working.</em>
            </h2>
          </div>
          <div className="space-y-4 text-[16px] leading-relaxed text-muted md:col-span-5 md:col-start-8">
            <p>We start with the people, the processes and the problems, and only then talk about software. Often the fix is a clearer process rather than a new tool.</p>
            <p>Technology should make your team's jobs easier, not create more work. If a recommendation won't survive a busy September, it isn't the right one.</p>
          </div>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const on = step === i;
            return (
              <li key={s.name} className="min-w-0">
                <button type="button" onClick={() => setStep(i)} onMouseEnter={() => setStep(i)} aria-pressed={on}
                  className={'flex h-full w-full flex-col items-start p-7 text-left transition ' + (on ? 'bg-mint' : 'bg-paper hover:bg-bg')}>
                  <span className="flex w-full items-center justify-between">
                    <span className={'text-[13px] font-medium ' + (on ? 'text-mintink' : 'text-muted')}>Step {i + 1}</span>
                    <span className={'text-[18px] ' + (i < steps.length - 1 ? '' : 'invisible ') + (on ? 'text-mintink' : 'text-muted')} aria-hidden="true">→</span>
                  </span>
                  <span className={'mt-8 text-[28px] font-light tracking-[-0.01em] ' + (on ? 'text-mintink' : '')}>{s.name}</span>
                  <span className={'mt-3 text-[14.5px] leading-relaxed ' + (on ? 'text-mintink' : 'text-muted')}>{s.body}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* Human */
function About() {
  return (
    <section id="about" className="gutter border-t border-line">
      <div className="mx-auto grid max-w-site gap-12 py-20 md:grid-cols-12 md:items-center md:py-28">
        <div className="photo-mint relative aspect-[4/5] max-w-full overflow-hidden rounded-[6px] md:col-span-5">
          <span className="absolute bottom-4 left-4 right-4 text-[12.5px] leading-snug text-mintink">
            <span className="font-medium">Founder photograph.</span> Natural light, ideally at work in a school setting rather than a studio.
          </span>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="eyebrow text-mintink">About</p>
          <h2 className="mt-5 text-[34px] font-light leading-[1.08] tracking-[-0.02em] sm:text-[44px]">
            Real people. <em className="italic">Real school challenges.</em>
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-muted">
            International schools are busy, multilingual and full of moving parts. We know how an admissions office feels the week before a new intake, and we plan our work around that.
          </p>
          <div className="mt-8 rounded-[6px] border border-dashed border-line p-6">
            <p className="eyebrow text-muted">Founder biography</p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              [A few warm sentences in the founder's own voice: their name, how they came to work with international schools, and what they care about most when helping a school team.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Insights */
const insights = [
  ['Admissions systems', 'What your OpenApply statuses say about your process'],
  ['Admissions journeys', 'The first reply: why speed and warmth matter so much'],
  ['Digital marketing', 'How parents are starting to use AI to shortlist schools']
];

function Insights() {
  return (
    <section id="insights" className="gutter border-t border-line">
      <div className="mx-auto max-w-site py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-mintink">Insights</p>
            <h2 className="mt-5 text-[30px] font-light tracking-[-0.02em] sm:text-[36px]">Notes from the admissions office</h2>
          </div>
          <p className="text-[13.5px] text-muted">First articles coming soon</p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line md:grid-cols-3">
          {insights.map(([topic, title]) => (
            <article key={title} className="group bg-paper p-7">
              <p className="text-[12.5px] font-medium text-mintink">{topic}</p>
              <h3 className="mt-4 text-[20px] font-normal leading-snug">{title}</h3>
              <p className="mt-8 inline-flex items-center gap-2 text-[13px] text-muted">Coming soon<Arrow /></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Final CTA */
function Talk() {
  const [sent, setSent] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get('name') || ''}\nSchool: ${f.get('school') || ''}\nEmail: ${f.get('email') || ''}\n\nWhat's not working:\n${f.get('message') || ''}`;
    window.location.href = 'mailto:digitisemyschool@gmail.com?subject=' + encodeURIComponent("Let's talk") + '&body=' + encodeURIComponent(body);
    setSent(true);
  };
  return (
    <section id="talk" className="gutter bg-apricotsoft">
      <div className="mx-auto grid max-w-site gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-6">
          <h2 className="text-[38px] font-light leading-[1.04] tracking-[-0.025em] sm:text-[56px]">
            Tell us what's <em className="italic">not working.</em>
          </h2>
          <p className="mt-6 max-w-[34rem] text-[17px] leading-relaxed text-muted">
            Clunky admissions processes? A system nobody quite understands? Or just a feeling that things could run better? Let's have a conversation.
          </p>
          <p className="mt-8 text-[14px] text-muted">Or email <a href="mailto:digitisemyschool@gmail.com" className="link-u font-medium text-ink">digitisemyschool@gmail.com</a></p>
        </div>
        <form className="grid gap-4 md:col-span-5 md:col-start-8" onSubmit={onSubmit}>
          <label className="grid gap-1.5 text-[13px] font-medium">Your name
            <input id="talk-name" name="name" autoComplete="name" className="rounded-[4px] border border-line px-4 py-3 text-[15px] font-normal" />
          </label>
          <label className="grid gap-1.5 text-[13px] font-medium">School
            <input id="talk-school" name="school" autoComplete="organization" className="rounded-[4px] border border-line px-4 py-3 text-[15px] font-normal" />
          </label>
          <label className="grid gap-1.5 text-[13px] font-medium">Email
            <input id="talk-email" name="email" type="email" autoComplete="email" className="rounded-[4px] border border-line px-4 py-3 text-[15px] font-normal" />
          </label>
          <label className="grid gap-1.5 text-[13px] font-medium">What's not working?
            <textarea id="talk-msg" name="message" rows="4" className="rounded-[4px] border border-line px-4 py-3 text-[15px] font-normal"></textarea>
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className="group inline-flex items-center gap-3 rounded-[4px] bg-forest px-5 py-3.5 text-[15px] font-medium text-forestink hover:brightness-110">
              Let's talk<Arrow />
            </button>
            {sent && <p className="text-[14px] text-ink" role="status">Your email app should open with your message ready to send.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="gutter">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-4 py-8 text-[13px] text-muted">
        <span>Digitise My School<span className="text-apricot">.</span> Digital consultancy for international schools.</span>
        <span>© 2026 Digitise My School</span>
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
        <Services />
        <Audit />
        <Approach />
        <About />
        <Insights />
        <Talk />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
