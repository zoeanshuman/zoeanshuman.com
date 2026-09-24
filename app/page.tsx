'use client';

import { ArrowUpRight, Plane, Sparkles, UtensilsCrossed } from 'lucide-react';
import { useEffect, useState } from 'react';

const cricketSlides = [
  {
    src: '/photos/cricket-virat.jpg',
    alt: 'Virat Kohli raising his bat for India',
  },
  {
    src: '/photos/cricket-women.jpg',
    alt: "India's women's cricket team celebrating with the World Cup trophy",
  },
];

const projects = [
  {
    kicker: 'say it back',
    title: 'Matra',
    copy: 'Hear a Hindi matra, record yourself, and listen for the difference. Kids in my grade started using it on their own—which is still my favourite review.',
    href: 'https://speak-matra-learn.lovable.app',
    cta: 'Practise a matra',
    className: 'project-matra',
    glyph: 'अ आ',
  },
  {
    kicker: 'use what you have',
    title: 'The Kitchen Canvas',
    copy: 'Take a picture of your fridge and find something to cook with what is already there, minus anything you are allergic to.',
    href: 'https://fridge-finder-wiz.lovable.app',
    cta: 'Raid the fridge',
    className: 'project-kitchen',
    glyph: '🍋',
  },
];

export default function Home() {
  const [chaosRunning, setChaosRunning] = useState(false);
  const [cricketPhotoIndex, setCricketPhotoIndex] = useState(0);

  useEffect(() => {
    const cricketTimer = window.setInterval(() => {
      setCricketPhotoIndex((current) =>
        (current + 1) % cricketSlides.length,
      );
    }, 5200);

    return () => {
      window.clearInterval(cricketTimer);
    };
  }, []);

  function startPhotoChaos() {
    setChaosRunning(false);
    window.setTimeout(() => setChaosRunning(true), 10);
    window.setTimeout(() => setChaosRunning(false), 4200);
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zoë Anshuman, home">
          Zoë Anshuman
        </a>
        <nav aria-label="Main navigation">
          <a href="#film">Film</a>
          <a href="#work">Things I made</a>
          <a href="#obsessions">Things I love</a>
        </nav>
        <a className="header-tag" href="#about">
          hi, it&apos;s me →
        </a>
      </header>

      <section className="film-hero" id="top">
        <div className="film-title" id="film">
          <p>HI, I&apos;M ZOË — STUDENT, MAKER, VERY CURIOUS PERSON</p>
          <h1>
            WATCH MY
            <br />
            SHORT FILM!
          </h1>
          <span>↓ it&apos;s only two minutes ↓</span>
        </div>

        <div className="film-frame">
          <iframe
            src="https://www.youtube.com/embed/eHAJEwHEBzE?rel=0"
            title="Through Their Eyes — a short film by Zoë Anshuman"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="film-caption">
          <div>
            <p>THROUGH THEIR EYES</p>
            <h2>A street animal is someone&apos;s almost-pet.</h2>
          </div>
          <p>
            I wrote and directed this with two friends a year ago. It started
            me making things for community animals.
          </p>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>FILMS</span>
          <i>✦</i>
          <span>APPS</span>
          <i>✦</i>
          <span>WEBSITES</span>
          <i>✦</i>
          <span>QUESTIONS</span>
          <i>✦</i>
          <span>FILMS</span>
          <i>✦</i>
          <span>APPS</span>
          <i>✦</i>
          <span>WEBSITES</span>
          <i>✦</i>
          <span>QUESTIONS</span>
          <i>✦</i>
        </div>
      </div>

      <section className="about-section" id="about">
        <div className="about-photo">
          <img
            className="is-active"
            src="/photos/santorini.jpg"
            alt="Zoë sitting in the sunshine overlooking the sea in Santorini"
          />
          <span className="photo-tag tag-one">15 countries &amp; counting</span>
          <span className="photo-tag tag-two">professional question asker</span>
        </div>
        <div className="about-copy">
          <p className="micro-label">SO, WHO AM I?</p>
          <h2>
            I notice things.
            <br />
            Then I make things.
          </h2>
          <p>
            Usually it begins with a tiny question that refuses to leave me
            alone. Could this be easier? Kinder? Less wasteful? More fun?
          </p>
          <div className="hello-bubble">hi! 👋</div>
        </div>
      </section>

      <section className="animal-story" aria-labelledby="animal-story-title">
        <div className="animal-story-heading">
          <p>THE FILM DIDN&apos;T END AT THE CREDITS</p>
          <h2 id="animal-story-title">I kept going.</h2>
          <p>
            The film made me want to keep helping community animals, so I
            started coding tools that help people understand what to do—and
            act.
          </p>
        </div>

        <div className="animal-path">
          <article className="animal-card voice-card">
            <div>
              <span>01 · UNDERSTAND</span>
              <b aria-hidden="true">🐾</b>
            </div>
            <h3>Voice for the Voiceless</h3>
            <p>
              What a community animal needs, who to call, and rescue stories
              people can add themselves.
            </p>
            <a
              href="https://voiceofthevoiceless.lovable.app"
              target="_blank"
              rel="noreferrer"
            >
              Explore the guide <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
          <span className="path-arrow" aria-hidden="true">
            →
          </span>
          <article className="animal-card petzpal-card">
            <div>
              <span>02 · ACT</span>
              <b aria-hidden="true">✦</b>
            </div>
            <h3>PetzPal</h3>
            <p>
              Find a vet or groomer and keep a pet&apos;s important records in
              one place. Still growing, on purpose.
            </p>
            <a
              href="https://petzpal-connect.lovable.app"
              target="_blank"
              rel="noreferrer"
            >
              Try PetzPal <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className="mindset-banner" aria-label="Zoë's making mindset">
        <p>MY FAVOURITE KIND OF TROUBLE:</p>
        <h2>
          TURNING <span>“WHAT IF?”</span>
          <br /> INTO A FULL PROJECT.
        </h2>
        <div className="mindset-sticker">
          <Sparkles aria-hidden="true" /> try it, test it, change it
        </div>
      </section>

      <section className="projects-section" id="work">
        <div className="big-heading">
          <p>THINGS I MADE</p>
          <h2>Because I couldn&apos;t stop thinking about them.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.className}`}
              key={project.title}
            >
              <div className="project-topline">
                <span>{project.kicker}</span>
                <b aria-hidden="true">{project.glyph}</b>
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.cta} <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="obsessions-section" id="obsessions">
        <div className="obsessions-intro">
          <p>THINGS I CAN HAPPILY TALK ABOUT FOR HOURS</p>
          <h2>My camera roll explains it better.</h2>
        </div>

        <div className="photo-wall">
          <article className="travel-main travel-stamp-card">
            <Plane aria-hidden="true" />
            <p>15</p>
            <h3>countries &amp; counting</h3>
            <div className="travel-stamps" aria-hidden="true">
              <span>PASSPORT READY</span>
              <span>NEXT?</span>
              <span>✦ GO ✦</span>
            </div>
          </article>

          <article className="photo-card f1-card">
            <img
              src="/photos/f1-ferrari.jpg"
              alt="Lewis Hamilton driving the Ferrari Formula 1 car"
              loading="lazy"
            />
            <div>
              <span>FORMULA 1</span>
              <b>Lewis + Ferrari + strategy rabbit holes</b>
            </div>
            <i className="number-sticker">44</i>
          </article>

          <article className="tennis-break">
            <span className="tennis-ball" aria-hidden="true" />
            <p>ONE MORE BALL?</p>
            <h3>Always.</h3>
            <small>TENNIS / PLAY / REPEAT</small>
          </article>

          <article className="photo-card cricket-card">
            {cricketSlides.map((slide, index) => (
              <img
                className={index === cricketPhotoIndex ? 'is-active' : ''}
                src={slide.src}
                alt={slide.alt}
                aria-hidden={index !== cricketPhotoIndex}
                loading="lazy"
                key={slide.src}
              />
            ))}
            <div>
              <span>CRICKET</span>
              <b>Virat + the Indian women&apos;s team</b>
            </div>
            <a
              className={`photo-credit ${cricketPhotoIndex === 1 ? 'is-visible' : ''}`}
              href="https://commons.wikimedia.org/wiki/File:Team_india.jpg"
              target="_blank"
              rel="noreferrer"
            >
              TamilSibi · CC0
            </a>
          </article>

          <div className="food-cluster">
            <div className="food-title">
              <span>VERY SERIOUS RESEARCH</span>
              <h3>What should we eat?</h3>
            </div>
            <UtensilsCrossed className="food-icon" aria-hidden="true" />
            <div className="food-menu" aria-label="Favourite foods">
              <span>NOODLES</span>
              <span>BURGERS</span>
              <span>DESSERT FIRST?</span>
              <span>YES.</span>
            </div>
            <span className="yum-sticker">YUM × ∞</span>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <p>This site will keep changing because I will.</p>
        <h2>
          More questions.
          <br />
          More experiments.
          <br />
          More snacks.
        </h2>
        <div className="closing-actions">
          <button
            type="button"
            className="chaos-button"
            onClick={startPhotoChaos}
          >
            <Sparkles aria-hidden="true" />
            <span>PRESS FOR ZOË CHAOS</span>
          </button>
        </div>
      </section>

      <footer className="site-footer">
        <span>ZOË ANSHUMAN</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>

      <div
        className={`photo-chaos ${chaosRunning ? 'is-running' : ''}`}
        aria-hidden="true"
      >
        <span className="chaos-card chaos-one">WHAT IF?</span>
        <span className="chaos-card chaos-two">15 COUNTRIES!</span>
        <span className="chaos-card chaos-three">ONE MORE BALL?</span>
        <span className="chaos-card chaos-four">44!</span>
        <span className="chaos-card chaos-five">YUM × ∞</span>
      </div>

      <p className="sr-only" aria-live="polite">
        {chaosRunning ? 'Zoë’s idea chaos is floating across the page.' : ''}
      </p>
    </main>
  );
}
