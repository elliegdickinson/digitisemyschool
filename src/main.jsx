import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const EMAIL = 'digitisemyschool@gmail.com';

const Arrow = ({ className = '' }) => (
  <svg className={'nudge inline-block ' + className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Photo = ({ src, alt, className = '', position = 'center' }) => (
  <div className={'photo-frame ' + className}>
    <img src={src} alt={alt} className="photo" style={{ objectPosition: position }} loading="lazy" decoding="async" />
  </div>
);

/* Navigation */
const navLinks = [['About', '#about'], ['Services', '#services'], ['OpenApply audit', '#audit'], ['Approach', '#approach']];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="gutter sticky top-0 z-30 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-site items-center justify-between py-5">
        <a href="#top" className="text-[18px] font-semibold tracking-tight text-ink">
          Digitise My School<span className="text-apricotdeep">.</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-9 text-[15px] text-muted md:flex">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} className="link-u hover:text-ink">{label}</a>
          ))}
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-[3px] bg-forest px-4 py-2.5 font-medium text-forestink hover:bg-forestdeep">
            Get in touch<Arrow />
          </a>
        </nav>
        <button type="button" className="rounded-[3px] border border-line px-3.5 py-2 text-[15px] md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="mx-auto grid max-w-site pb-6 md:hidden">
          {[...navLinks, ['Get in touch', '#contact']].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-line py-3.5 text-[18px]">{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* Hero */
const problems = [
  'OpenApply set up years ago and never really revisited',
  'Enquiries spread across inboxes, WhatsApp and Zalo',
  'The same family details typed into three different systems',
  'Parents hearing from five people, in five different styles'
];

function Hero() {
  return (
    <section id="top" className="gutter">
      <div className="mx-auto max-w-site pt-14 md:pt-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7 md:pt-6">
            <p className="label text-forest">Admissions, systems and digital strategy for international schools</p>
            <h1 className="mt-7 text-[46px] font-medium leading-[1.02] tracking-[-0.035em] sm:text-[66px] lg:text-[84px]">
              Schools are complicated. Your systems shouldn't be.
            </h1>
            <p className="mt-8 max-w-[34rem] text-[19px] leading-[1.65] text-muted sm:text-[21px]">
              Practical help with admissions technology, processes and digital strategy. From someone who understands how schools actually work.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#contact" className="group inline-flex items-center gap-3 rounded-[3px] bg-apricot px-6 py-4 text-[16px] font-medium text-ink hover:bg-apricotdeep">
                Talk to me about your school<Arrow />
              </a>
              <a href="#audit" className="group inline-flex items-center gap-2 text-[16px] font-medium text-forest">
                <span className="link-u">See the OpenApply audit</span><Arrow />
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <Photo src="img/school-gate-welcome.webp" alt="A member of staff welcoming a parent and young child at the gate of an international school" className="aspect-[4/5] md:-mr-10 lg:-mr-20" position="62% center" />
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-line pt-8 pb-20 md:mt-20 md:grid-cols-12 md:pb-28">
          <p className="label text-muted md:col-span-3">Sound familiar?</p>
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 md:col-span-9">
            {problems.map(p => (
              <li key={p} className="flex gap-4 text-[17px] leading-snug">
                <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-apricotdeep" aria-hidden="true"></span>{p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Founder */
function Founder() {
  return (
    <section id="about" className="gutter bg-paper">
      <div className="mx-auto grid max-w-site gap-12 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-4">
          <div className="flex aspect-[4/5] max-w-[26rem] flex-col justify-end rounded-[3px] border-2 border-dashed border-line bg-bg p-6">
            <p className="label text-muted">Founder photograph</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">Replace with a natural, daylight photo of you, ideally at work rather than in a studio.</p>
          </div>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="label text-forest">Who you'll be working with</p>
          <h2 className="mt-6 text-[38px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[52px]">
            Hello, I'm [your name].
          </h2>
          <div className="mt-8 max-w-[38rem] space-y-6 text-[18px] leading-[1.75]">
            <p className="rounded-[3px] bg-apricotsoft px-4 py-3 text-ink">
              [Two or three sentences about your background in your own words: the schools and roles you've worked in, and the kinds of problems you've helped solve.]
            </p>
            <p className="rounded-[3px] bg-apricotsoft px-4 py-3 text-ink">
              [A sentence or two on why you started Digitise My School and what you enjoy about the work.]
            </p>
            <p className="text-muted">
              Digitise My School is a one-person consultancy, so the person you speak to first is the person who does the work, from the first conversation to the final debrief.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Services */
const services = [
  {
    title: 'OpenApply set-up and tidy-up',
    body: "Many schools are still running OpenApply the way it was configured on launch day, plus years of workarounds on top. I'll go through your statuses, forms, checklists, permissions and automated emails, fix what's getting in the way, and leave you with a setup your team actually understands."
  },
  {
    title: 'Admissions workflows',
    body: "Enquiries sitting in one person's inbox, offers chased by hand, the same details keyed into the admissions system, the MIS and a spreadsheet. I map how a family really moves from first enquiry to first day and take out the steps that create admin without helping anyone."
  },
  {
    title: 'Parent communications',
    body: "Families hear from admissions, marketing, finance and teachers, often in different tones and at unpredictable times. I help you decide who says what and when, then set up the templates and automated messages so it happens without anyone having to remember."
  },
  {
    title: 'Digital marketing and visibility',
    body: "Your website, social channels and search results are where most families first meet you. I make sure they answer the questions parents really ask and make the next step obvious. That now includes checking what AI assistants say when parents ask them to recommend a school."
  },
  {
    title: 'Training and ongoing support',
    body: "Hands-on sessions for the people who use the systems every day, short written guides they'll actually open, and someone to call when a new term throws up something unexpected."
  }
];

function Services() {
  return (
    <section id="services" className="gutter">
      <div className="mx-auto grid max-w-site gap-14 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <p className="label text-forest">Services</p>
            <h2 className="mt-6 text-[38px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[48px]">
              Where I can help
            </h2>
            <p className="mt-6 max-w-[28rem] text-[18px] leading-[1.7] text-muted">
              Most of my work sits where admissions, technology and communication overlap. You can bring me in for one of these, or for whatever is causing the most friction right now.
            </p>
            <Photo src="img/admissions-conversation.webp" alt="An admissions officer talking warmly with a parent across a desk" className="mt-10 hidden aspect-[4/3] md:block" position="30% center" />
          </div>
        </div>
        <ol className="md:col-span-7">
          {services.map(s => (
            <li key={s.title} className="svc-rule border-t border-line py-9 first:pt-9">
              <h3 className="text-[26px] font-medium leading-tight tracking-[-0.015em] sm:text-[30px]">{s.title}</h3>
              <p className="mt-4 text-[18px] leading-[1.75] text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* OpenApply audit */
const scores = [
  ['Enquiry capture and response', '52%', 'Needs work'],
  ['Application form and parent experience', '71%', 'Needs work'],
  ['Workflow, statuses and checklists', '58%', 'Needs work'],
  ['Communications and templates', '44%', 'Priority'],
  ['Data quality and reporting', '49%', 'Priority'],
  ['Data protection and access', '80%', 'Good'],
  ['Integrations and handover to the MIS', '75%', 'Good'],
  ['Team, ownership and training', '63%', 'Needs work']
];
const ratingStyle = { Good: 'text-forest', 'Needs work': 'text-[#9A5A2E]', Priority: 'font-semibold text-[#9A3B22]' };
const plan = [
  ['First 30 days', 'Retire three unused statuses and write a one-line definition for each remaining one. Agree a same-day reply standard for new enquiries.'],
  ['Days 31 to 60', 'Make enquiry source a required field with a fixed list. Rewrite the five core automated emails and add Vietnamese and Korean versions.'],
  ['Days 61 to 90', 'Build the monthly leadership report inside OpenApply so it no longer has to be rebuilt in a spreadsheet.']
];
const included = [
  'A short questionnaire for your admissions lead',
  'A review of your OpenApply configuration, forms, checklists, permissions and emails',
  'A timed test enquiry, made the way a parent would make it',
  'Your admissions funnel rebuilt from anonymised data',
  'A written report scoring eight areas, with evidence for every finding',
  'A debrief with leadership and a prioritised 90-day plan'
];

function Report() {
  const tabs = ['Summary', 'Sample finding', '90-day plan'];
  const [tab, setTab] = useState(tabs[0]);
  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2px] bg-[#E9E4D8]" aria-hidden="true"></div>
      <article className="paper-shadow relative rounded-[2px] bg-paper text-ink">
        <header className="border-b border-line px-6 pb-5 pt-7 sm:px-10">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <p className="label text-muted">Admissions systems audit</p>
            <p className="rounded-[2px] bg-apricotsoft px-2.5 py-1 text-[12px] font-medium uppercase tracking-[0.08em] text-[#7A4A2A]">Demonstration material</p>
          </div>
          <p className="mt-3 text-[24px] font-medium tracking-[-0.01em]">Example International School</p>
          <p className="text-[15px] text-muted">Findings summary · Section 2 of 6</p>
        </header>

        <div role="tablist" aria-label="Report sections" className="flex gap-1 overflow-x-auto border-b border-line px-4 sm:px-8">
          {tabs.map(t => (
            <button key={t} role="tab" type="button" aria-selected={tab === t} onClick={() => setTab(t)}
              className={'whitespace-nowrap border-b-2 px-3 py-3.5 text-[15px] transition ' + (tab === t ? 'border-forest font-medium text-ink' : 'border-transparent text-muted hover:text-ink')}>
              {t}
            </button>
          ))}
        </div>

        <div role="tabpanel" aria-label={tab} className="px-6 py-6 sm:px-10 sm:py-8">
          {tab === 'Summary' && (
            <div>
              <p className="text-[16px] leading-[1.7]">
                Overall score <strong className="font-semibold">61 out of 100</strong>. The system is sound, but enquiries arriving through WhatsApp and agents never reach OpenApply, so roughly a third of the pipeline can't be seen or followed up.
              </p>
              <table className="mt-6 w-full text-left text-[15px]">
                <thead>
                  <tr className="border-b border-line text-[13px] uppercase tracking-[0.08em] text-muted">
                    <th className="py-2 pr-3 font-medium">Area</th>
                    <th className="py-2 pr-3 text-right font-medium">Score</th>
                    <th className="py-2 text-right font-medium">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {scores.map(([area, score, rating]) => (
                    <tr key={area} className="border-b border-line last:border-b-0">
                      <td className="py-2.5 pr-3">{area}</td>
                      <td className="py-2.5 pr-3 text-right tabular-nums">{score}</td>
                      <td className={'py-2.5 text-right ' + ratingStyle[rating]}>{rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {tab === 'Sample finding' && (
            <div className="space-y-5 text-[16px] leading-[1.7]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-[20px] font-medium">1.3 First reply to a new enquiry</p>
                <p className="text-[14px] text-muted">Priority: High · Effort: Low</p>
              </div>
              <div>
                <p className="label text-muted">What we found</p>
                <p className="mt-1">A test enquiry sent through the website form on a Tuesday morning received the automatic confirmation within a minute. The first personal reply arrived four working days later.</p>
              </div>
              <div>
                <p className="label text-muted">Why it matters</p>
                <p className="mt-1">Families usually contact several schools at once. A slow first reply is often the point at which they book a visit somewhere else.</p>
              </div>
              <div>
                <p className="label text-muted">Recommendation</p>
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
      <div className="mx-auto grid max-w-site gap-14 py-20 md:grid-cols-12 md:gap-10 md:py-28">
        <div className="md:col-span-5">
          <p className="label text-apricot">The flagship service</p>
          <h2 className="mt-6 text-[40px] font-medium leading-[1.05] tracking-[-0.025em] sm:text-[54px]">The OpenApply audit</h2>
          <p className="mt-7 text-[20px] leading-[1.6]">
            A fixed-scope review of how your admissions system is really being used, and what to change first.
          </p>
          <p className="mt-5 text-[17px] leading-[1.75] text-forestmuted">
            Good technology doesn't guarantee a smooth process. After a few busy admissions seasons, most schools have complicated workflows, inconsistent data and jobs done by hand that the system could do for them. The audit finds where that's happening, explains why it matters for families and staff, and puts the fixes in order.
          </p>
          <ul className="mt-8 space-y-3 border-t border-forest pt-8">
            {included.map(i => (
              <li key={i} className="flex gap-4 text-[16.5px] leading-snug">
                <span className="mt-[8px] h-1.5 w-1.5 flex-none rounded-full bg-apricot" aria-hidden="true"></span>{i}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[16px] text-forestmuted">Typically around three weeks from the first questionnaire to the final debrief. Only anonymised data ever leaves your school.</p>
          <a href="#contact" className="group mt-9 inline-flex items-center gap-3 rounded-[3px] bg-apricot px-6 py-4 text-[16px] font-medium text-ink hover:bg-apricotdeep">
            Ask about an audit for your school<Arrow />
          </a>
        </div>
        <div className="min-w-0 md:col-span-7 md:pt-4">
          <Report />
          <p className="mt-8 text-[14px] leading-relaxed text-forestmuted">
            Demonstration material to show the format of the report. Example International School is not a real school, and these are not results from a client.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Approach */
const steps = [
  ['Understand', 'I start by listening to the people who do the work, and by looking at admissions the way a family experiences it.'],
  ['Unpick', 'Then I look closely at your systems and processes to find what is actually causing the friction, which is not always where people expect.'],
  ['Improve', 'Changes come in a sensible order, starting with whatever makes the biggest difference for the least effort.'],
  ['Support', 'Finally, training, short guides and someone to ask afterwards, so the improvements last beyond the first busy week.']
];

function Approach() {
  return (
    <section id="approach" className="gutter">
      <div className="mx-auto grid max-w-site gap-12 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-6 md:-ml-10 lg:-ml-20">
          <Photo src="img/team-meeting.webp" alt="A school admissions team sketching out a process together around a table" className="aspect-[4/3] md:aspect-[5/6]" position="40% center" />
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pl-6">
          <p className="label text-forest">Approach</p>
          <h2 className="mt-6 text-[38px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[48px]">How I work</h2>
          <p className="mt-6 text-[18px] leading-[1.75] text-muted">
            The answer is rarely a new piece of software. More often it's a clearer process, a better-configured system you already pay for, and a team that feels confident using it. If an idea won't survive the first week of a new term, it isn't the right one.
          </p>
          <ol className="mt-10">
            {steps.map(([name, text], i) => (
              <li key={name} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-6">
                <span className="text-[15px] font-medium tabular-nums text-apricotdeep">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-[21px] font-medium">{name}</h3>
                  <p className="mt-1.5 text-[17px] leading-[1.7] text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
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
    const body = `Name: ${f.get('name') || ''}\nSchool: ${f.get('school') || ''}\nEmail: ${f.get('email') || ''}\n\nWhat's getting in the way:\n${f.get('message') || ''}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Enquiry from the website')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <section id="contact" className="gutter">
      <div className="mx-auto max-w-site">
        <Photo src="img/campus-walkway.webp" alt="Students walking along a shaded walkway at an international school campus" className="aspect-[16/9] sm:aspect-[21/8]" position="center 55%" />
        <div className="grid gap-12 py-20 md:grid-cols-12 md:gap-8 md:py-24">
          <div className="md:col-span-6">
            <h2 className="text-[40px] font-medium leading-[1.05] tracking-[-0.025em] sm:text-[56px]">Tell me what's getting in the way</h2>
            <p className="mt-7 max-w-[32rem] text-[18px] leading-[1.75] text-muted">
              It might be a clunky enquiry process, a system nobody quite understands, or just a sense that admissions takes more effort than it should. Send me a few lines and I'll get back to you.
            </p>
            <p className="mt-8 text-[17px]">Or email <a href={`mailto:${EMAIL}`} className="link-u font-medium">{EMAIL}</a></p>
          </div>
          <form className="grid gap-5 md:col-span-5 md:col-start-8" onSubmit={onSubmit}>
            {[['name', 'Your name', 'text', 'name'], ['school', 'School', 'text', 'organization'], ['email', 'Email', 'email', 'email']].map(([n, l, t, ac]) => (
              <label key={n} className="grid gap-2 text-[15px] font-medium">{l}
                <input id={'contact-' + n} name={n} type={t} autoComplete={ac} className="rounded-[3px] border border-line px-4 py-3.5 text-[17px] font-normal" />
              </label>
            ))}
            <label className="grid gap-2 text-[15px] font-medium">What's getting in the way?
              <textarea id="contact-message" name="message" rows="4" className="rounded-[3px] border border-line px-4 py-3.5 text-[17px] font-normal"></textarea>
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className="group inline-flex items-center gap-3 rounded-[3px] bg-forest px-6 py-4 text-[16px] font-medium text-forestink hover:bg-forestdeep">
                Send<Arrow />
              </button>
              {sent && <p className="text-[15px]" role="status">Your email app should open with your message ready to send.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="gutter bg-forestdeep text-forestink">
      <div className="mx-auto grid max-w-site gap-8 py-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="text-[20px] font-semibold tracking-tight">Digitise My School<span className="text-apricot">.</span></p>
          <p className="mt-3 max-w-[26rem] text-[16px] leading-relaxed text-forestmuted">Admissions, systems and digital strategy for international schools.</p>
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
