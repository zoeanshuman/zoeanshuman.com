'use client';

import {
  ArrowDownRight,
  CircleDot,
  ExternalLink,
  Film,
  Gauge,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Mic2,
  PawPrint,
  Plane,
  RefreshCcw,
  Search,
  Sparkles,
  Trophy,
  UtensilsCrossed,
  Wrench,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const communityProjects = [
  {
    number: '01',
    phase: 'notice',
    title: 'Through Their Eyes',
    meta: 'FILM · 2 MINUTES · MADE WITH TWO FRIENDS',
    summary:
      'A short film about looking at a street animal the way you look at your own pet.',
    reflection:
      'I wrote and directed it with two friends. This is where the trail started.',
    action: 'Film link needs updating',
    href: null,
    icon: Film,
  },
  {
    number: '02',
    phase: 'explain',
    title: 'Voice for the Voiceless',
    meta: 'WEBSITE · PYP EXHIBITION',
    summary:
      'What a stray needs in summer, who to call for a hurt bird, and real rescue stories.',
    reflection:
      'It helps people understand what to do—and lets them add a rescue story of their own.',
    action: 'Explore the guide',
    href: 'https://voiceofthevoiceless.lovable.app',
    icon: HeartHandshake,
  },
  {
    number: '03',
    phase: 'act',
    title: 'PetzPal',
    meta: 'APP · STILL GROWING',
    summary:
      'Find a vet or groomer and keep your pet’s important records together in one place.',
    reflection:
      'The list is still small, so I am adding more helpers. A useful thing does not have to be finished.',
    action: 'Try PetzPal',
    href: 'https://petzpal-connect.lovable.app',
    icon: PawPrint,
  },
];

const interests = [
  {
    title: 'Tennis',
    label: 'PLAY',
    text: 'I play tennis. One more ball? Always.',
    className: 'tennis',
    icon: CircleDot,
  },
  {
    title: 'Formula 1',
    label: 'LIGHTS OUT',
    text: 'I geek out over races, strategy, Lewis Hamilton and Ferrari.',
    className: 'racing',
    icon: Gauge,
  },
  {
    title: 'Cricket',
    label: 'MATCH DAY',
    text: 'Following Virat Kohli and the Indian women’s cricket team.',
    className: 'cricket',
    icon: Trophy,
  },
  {
    title: 'Travel',
    label: 'NEXT STOP',
    text: '15 countries and counting. I like seeing how big the world is.',
    className: 'travel',
    icon: Plane,
  },
  {
    title: 'Food',
    label: 'SAVE ROOM',
    text: 'What to order, what to cook, and the very serious question of dessert.',
    className: 'food',
    icon: UtensilsCrossed,
  },
];

function InterestDoodle({ type }: { type: string }) {
  if (type === 'tennis') {
    return (
      <svg className="card-doodle" viewBox="0 0 180 120" aria-hidden="true">
        <ellipse className="doodle-paper" cx="65" cy="49" rx="30" ry="41" />
        <path d="M48 18c26 18 38 45 33 69M38 31c25 9 40 31 49 50M78 85l28 29M86 78l28 29" />
        <circle className="doodle-accent" cx="133" cy="64" r="27" />
        <path d="M111 49c18 4 30 18 33 37M122 87c14-8 23-21 23-37" />
        <path
          className="doodle-pop"
          d="m140 20 5-12 5 12 12 5-12 5-5 12-5-12-12-5Z"
        />
        <text x="5" y="116">
          ONE MORE?
        </text>
      </svg>
    );
  }

  if (type === 'racing') {
    return (
      <svg className="card-doodle" viewBox="0 0 180 120" aria-hidden="true">
        <path d="M11 93c20-54 49-67 77-31 25 32 49 22 80-27M18 106c25-40 45-42 66-13 28 39 58 26 88-10" />
        <path
          className="doodle-pop"
          d="m74 20 6-15 6 15 15 6-15 6-6 15-6-15-15-6Z"
        />
        <path
          className="doodle-paper"
          d="m103 75 12-15h25l12 15 15 4v13H96V79Z"
        />
        <circle className="doodle-dark" cx="112" cy="93" r="9" />
        <circle className="doodle-dark" cx="151" cy="93" r="9" />
        <path d="M118 73h28M127 59l-5-9m-21 42h-8" />
        <text x="122" y="87">
          44
        </text>
      </svg>
    );
  }

  if (type === 'cricket') {
    return (
      <svg className="card-doodle" viewBox="0 0 180 120" aria-hidden="true">
        <path className="doodle-paper" d="m50 99 38-78 18 9-34 81Z" />
        <path d="M80 37l18 9m-30 18 18 9" />
        <circle className="doodle-accent" cx="139" cy="75" r="14" />
        <path d="M127 72c9-2 18 1 25 8M21 109h139M26 52v55m12-55v55m12-55v55M21 52h34" />
        <path
          className="doodle-pop"
          d="m136 22 4-10 4 10 10 4-10 4-4 10-4-10-10-4Z"
        />
        <text x="106" y="114">
          HOWZAT!
        </text>
      </svg>
    );
  }

  if (type === 'travel') {
    return (
      <svg className="card-doodle" viewBox="0 0 180 120" aria-hidden="true">
        <path
          className="doodle-route"
          d="M12 95c35-4 34-45 67-42 28 2 21 37 51 34 14-1 26-11 37-32"
        />
        <path
          className="doodle-paper"
          d="m143 28 25-9-10 23 3 19-10-14-18 4 13-12Z"
        />
        <circle className="doodle-accent" cx="21" cy="95" r="7" />
        <path d="m21 22 5 12 13 1-10 8 3 13-11-7-11 7 3-13-10-8 13-1Z" />
        <text x="54" y="116">
          NEXT STOP →
        </text>
      </svg>
    );
  }

  return (
    <svg className="card-doodle" viewBox="0 0 180 120" aria-hidden="true">
      <ellipse className="doodle-paper" cx="91" cy="72" rx="58" ry="34" />
      <ellipse className="doodle-accent" cx="91" cy="72" rx="39" ry="20" />
      <path d="M29 23v78M21 23v27c0 12 16 12 16 0V23M151 21c-14 10-14 36 0 43v37M71 67c10-12 27-12 38 0M76 79c9 8 22 8 31 0" />
      <path
        className="doodle-pop"
        d="m121 20 4-10 4 10 10 4-10 4-4 10-4-10-10-4Z"
      />
      <text x="66" y="116">
        YUM.
      </text>
    </svg>
  );
}

export default function Home() {
  const [doodly, setDoodly] = useState(true);
  const [petWalking, setPetWalking] = useState(false);

  useEffect(() => {
    const savedMood = window.localStorage.getItem('zoe-site-mood');
    if (savedMood === 'tidy') setDoodly(false);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.mood = doodly ? 'doodly' : 'tidy';
    window.localStorage.setItem('zoe-site-mood', doodly ? 'doodly' : 'tidy');
  }, [doodly]);

  function startPetWalk() {
    setPetWalking(false);
    window.setTimeout(() => setPetWalking(true), 10);
    window.setTimeout(() => setPetWalking(false), 3800);
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zoe Anshuman, home">
          <span className="brand-mark">ZA</span>
          <span>zoe / makes</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#process">How I make</a>
          <a href="#off-keyboard">Off keyboard</a>
        </nav>

        <label className="mood-switch">
          <span>{doodly ? 'doodly' : 'tidy'}</span>
          <input
            type="checkbox"
            role="switch"
            checked={doodly}
            onChange={(event) => setDoodly(event.target.checked)}
            aria-label="Switch between tidy and doodly styles"
          />
          <span className="switch-track" aria-hidden="true">
            <i />
          </span>
        </label>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles aria-hidden="true" /> student maker · apps, websites &amp;
            films
          </p>
          <h1>
            Hi, I&apos;m Zoe. I make <span>small things</span> that solve real
            problems.
          </h1>
          <p className="hero-intro">
            Most of them start with something that bothers me—street animals
            needing help, Hindi matras being tricky to hear, or good food being
            wasted.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">
              See what I&apos;ve made <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="text-link" href="#process">
              how I make things
            </a>
          </div>
        </div>

        <aside className="workbench-note" aria-label="Zoe's current project">
          <span className="tape" aria-hidden="true" />
          <p className="note-label">ON MY WORKBENCH</p>
          <PawPrint className="note-paw" aria-hidden="true" />
          <h2>PetzPal</h2>
          <p>
            I&apos;m adding more vets and groomers so it becomes more useful for
            more people and pets.
          </p>
          <a
            href="https://petzpal-connect.lovable.app"
            target="_blank"
            rel="noreferrer"
          >
            try the real thing <ExternalLink aria-hidden="true" />
          </a>
          <span className="scribble" aria-hidden="true">
            still growing!
          </span>
        </aside>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">01 · the main story</p>
          <h2>Community animals</h2>
          <p>Three projects. Two years. One problem I kept thinking about.</p>
        </div>

        <div className="project-trail">
          {communityProjects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="trail-card" key={project.number}>
                <div className="trail-stop" aria-hidden="true">
                  <Icon />
                  <span>{project.number}</span>
                </div>
                <div className="trail-copy">
                  <div className="project-meta">{project.meta}</div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p className="reflection">{project.reflection}</p>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.action} <ExternalLink aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="link-note">{project.action}</span>
                  )}
                </div>
                <div className="project-stamp">{project.phase}</div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="other-work section-pad"
        aria-labelledby="other-work-title"
      >
        <div className="section-heading compact-heading">
          <p className="eyebrow">02 · side quests</p>
          <h2 id="other-work-title">Two other things I made</h2>
        </div>

        <div className="side-quest-grid">
          <article className="side-card matra-card">
            <span className="card-index">A</span>
            <Mic2 aria-hidden="true" />
            <p className="project-meta">HINDI PRACTICE</p>
            <h3>Matra</h3>
            <p>
              Hear the sound, record yourself saying it back, then listen for
              the difference.
            </p>
            <blockquote>
              “Kids in my grade started using it on their own. That is my
              favourite thing that happened.”
            </blockquote>
            <a
              href="https://speak-matra-learn.lovable.app"
              target="_blank"
              rel="noreferrer"
            >
              Practise a matra <ExternalLink aria-hidden="true" />
            </a>
          </article>

          <article className="side-card kitchen-card">
            <span className="card-index">B</span>
            <UtensilsCrossed aria-hidden="true" />
            <p className="project-meta">FOOD-WASTE HELPER</p>
            <h3>The Kitchen Canvas</h3>
            <p>
              Take a photo of your fridge and discover what you can cook with
              what is already there. It skips anything you are allergic to.
            </p>
            <p className="big-note">less waste → more dinner</p>
            <a
              href="https://fridge-finder-wiz.lovable.app"
              target="_blank"
              rel="noreferrer"
            >
              Open the fridge finder <ExternalLink aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className="process-section section-pad" id="process">
        <div className="process-intro">
          <p className="eyebrow">03 · my extremely scientific method</p>
          <h2>How I make things</h2>
          <p className="mindset-line">
            Turning “what if?” into a full project.
          </p>
          <p>
            None of these are drawings of apps. They all actually work—and each
            one gets better when somebody tries it.
          </p>
        </div>

        <ol className="process-list">
          <li>
            <Search aria-hidden="true" />
            <span>01</span>
            <h3>Notice</h3>
            <p>Start with something that annoys me or could work better.</p>
          </li>
          <li>
            <Wrench aria-hidden="true" />
            <span>02</span>
            <h3>Build small</h3>
            <p>Make the simplest version that can answer one question.</p>
          </li>
          <li>
            <Lightbulb aria-hidden="true" />
            <span>03</span>
            <h3>Watch</h3>
            <p>Let someone use it. Notice where they pause or get stuck.</p>
          </li>
          <li>
            <RefreshCcw aria-hidden="true" />
            <span>04</span>
            <h3>Fix</h3>
            <p>Go back, change that part, and try again. Repeat forever-ish.</p>
          </li>
        </ol>
      </section>

      <section className="now-section section-pad" aria-labelledby="now-title">
        <div className="now-title-block">
          <span className="live-dot" aria-hidden="true" />
          <p className="eyebrow">04 · now</p>
          <h2 id="now-title">What&apos;s on my desk</h2>
        </div>
        <div className="now-notes">
          <article>
            <span>BUILDING</span>
            <h3>More useful helpers in PetzPal</h3>
          </article>
          <article>
            <span>LEARNING</span>
            <h3>Better ways to test what I make</h3>
          </article>
          <article>
            <span>WONDERING</span>
            <h3>What small problem should I try next?</h3>
          </article>
        </div>
      </section>

      <section className="interests-section section-pad" id="off-keyboard">
        <div className="section-heading">
          <p className="eyebrow">05 · off the keyboard</p>
          <h2>Things I can happily talk about for hours</h2>
        </div>

        <div className="interest-grid">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <article
                className={`interest-card ${interest.className}`}
                key={interest.title}
              >
                <div className="interest-topline">
                  <span>0{index + 1}</span>
                  <Icon aria-hidden="true" />
                </div>
                <p className="project-meta">{interest.label}</p>
                <h3>{interest.title}</h3>
                <p>{interest.text}</p>
                <InterestDoodle type={interest.className} />
                {interest.className === 'racing' && (
                  <div className="timing-strip" aria-hidden="true">
                    <span>44</span>
                    <i />
                    <i />
                    <i />
                  </div>
                )}
                {interest.className === 'travel' && (
                  <div className="travel-stamp" aria-hidden="true">
                    <Globe2 /> 15+
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <p className="usually-line">
          Usually building something, hitting a tennis ball, watching a race,
          following a match, planning the next adventure—or deciding what to eat
          after all of that.
        </p>
      </section>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">end of notebook (for now)</p>
          <h2>Thanks for looking around.</h2>
          <p>I&apos;ll keep making, testing, and adding things here.</p>
        </div>
        <div className="footer-mark">
          <span>Click the paw</span>
          <button
            type="button"
            className="paw-button"
            onClick={startPetWalk}
            aria-label="Launch a parade of Zoe's favourite things"
          >
            <PawPrint aria-hidden="true" />
          </button>
        </div>
        <div
          className={`passion-parade ${petWalking ? 'is-walking' : ''}`}
          aria-hidden="true"
        >
          <span className="parade-item parade-tennis">🎾</span>
          <span className="parade-item parade-racing">
            🏎️<b>44</b>
          </span>
          <span className="parade-item parade-cricket">🏏</span>
          <span className="parade-item parade-travel">✈️</span>
          <span className="parade-item parade-food">🍜</span>
          <span className="parade-item parade-pet">ᓚᘏᗢ</span>
        </div>
        <p className="sr-only" aria-live="polite">
          {petWalking
            ? 'A parade of Zoe’s favourite things is flying across the page.'
            : ''}
        </p>
      </footer>
    </main>
  );
}
