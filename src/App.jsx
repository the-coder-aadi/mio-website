import { useEffect, useRef, useState } from 'react'
import { SITE, STATS, COURSES, MERN, INSTRUCTORS, PROJECTS, VIDEOS, REVIEWS, FAQS, JOBS, JOB_TERMS, BOT, reply } from './data.js'

/* ---------- helpers ---------- */
const wa = (t) => window.open(`https://wa.me/${SITE.wa}?text=${encodeURIComponent(t)}`, '_blank')
const mail = (to, s, b) => (window.location.href = `mailto:${to}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`)
const useHash = () => { const [h, setH] = useState(location.hash.slice(1) || '/'); useEffect(() => { const f = () => { setH(location.hash.slice(1) || '/'); window.scrollTo(0, 0) }; addEventListener('hashchange', f); return () => removeEventListener('hashchange', f) }, []); return h }
// scroll to a home-page section (navigates home first if needed)
const goSec = (id) => (e) => { e.preventDefault(); const run = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); if (location.hash.slice(1) && location.hash.slice(1) !== '/') { location.hash = '/'; setTimeout(run, 150) } else run() }
function Reveal({ children, className = '', delay = 0 }) { const r = useRef(); useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { r.current.classList.add('in'); o.disconnect() } }, { threshold: .12 }); o.observe(r.current); return () => o.disconnect() }, []); return <div ref={r} style={{ transitionDelay: delay + 'ms' }} className={'reveal ' + className}>{children}</div> }
const Head = ({ eye, title, sub }) => <Reveal className="mx-auto mb-14 max-w-2xl text-center"><p className="eyebrow">{eye}</p><h2 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h2>{sub && <p className="mt-4 text-slate-500 dark:text-slate-400">{sub}</p>}</Reveal>
const Toast = ({ msg }) => <div role="status" className={`fixed bottom-24 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-slate-900 px-5 py-3 text-sm text-white shadow-2xl transition ${msg ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>{msg}</div>
const useToast = () => { const [m, setM] = useState(''); return [m, (t) => { setM(t); setTimeout(() => setM(''), 2200) }] }
const copy = async (t, toast) => { try { await navigator.clipboard.writeText(t) } catch { const a = document.createElement('textarea'); a.value = t; document.body.append(a); a.select(); document.execCommand('copy'); a.remove() } toast('Copied to clipboard ✓') }

/* ---------- navbar ---------- */

function Nav({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSc(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const L = [
    ["About", "about"],
    ["Courses", "courses"],
    ["Instructors", "instructors"],
    ["Projects", "projects"],
    ["Reviews", "reviews"],
    ["FAQ", "faq"],
    ["Contact", "contact"],
  ];

  const handleNav = (id) => (e) => {
    if (typeof goSec === "function") goSec(id)(e);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        sc
          ? "border-b border-slate-200/70 bg-white/90 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-ink/90"
          : "bg-white/60 dark:bg-ink/40"
      }`}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-5 lg:px-8">
        {/* Logo */}
        <a
          href="#/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-violet-500 font-display text-lg font-bold text-white shadow-lg shadow-brand/30 sm:h-11 sm:w-11 sm:rounded-2xl sm:text-xl">
            M
          </span>

        


<span className="min-w-0 leading-tight">
  {/* Premium Mobile Branding */}
  <span className="flex items-center gap-1.5 sm:hidden">
    <b className="bg-gradient-to-r from-brand via-violet-500 to-fuchsia-500 bg-clip-text font-display text-xl font-extrabold tracking-[0.12em] text-transparent">
      MIO
    </b>

  </span>

  {/* Original Desktop Branding */}
  <b className="hidden font-display text-lg text-slate-900 dark:text-white sm:block">
    Modern Institute
  </b>
  <span className="hidden text-[10px] font-semibold uppercase tracking-[.3em] text-brand sm:block">
    of Computers
  </span>
</span>



        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-4 whitespace-nowrap text-sm font-medium xl:gap-6 lg:flex"
          aria-label="Main navigation"
        >
          {L.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={handleNav(id)}
              className="transition-colors hover:text-brand"
            >
              {name}
            </a>
          ))}

          <a
            href="#/careers"
            onClick={() => setOpen(false)}
            className="transition-colors hover:text-brand"
          >
            Careers
          </a>
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-300 text-base transition hover:rotate-12 dark:border-white/20 sm:h-10 sm:w-10 sm:text-lg"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <a
            href="#/mern"
            onClick={() => setOpen(false)}
            className="btn-p hidden whitespace-nowrap px-3 py-2 text-sm sm:inline-flex sm:px-4"
          >
            Join MERN
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-300 text-lg dark:border-white/20 lg:hidden sm:h-10 sm:w-10"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      {open && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-slate-200/70 bg-white/95 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-ink/95 sm:max-h-[calc(100dvh-80px)] sm:p-5 lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex w-full max-w-xl flex-col gap-1"
          >
            {L.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={handleNav(id)}
                className="block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-brand/10 sm:text-base"
              >
                {name}
              </a>
            ))}

            <a
              href="#/careers"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-brand/10 sm:text-base"
            >
              Careers
            </a>

            <a
              href="#/mern"
              onClick={() => setOpen(false)}
              className="btn-p mt-2 flex w-full items-center justify-center px-4 py-3 text-center text-sm sm:text-base"
            >
              Explore MERN Stack (Online)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}


/* ---------- hero ---------- */
function Hero() {
  return <section className="relative overflow-hidden bg-slate-50 pt-28 sm:pt-32 dark:bg-ink">
    <div className="pointer-events-none absolute -left-32 top-10 h-[480px] w-[480px] rounded-full bg-brand/25 blur-[120px]" /><div className="pointer-events-none absolute -right-32 top-40 h-[420px] w-[420px] rounded-full bg-violet-600/25 blur-[120px]" />
    <div className="pointer-events-none absolute inset-0 opacity-[.07] [background-image:linear-gradient(#888_1px,transparent_1px),linear-gradient(90deg,#888_1px,transparent_1px)] [background-size:56px_56px]" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 lg:grid-cols-2">
      <div>
        <a href="#/mern" className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />New batch • MERN Stack • 100% Online</a>
        <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl">Learn to build the <span className="grad">web of tomorrow.</span></h1>
        <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">Anantnag's premier computer institute. Become a job-ready full-stack developer with our fully online MERN Stack programme — or start with ADCA, DCA and MS Office in our classroom.</p>
        <div className="mt-9 flex flex-wrap gap-3"><a href="#/mern" className="btn-p">Explore MERN Stack →</a><a href="#contact" onClick={goSec('contact')} className="btn-g">Book a free demo</a></div>
        <div className="mt-12 grid max-w-lg grid-cols-4 gap-4">{STATS.map(([n, l]) => <div key={l}><b className="font-display text-2xl text-slate-900 dark:text-white md:text-3xl">{n}</b><p className="text-[11px] leading-tight text-slate-500">{l}</p></div>)}</div>
      </div>
      <div className="relative mx-auto w-full max-w-lg animate-float">
        <div className="rounded-3xl border border-white/10 bg-slate-950 p-1 shadow-2xl shadow-brand/20">
          <div className="flex gap-1.5 px-4 py-3">{['bg-red-400', 'bg-amber-400', 'bg-emerald-400'].map(c => <i key={c} className={`h-3 w-3 rounded-full ${c}`} />)}<span className="ml-3 text-xs text-slate-500">mern-stack.jsx</span></div>
          <pre className="overflow-x-auto px-5 pb-6 font-mono text-[13px] leading-7 text-slate-300"><code><span className="text-violet-400">const</span> <span className="text-sky-300">student</span> = {'{'}{'\n'}  <span className="text-amber-300">stack</span>: [<span className="text-emerald-300">'Mongo'</span>, <span className="text-emerald-300">'Express'</span>,{'\n'}          <span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Node'</span>],{'\n'}  <span className="text-amber-300">mode</span>: <span className="text-emerald-300">'100% Online'</span>,{'\n'}  <span className="text-amber-300">projects</span>: <span className="text-pink-300">10</span>,{'\n'}  <span className="text-amber-300">career</span>: <span className="text-emerald-300">'Full-Stack Dev'</span>{'\n'}{'}'}</code></pre></div>
        <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-white/90 px-4 py-3 shadow-xl backdrop-blur dark:bg-slate-900/90 md:-left-10"><p className="text-xs text-slate-500">Certificate</p><b className="text-sm text-slate-900 dark:text-white">🏅 On completion</b></div>
        <div className="absolute -right-2 -top-6 rounded-2xl border border-white/10 bg-white/90 px-4 py-3 shadow-xl backdrop-blur dark:bg-slate-900/90"><p className="text-xs text-slate-500">Live classes</p><b className="text-sm text-slate-900 dark:text-white">🟢 Online</b></div></div></div>
    <div className="overflow-hidden border-y border-slate-200 py-4 dark:border-white/10"><div className="flex w-max animate-marquee gap-12 text-sm font-semibold uppercase tracking-[.2em] text-slate-400">{[...Array(2)].map((_, i) => <span key={i} className="flex gap-12">{['MERN Stack', 'ADCA', 'DCA', 'MS Office', 'Computer Fundamentals', 'Tally', 'Placement Support', 'Hands-on Labs'].map(t => <span key={t}>✦ {t}</span>)}</span>)}</div></div>
  </section>
}

/* ---------- home sections ---------- */
const About = () => <section id="about" className="sec"><div className="grid items-center gap-14 lg:grid-cols-2">
  <Reveal><p className="eyebrow">About the institute</p><h2 className="text-4xl font-bold md:text-5xl">The smart way <span className="grad">to learn.</span></h2>
    <p className="mt-6 leading-8">Modern Institute of Computers is a premier computer coaching institute empowering students with essential digital skills — from computer literacy to advanced programming. Our practical, student-centric approach bridges theory and real-world application.</p>
    <div className="mt-8 grid gap-4 sm:grid-cols-2">{[['🎯', 'Our Vision', 'Accessible, practical digital education that prepares students for careers and entrepreneurship.'], ['🚀', 'Our Mission', 'High-quality, industry-relevant training that turns aspirations into successful careers.']].map(([i, t, d]) => <div key={t} className="card p-6"><div className="text-2xl">{i}</div><h3 className="mt-2 text-xl font-bold">{t}</h3><p className="mt-2 text-sm">{d}</p></div>)}</div></Reveal>
  <Reveal delay={150} className="grid grid-cols-2 gap-4">{[['👩‍🏫', 'Qualified Teachers', 'Academic + industry experience'], ['🧪', 'Hands-on Training', 'Labs & practical exercises'], ['🏢', 'Modern Infrastructure', 'Industry-standard tools'], ['📝', 'Online Exam Prep', 'Competitive exam resources']].map(([i, t, d], k) => <div key={t} className={`card p-6 ${k % 2 ? 'mt-8' : ''}`}><div className="text-3xl">{i}</div><h3 className="mt-3 text-lg font-bold">{t}</h3><p className="mt-1 text-sm text-slate-500">{d}</p></div>)}</Reveal></div></section>

const MernFeature = () => <section className="relative overflow-hidden bg-ink py-24 text-slate-300">
  <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-violet-600/30 blur-[120px]" />
  <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2"><Reveal>
    <span className="rounded-full bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300">★ Flagship • Fully Online</span>
    <h2 className="mt-5 font-display text-4xl font-bold !text-white md:text-6xl">Master Web Development <span className="grad">(MERN Stack)</span></h2>
    <p className="mt-5 max-w-xl text-lg">Design, develop and deploy modern full-stack web applications from scratch — live, online, from anywhere.</p>
    <div className="mt-8 flex flex-wrap gap-3"><a href="#/mern" className="btn-p">View full course →</a><button onClick={() => wa('Hello! I want to join the MERN Stack (Online) course.')} className="btn-g !text-white">WhatsApp us</button></div></Reveal>
    <Reveal delay={150} className="grid grid-cols-2 gap-4">{MERN.modules.map(([n, d, i]) => <div key={n} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"><div className="text-3xl">{i}</div><h3 className="mt-2 text-xl font-bold !text-white">{n}</h3><p className="mt-1 text-sm">{d}</p></div>)}</Reveal></div></section>

const CourseCard = ({ c, i }) => <Reveal delay={i * 80}><article className={`card relative flex h-full flex-col p-7 ${c.featured ? '!border-brand/50 ring-1 ring-brand/30' : ''}`}>
  <div className="flex items-start justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand/20 to-violet-500/20 text-3xl">{c.icon}</span><span className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-widest ${c.featured ? 'bg-emerald-400/15 text-emerald-500' : 'bg-brand/10 text-brand'}`}>{c.tag}</span></div>
  <h3 className="mt-5 text-xl font-bold">{c.name}</h3><p className="mt-2 flex-1 text-sm leading-7">{c.blurb}</p>
  <div className="mt-4 flex gap-4 text-xs font-semibold text-slate-500"><span>⏱ {c.duration}</span><span>📍 {c.mode}</span></div>
  <div className="mt-5 flex gap-2">{c.featured ? <a href="#/mern" className="btn-p flex-1">Details</a> : <button onClick={() => wa(`Hello! I'd like details about the ${c.name} course.`)} className="btn-g flex-1">Enquire</button>}</div></article></Reveal>
const Courses = () => <section id="courses" className="sec"><Head eye="Our courses" title="Programmes designed for real careers" sub="From first steps to full-stack mastery — pick the path that fits you." />
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{COURSES.map((c, i) => <CourseCard key={c.id} c={c} i={i} />)}</div></section>

const Avatar = ({ i, s = 'h-24 w-24 text-3xl' }) => <div className={`grid ${s} place-items-center rounded-full bg-gradient-to-br from-brand via-violet-500 to-gold font-display font-bold text-white shadow-xl`}>{i}</div>
const Instructors = () => <section id="instructors" className="bg-slate-50 dark:bg-white/[.02]"><div className="sec"><Head eye="Faculty" title="Learn from people who build" sub="Dummy profiles — replace in src/data.js" />
  <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">{INSTRUCTORS.map((p, i) => <Reveal key={p.id} delay={i * 120}><div className="card p-8 text-center"><div className="flex justify-center"><Avatar i={p.init} /></div><h3 className="mt-5 text-2xl font-bold">{p.name}</h3><p className="text-sm font-semibold text-brand">{p.role}</p><p className="mt-3 text-sm">“{p.quote}”</p><div className="mt-4 flex flex-wrap justify-center gap-2">{p.skills.map(s => <span key={s} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">{s}</span>)}</div><a href={'#/instructor/' + p.id} className="btn-p mt-6">Know More →</a></div></Reveal>)}</div></div></section>
function InstructorPage({ id }) { const p = INSTRUCTORS.find(x => x.id === id); if (!p) return <NotFound />
  return <main className="mx-auto max-w-4xl px-5 pb-24 pt-36"><a href="#/" className="text-sm text-brand">← Back home</a>
    <div className="card mt-6 flex flex-col items-center gap-8 p-8 md:flex-row md:p-12"><Avatar i={p.init} s="h-40 w-40 text-5xl shrink-0" /><div><p className="eyebrow">{p.role}</p><h1 className="text-4xl font-bold">{p.name}</h1><p className="mt-4 leading-8">{p.bio}</p>
      <div className="mt-5 grid grid-cols-2 gap-4 text-sm"><div><b className="block text-slate-900 dark:text-white">Experience</b>{p.exp}</div><div><b className="block text-slate-900 dark:text-white">Education</b>{p.edu}</div></div>
      <div className="mt-5 flex flex-wrap gap-2">{p.skills.map(s => <span key={s} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">{s}</span>)}</div>
      <button onClick={() => wa(`Hello! I'd like to book a session with ${p.name}.`)} className="btn-p mt-6">Book a demo with {p.name.split(' ')[0]}</button></div></div></main> }

const Projects = () => <section id="projects" className="sec"><Head eye="Student showcase" title="Real projects. Real skills." sub="Sample placeholders — swap in your students' work." />
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{PROJECTS.map(([t, tag, g, by], i) => <Reveal key={t} delay={i * 70}><div className="group card overflow-hidden"><div className={`relative grid h-48 place-items-center overflow-hidden bg-gradient-to-br ${g}`}><div className="w-3/4 rounded-xl bg-white/90 p-3 shadow-xl transition duration-500 group-hover:scale-110 group-hover:-rotate-2"><div className="mb-2 flex gap-1">{[0, 1, 2].map(k => <i key={k} className="h-1.5 w-1.5 rounded-full bg-slate-300" />)}</div><div className="mb-1.5 h-2 w-2/3 rounded bg-slate-300" /><div className="mb-1.5 h-2 w-full rounded bg-slate-200" /><div className="h-8 rounded bg-slate-200" /></div></div>
    <div className="p-6"><span className="text-[10px] font-bold uppercase tracking-widest text-brand">{tag}</span><h3 className="mt-1 text-lg font-bold">{t}</h3><p className="text-sm text-slate-500">by {by}</p></div></div></Reveal>)}</div></section>

function Videos() { const [v, setV] = useState(null)
  return <section className="bg-ink py-24"><div className="mx-auto max-w-7xl px-5"><Head eye="Student voices" title={<span className="text-white">Hear it from our students</span>} />
    <div className="grid gap-6 md:grid-cols-3">{VIDEOS.map((x, i) => <Reveal key={x.name} delay={i * 100}><button onClick={() => setV(x)} className="group w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1.5"><div className="relative grid h-52 place-items-center bg-gradient-to-br from-brand/40 to-violet-600/40"><span className="grid h-16 w-16 place-items-center rounded-full bg-white text-2xl text-brand shadow-xl transition group-hover:scale-110">▶</span></div><div className="p-6"><p className="text-slate-200">“{x.quote}”</p><b className="mt-3 block text-white">{x.name}</b><span className="text-xs text-brand">{x.course}</span></div></button></Reveal>)}</div></div>
    {v && <div role="dialog" aria-modal="true" className="fixed inset-0 z-[90] grid place-items-center bg-black/80 p-5" onClick={() => setV(null)}><div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-slate-900" onClick={e => e.stopPropagation()}>{v.yt ? <iframe className="aspect-video w-full" src={`https://www.youtube-nocookie.com/embed/${v.yt}?autoplay=1`} title={v.name} allow="autoplay; encrypted-media" allowFullScreen /> : <div className="grid aspect-video place-items-center p-8 text-center text-slate-300">🎬 Dummy video. Add a YouTube video ID for “{v.name}” in src/data.js (VIDEOS → yt).</div>}<button onClick={() => setV(null)} className="w-full p-4 text-sm text-white hover:bg-white/10">Close</button></div></div>}</section> }

const Reviews = () => <section id="reviews" className="sec"><Head eye="Google Reviews" title="Loved by students" sub="Dummy reviews — replace with your real Google reviews." />
  <div className="mb-10 flex items-center justify-center gap-3"><b className="font-display text-5xl text-slate-900 dark:text-white">4.9</b><div><div className="text-xl text-amber-400">★★★★★</div><p className="text-xs text-slate-500">on Google (dummy)</p></div></div>
  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{REVIEWS.map(([n, t], i) => <Reveal key={n} delay={i * 80}><figure className="card h-full p-6"><div className="text-amber-400">★★★★★</div><blockquote className="mt-3 text-sm leading-7">{t}</blockquote><figcaption className="mt-5 flex items-center gap-3"><Avatar i={n[0]} s="h-9 w-9 text-sm" /><b className="text-sm text-slate-900 dark:text-white">{n}</b></figcaption></figure></Reveal>)}</div>
  <div className="mt-10 text-center"><a className="btn-g" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/${encodeURIComponent(SITE.name + ' ' + SITE.mapsQuery)}`}>Write a Google review ↗</a></div></section>

const FAQ = () => { const [o, setO] = useState(0); return <section id="faq" className="mx-auto max-w-3xl px-5 py-20"><Head eye="FAQ" title="Questions, answered" />
  {FAQS.map(([q, a], i) => <div key={q} className="card mb-3 !translate-y-0 overflow-hidden"><button aria-expanded={o === i} onClick={() => setO(o === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-slate-900 dark:text-white">{q}<span className={`text-brand transition ${o === i ? 'rotate-45' : ''}`}>＋</span></button><div className={`grid transition-all duration-500 ${o === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><p className="overflow-hidden px-5 text-sm leading-7"><span className="block pb-5">{a}</span></p></div></div>)}</section> }

/* ---------- forms ---------- */
function EnquiryForm({ toast }) { const [f, setF] = useState({ name: '', phone: '', course: COURSES[0].name, msg: '' }); const set = k => e => setF({ ...f, [k]: e.target.value })
  const text = `Enquiry – ${SITE.name}\nName: ${f.name}\nPhone: ${f.phone}\nCourse: ${f.course}\nMessage: ${f.msg}`
  const ok = () => f.name.trim() && f.phone.trim() ? true : (toast('Please enter your name and phone'), false)
  return <form onSubmit={e => e.preventDefault()} className="card space-y-4 p-7 !translate-y-0">
    <h3 className="text-2xl font-bold">Send an enquiry</h3>
    <label className="block text-sm">Full name<input className="inp mt-1" value={f.name} onChange={set('name')} required /></label>
    <label className="block text-sm">Phone / WhatsApp<input className="inp mt-1" type="tel" value={f.phone} onChange={set('phone')} required /></label>
    <label className="block text-sm">Course<select className="inp mt-1" value={f.course} onChange={set('course')}>{COURSES.map(c => <option key={c.id}>{c.name}</option>)}</select></label>
    <label className="block text-sm">Message<textarea rows="3" className="inp mt-1" value={f.msg} onChange={set('msg')} /></label>
    <div className="grid gap-2 sm:grid-cols-3"><button onClick={() => ok() && wa(text)} className="btn-p">WhatsApp</button><button onClick={() => ok() && mail(SITE.email, 'Course enquiry', text)} className="btn-g">Email</button><button onClick={() => ok() && copy(text, toast)} className="btn-g">Copy</button></div>
    <p className="text-xs text-slate-500">Nothing is stored on a server — your enquiry opens in WhatsApp/Email or is copied.</p></form> }
const Contact = ({ toast }) => <section id="contact" className="sec"><Head eye="Contact" title="Let's start your journey" />
  <div className="grid gap-8 lg:grid-cols-2"><Reveal><div className="space-y-4">{[['📞', 'Call', SITE.phone, 'tel:' + SITE.phone], ['💬', 'WhatsApp', SITE.phone, `https://wa.me/${SITE.wa}`], ['✉️', 'Email', SITE.email, 'mailto:' + SITE.email], ['📍', 'Address', SITE.address, `https://www.google.com/maps/search/${encodeURIComponent(SITE.mapsQuery)}`], ['🕘', 'Hours (dummy)', SITE.hours, null]].map(([i, l, v, h]) => { const C = h ? 'a' : 'div'; return <C key={l} href={h || undefined} target={h?.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="card flex items-center gap-4 p-5"><span className="text-2xl">{i}</span><span><b className="block text-slate-900 dark:text-white">{l}</b><span className="text-sm">{v}</span></span></C> })}
    <iframe title="Map" loading="lazy" className="h-56 w-full rounded-3xl border-0" src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`} /></div></Reveal><Reveal delay={150}><EnquiryForm toast={toast} /></Reveal></div></section>

/* ---------- pages ---------- */
function MernPage({ toast }) { return <main tabIndex={-1} className="outline-none">
  <section className="relative overflow-hidden bg-ink pb-20 pt-40 text-slate-300"><div className="absolute left-1/2 top-0 h-96 w-[600px] -translate-x-1/2 rounded-full bg-brand/30 blur-[130px]" /><div className="relative mx-auto max-w-4xl px-5 text-center">
    <span className="rounded-full bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300">Fully Online • Live • Beginner friendly</span>
    <h1 className="mt-6 text-5xl font-bold !text-white md:text-7xl">Master Web Development <span className="grad">MERN Stack</span></h1><p className="mx-auto mt-6 max-w-2xl text-lg">Learn to design, develop and deploy modern, responsive, dynamic web apps from scratch — this course is conducted entirely online.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-3"><button onClick={() => wa('Hello! I want to enrol in the MERN Stack (Online) course.')} className="btn-p">Enrol on WhatsApp</button><button onClick={() => mail(SITE.email, 'MERN Stack enrolment', 'Hello, I want to join the MERN Stack online course.')} className="btn-g !text-white">Email us</button></div></div></section>
  <section className="sec"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{MERN.modules.map(([n, d, i], k) => <Reveal key={n} delay={k * 80}><div className="card h-full p-7"><div className="text-4xl">{i}</div><h3 className="mt-3 text-xl font-bold">{n}</h3><p className="mt-2 text-sm">{d}</p></div></Reveal>)}</div>
    <div className="mt-20 grid gap-10 lg:grid-cols-2"><Reveal><h2 className="text-3xl font-bold">Course features</h2><ul className="mt-6 space-y-3">{MERN.features.map(f => <li key={f} className="flex gap-3"><span className="text-emerald-500">✔</span>{f}</li>)}</ul><h3 className="mt-10 text-2xl font-bold">Who can join?</h3><ul className="mt-4 space-y-3">{MERN.who.map(f => <li key={f} className="flex gap-3"><span className="text-brand">➜</span>{f}</li>)}</ul></Reveal>
      <Reveal delay={150}><h2 className="text-3xl font-bold">Learning roadmap <span className="text-xs font-normal text-slate-400">(dummy)</span></h2><ol className="mt-6 space-y-4 border-l-2 border-brand/30 pl-6">{MERN.roadmap.map(([m, t]) => <li key={m} className="relative"><i className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-gradient-to-br from-brand to-violet-500 ring-4 ring-white dark:ring-ink" /><b className="text-brand">{m}</b><p className="text-slate-900 dark:text-white">{t}</p></li>)}</ol></Reveal></div>
    <Reveal className="mt-20 rounded-3xl bg-gradient-to-r from-brand to-violet-600 p-10 text-center text-white"><h2 className="!text-white text-3xl font-bold">After this course you can…</h2><p className="mx-auto mt-3 max-w-2xl">Build full-stack applications, create professional websites, take freelance projects and start your career as a MERN Stack Developer.</p></Reveal>
    <div className="mx-auto mt-16 max-w-xl"><EnquiryForm toast={toast} /></div></section></main> }

function Careers({ toast }) { const [job, setJob] = useState(JOBS[0].id); const [f, setF] = useState({ name: '', phone: '', email: '', city: '', exp: '' }); const [file, setFile] = useState(null); const set = k => e => setF({ ...f, [k]: e.target.value }); const j = JOBS.find(x => x.id === job)
  const text = `Application: ${j.title}\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\nCity: ${f.city}\nAbout me: ${f.exp}\nResume: ${file ? file.name + ' (attached separately)' : 'will send separately'}`
  const ok = () => f.name.trim() && f.phone.trim() ? true : (toast('Please enter your name and phone'), false)
  return <main className="mx-auto max-w-6xl px-5 pb-24 pt-36"><Head eye="Careers" title="Grow with us" sub={JOB_TERMS} />
    <div className="grid gap-6 md:grid-cols-2">{JOBS.map(x => <button key={x.id} onClick={() => setJob(x.id)} className={`card p-7 text-left ${job === x.id ? '!border-brand ring-2 ring-brand/30' : ''}`}><span className="text-[10px] font-bold uppercase tracking-widest text-brand">{x.type}</span><h3 className="mt-2 text-2xl font-bold">{x.title}</h3><p className="mt-2 text-sm">{x.desc}</p><ul className="mt-3 space-y-1 text-sm">{x.points.map(p => <li key={p}>✔ {p}</li>)}</ul></button>)}</div>
    <form onSubmit={e => e.preventDefault()} className="card mx-auto mt-10 max-w-2xl space-y-4 p-7 !translate-y-0"><h3 className="text-2xl font-bold">Apply: {j.title}</h3>
      <div className="grid gap-4 sm:grid-cols-2"><input className="inp" placeholder="Full name *" value={f.name} onChange={set('name')} aria-label="Full name" /><input className="inp" placeholder="Phone *" type="tel" value={f.phone} onChange={set('phone')} aria-label="Phone" /><input className="inp" placeholder="Email" type="email" value={f.email} onChange={set('email')} aria-label="Email" /><input className="inp" placeholder="City" value={f.city} onChange={set('city')} aria-label="City" /></div>
      <textarea rows="3" className="inp" placeholder="Tell us about yourself" value={f.exp} onChange={set('exp')} aria-label="About you" />
      <label className="block rounded-2xl border-2 border-dashed border-slate-300 p-5 text-center text-sm dark:border-white/20">📎 {file ? file.name : 'Upload resume (PDF/DOC)'}<input type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={e => setFile(e.target.files[0] || null)} /></label>
      <p className="text-xs text-slate-500">Easy email workflow: click “Apply via Email”, then attach your resume to the draft that opens (browsers can't auto-attach files).</p>
      <div className="grid gap-2 sm:grid-cols-3"><button onClick={() => ok() && mail(SITE.careersEmail, 'Application – ' + j.title, text)} className="btn-p">Apply via Email</button><button onClick={() => ok() && wa(text)} className="btn-g">WhatsApp</button><button onClick={() => ok() && copy(text, toast)} className="btn-g">Copy</button></div></form></main> }
const NotFound = () => <main className="grid min-h-screen place-items-center text-center"><div><h1 className="text-6xl">404</h1><a href="#/" className="btn-p mt-6">Go home</a></div></main>

/* ---------- chatbot (rule-based, offline) ---------- */
function Chatbot() { const [open, setOpen] = useState(false), [msgs, setM] = useState([{ b: 1, t: BOT.greeting }]), [q, setQ] = useState(''), [typing, setT] = useState(false), end = useRef()
  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs, typing, open])
  const send = (t) => { t = t.trim(); if (!t) return; setM(m => [...m, { t }]); setQ(''); setT(true); setTimeout(() => { setM(m => [...m, { b: 1, t: reply(t) }]); setT(false) }, 600) }
  return <>{open && <div role="dialog" aria-label="Chat assistant" className="fixed bottom-24 right-4 z-[70] flex h-[32rem] max-h-[75vh] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl dark:bg-slate-900">
    <div className="flex items-center gap-3 bg-gradient-to-r from-brand to-violet-600 p-4 text-white"><span className="grid h-10 w-10 place-items-center rounded-full bg-white/20">🤖</span><div className="flex-1"><b>MIO Assistant</b><p className="text-xs opacity-80">Instant answers • offline</p></div><button aria-label="Close chat" onClick={() => setOpen(false)}>✕</button></div>
    <div className="flex-1 space-y-3 overflow-y-auto p-4">{msgs.map((m, i) => <div key={i} className={`flex ${m.b ? '' : 'justify-end'}`}><p className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm ${m.b ? 'bg-slate-100 text-slate-800 dark:bg-white/10 dark:text-slate-200' : 'bg-brand text-white'}`}>{m.t}</p></div>)}{typing && <p className="text-xs text-slate-400">typing…</p>}<div ref={end} /></div>
    <div className="flex flex-wrap gap-1.5 px-4 pb-2">{['MERN Stack', 'Admission', 'Careers', 'Contact'].map(s => <button key={s} onClick={() => send(s)} className="rounded-full border border-brand/40 px-3 py-1 text-xs text-brand hover:bg-brand/10">{s}</button>)}</div>
    <form onSubmit={e => { e.preventDefault(); send(q) }} className="flex gap-2 border-t border-slate-200 p-3 dark:border-white/10"><input className="inp !py-2" placeholder="Ask anything…" value={q} onChange={e => setQ(e.target.value)} aria-label="Message" /><button className="btn-p !px-4">➤</button></form></div>}
    <button aria-label="Open chat" onClick={() => setOpen(!open)} className="fixed bottom-5 right-4 z-[70] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand to-violet-600 text-2xl text-white shadow-2xl shadow-brand/40 transition hover:scale-110">{open ? '✕' : '💬'}</button></> }

const Footer = () => <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-black/30"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4"><div className="md:col-span-2"><b className="font-display text-2xl text-slate-900 dark:text-white">Modern Institute of Computers</b><p className="mt-3 max-w-sm text-sm">Shaping bright futures through quality education, expert guidance and a student-centric approach.</p></div>
  <div className="text-sm"><b className="text-slate-900 dark:text-white">Explore</b><ul className="mt-3 space-y-2">{[['Courses', 'courses'], ['Instructors', 'instructors'], ['Projects', 'projects'], ['FAQ', 'faq']].map(([n, id]) => <li key={id}><a href={'#' + id} onClick={goSec(id)} className="hover:text-brand">{n}</a></li>)}<li><a href="#/mern" className="hover:text-brand">MERN Stack</a></li><li><a href="#/careers" className="hover:text-brand">Careers</a></li></ul></div>
  <div className="text-sm"><b className="text-slate-900 dark:text-white">Contact</b><ul className="mt-3 space-y-2"><li>{SITE.address}</li><li><a href={'tel:' + SITE.phone} className="hover:text-brand">{SITE.phone}</a></li><li><a href={'mailto:' + SITE.email} className="hover:text-brand">{SITE.email}</a></li><li><a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-brand">Facebook ↗</a></li></ul></div></div>
  <p className="border-t border-slate-200 py-5 text-center text-xs dark:border-white/10">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p></footer>

/* ---------- app ---------- */
export default function App() {
  const [dark, setDark] = useState(() => !(localStorage.theme === 'light')); const [load, setLoad] = useState(true); const [toastMsg, toast] = useToast(); const route = useHash()
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); try { localStorage.theme = dark ? 'dark' : 'light' } catch { } }, [dark])
  useEffect(() => { const t = setTimeout(() => setLoad(false), 800); return () => clearTimeout(t) }, [])
  useEffect(() => { document.title = route.startsWith('/mern') ? 'MERN Stack Course (Online) | Modern Institute of Computers' : route.startsWith('/careers') ? 'Careers | Modern Institute of Computers' : 'Modern Institute of Computers | MERN Stack, ADCA, DCA – Anantnag' }, [route])
  let page
  if (route === '/' || route === '') page = <main tabIndex={-1} className="outline-none"><Hero /><About /><MernFeature /><Courses /><Instructors /><Projects /><Videos /><Reviews /><FAQ /><Contact toast={toast} /></main>
  else if (route === '/mern') page = <MernPage toast={toast} />
  else if (route === '/careers') page = <Careers toast={toast} />
  else if (route.startsWith('/instructor/')) page = <InstructorPage id={route.split('/')[2]} />
  else page = <NotFound />
  return <><div aria-hidden={!load} className={`fixed inset-0 z-[100] grid place-items-center bg-ink transition duration-700 ${load ? '' : 'pointer-events-none opacity-0'}`}><div className="text-center"><div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-brand/30 border-t-brand" /><p className="mt-5 font-display text-lg text-white">Modern Institute of Computers</p></div></div>
    <a href="#/" onClick={e=>{e.preventDefault();document.querySelector("main")?.focus()}} className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-white focus:p-3">Skip to content</a>
    <Nav dark={dark} setDark={setDark} />{page}<Footer /><Chatbot /><Toast msg={toastMsg} /></>
}
