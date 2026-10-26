# Digitise My School website

This is Anne Dickinson's business website, live at https://digitisemyschool.com.
Anne is the founder and the person you'll be working with. She is comfortable with
computers but is not a developer.

## How to work with Anne

- Explain what you're about to do in one or two plain-English sentences before you do it. No jargon.
- One change at a time. Make the change, show her a preview, then wait.
- **Never publish without Anne saying so.** "Publish", "push it live", "that looks good, put it up" all count. Anything else does not.
- If a request is unclear, ask a short question rather than guessing.
- After publishing, tell her it will be live at digitisemyschool.com within a couple of minutes and to refresh the page.

## The workflow: ask, check, publish

1. **Edit** the source in `src/` (never edit files in `docs/` by hand, they are generated).
2. **Preview**: run `npm run preview`, then give Anne the link http://localhost:4321.
   Check the change at a laptop width (about 1280px) and a phone width (about 375px) and mention anything that looks off.
3. **Publish** (only when Anne says so):
   ```
   npm run build
   git add -A
   git commit -m "<what changed, in plain English>"
   git push
   ```
   GitHub Pages publishes from the `docs/` folder on the `main` branch.
4. **Undo**: to reverse the last published change, `git revert HEAD`, rebuild, then commit and push once Anne agrees.

First time on a new computer: run `npm install` before anything else.

## Where things are

- `src/main.jsx`: all the page content and layout, one React component per section
  (Nav, Hero, Sound familiar?, Meet Anne, Services, OpenApply audit, Approach, Contact, Footer).
  Most wording changes happen here.
- `src/styles.css`: colour tokens, type and the small visual motifs.
- `tailwind.config.js`: maps the colour tokens to Tailwind class names.
- `docs/`: the built site that goes live. `docs/img/` holds the photos.
- `docs/CNAME`: tells GitHub the site lives at digitisemyschool.com. **Never delete or change it.**

## Brand

- Colours (keep to these): ivory `#F7F5F0`, cream `#FBF7EE`, forest `#1F4A36`, deep forest `#163426`,
  ink `#183A2A`, sage `#D3E1D5`, apricot `#F2A574` / `#E08A55`, soft apricot `#FBE1CE`.
- Font: Poppins. Body text at least 18px. Big, confident headings.
- Motif, used sparingly: green document tabs over a fine line, apricot highlighter, small ticks, italic notes.
- No stock photos of posed people, no fake dashboards, no gimmicky animation.

## Writing

- Natural British English, warm, direct and practical, with a little understated humour. First person ("I").
- Specific school examples (OpenApply statuses, enquiries lost in inboxes, re-keyed data) over general claims.
- Avoid: "digital transformation", "seamless", "empower", "unlock potential", and slogan-style paired sentences.
- **Never invent** experience, clients, results, testimonials or numbers. If something is missing, ask Anne.
- The sample OpenApply audit report must stay clearly labelled as an illustrative example, not a client result.

## Things not to do

- Don't add or ask for any identifiable information about students or families.
- Don't add tracking, cookies, paid services or new dependencies without asking Anne.
- Don't change the domain, GitHub Pages settings or DNS.
