"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const activities = [
  {
    number: "01",
    tag: "PLAY",
    title: "Spill det du liker",
    text: "Kom alene eller ta med gjengen. Her er det plass til både casual gaming, konkurranse og nye favoritter.",
    color: "cyan",
  },
  {
    number: "02",
    tag: "LEARN",
    title: "Skru på nysgjerrigheten",
    text: "Bli med på workshops og utforsk nettverk, servere, moderne infrastruktur og alt som skjer bak skjermen.",
    color: "pink",
  },
  {
    number: "03",
    tag: "CONNECT",
    title: "Finn folka dine",
    text: "GameVille er et trygt, sosialt miljø der gaminginteressert ungdom kan møtes og bygge fellesskap.",
    color: "purple",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main>
      <a className="skip-link" href="#innhold">Hopp til innhold</a>

      <nav className="nav" aria-label="Hovedmeny">
        <a className="brand" href="#top" aria-label="GameVille – til toppen">
          <Image src="/brands/gameville-icon.png" alt="" width={54} height={54} priority />
          <span>GAME<span>VILLE</span></span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
          <b className="sr-only">Åpne meny</b>
        </button>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="nav-links">
          <a href="#om" onClick={() => setMenuOpen(false)}>Om prosjektet</a>
          <a href="#opplevelsen" onClick={() => setMenuOpen(false)}>Opplevelsen</a>
          <a href="#partnere" onClick={() => setMenuOpen(false)}>Samarbeidet</a>
          <a className="nav-status" href="#arrangementer" onClick={() => setMenuOpen(false)}>
            <i /> Events snart
          </a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="noise" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="crosshair crosshair-one" aria-hidden="true" />
        <div className="crosshair crosshair-two" aria-hidden="true" />

        <div className="hero-copy">
          <div className="eyebrow"><span>●</span> ÅPEN MØTEPLASS</div>
          <h1>
            <span className="line line-white">SPILL</span>
            <span className="line line-stroke" data-text="SAMMEN.">SAMMEN.</span>
            <span className="line line-gradient">HØR TIL.</span>
          </h1>
          <p className="hero-intro">
            Gratis gaming, heftige rigger og et fellesskap med plass til deg. Ingen paywall. Ingen krav. Bare møt opp.
          </p>
          <div className="hero-actions">
            <a className="cta cta-primary" href="#om"><span>ENTER GAMEVILLE</span><b>↘</b></a>
            <a className="text-link" href="#opplevelsen">Se hva som skjer <span>→</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="GameVille-logoen">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="logo-glitch logo-glitch-cyan" aria-hidden="true">
            <Image src="/brands/gameville-icon.png" alt="" width={620} height={652} priority />
          </div>
          <div className="logo-glitch logo-glitch-pink" aria-hidden="true">
            <Image src="/brands/gameville-icon.png" alt="" width={620} height={652} priority />
          </div>
          <Image className="hero-logo" src="/brands/gameville-icon.png" alt="GameVille" width={620} height={652} priority />
          <div className="player-tag"><i /> PLAYER 01 / READY</div>
          <div className="coordinates">GAMEVILLE<br />PROJECT_01</div>
        </div>

        <div className="scroll-cue" aria-hidden="true"><span>SCROLL TO EXPLORE</span><i /></div>
      </header>

      <div className="ticker" aria-label="Hva GameVille tilbyr">
        <div className="ticker-track">
          <span>GRATIS Å DELTA</span><b>✦</b><span>GAMING-PC-ER</span><b>✦</b><span>WORKSHOPS</span><b>✦</b><span>LAN-PARTY</span><b>✦</b><span>MAT + DRIKKE</span><b>✦</b><span>FELLESSKAP</span><b>✦</b>
          <span>GRATIS Å DELTA</span><b>✦</b><span>GAMING-PC-ER</span><b>✦</b><span>WORKSHOPS</span><b>✦</b><span>LAN-PARTY</span><b>✦</b><span>MAT + DRIKKE</span><b>✦</b><span>FELLESSKAP</span><b>✦</b>
        </div>
      </div>

      <section className="manifesto" id="innhold">
        <div className="section-index">[ 001 / OM ]</div>
        <div className="manifesto-copy" id="om">
          <p className="kicker">ET STED Å LOGGE PÅ — IRL.</p>
          <h2>GAMING SKAL<br />IKKE HA EN<br /><em>INNGANGSBILLETT.</em></h2>
          <div className="manifesto-bottom">
            <p>GameVille er en åpen møteplass for data- og gaminginteressert ungdom. Et sted for åpne kvelder, workshops, store LAN og ekte vennskap.</p>
            <p>Økonomi skal aldri være en barriere. Derfor er arrangementene våre gratis — med utstyr, mat og drikke inkludert.</p>
          </div>
        </div>
        <div className="sticker sticker-free" aria-hidden="true"><strong>0,-</strong><span>ALLTID<br />GRATIS</span></div>
        <div className="pixel-decoration" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      </section>

      <section className="experience" id="opplevelsen">
        <div className="experience-heading">
          <div className="section-index">[ 002 / OPPLEVELSEN ]</div>
          <p>Ikke bare en skjerm.<br />En hel verden rundt den.</p>
        </div>
        <div className="activity-list">
          {activities.map((activity) => (
            <article className={`activity activity-${activity.color}`} key={activity.number}>
              <div className="activity-number">{activity.number}</div>
              <div className="activity-main">
                <span>{activity.tag}</span>
                <h3>{activity.title}</h3>
                <p>{activity.text}</p>
              </div>
              <div className="activity-arrow" aria-hidden="true">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section className="rig-section">
        <div className="rig-scan" aria-hidden="true" />
        <div className="rig-copy">
          <div className="eyebrow"><span>●</span> HARDWARE / INFRASTRUKTUR</div>
          <h2>GEAR<br />UP.</h2>
          <p>Har du ikke gaming-PC? Null stress. Hos oss kan du låne toppmoderne, fullspekkede gaming-rigger — klare for neste runde.</p>
          <ul>
            <li><span>01</span> Moderne gaming-PC-er</li>
            <li><span>02</span> Rask fiber og solid nettverk</li>
            <li><span>03</span> Servere du kan lære og bygge med</li>
          </ul>
        </div>
        <div className="rig-display" aria-hidden="true">
          <div className="screen-frame">
            <div className="screen-top"><span>GAMEVILLE // RIG_01</span><i>ONLINE</i></div>
            <div className="screen-content">
              <div className="big-g">G</div>
              <div className="reticle"><i /><i /><i /></div>
              <div className="spec spec-one">PING<br /><strong>04 MS</strong></div>
              <div className="spec spec-two">STATUS<br /><strong>READY</strong></div>
              <div className="code-lines">01100111<br />01110110<br />00100001</div>
            </div>
            <div className="screen-bottom"><span>FULLSPEKKA</span><span>TOPP MODERNE</span><span>DIN FOR KVELDEN</span></div>
          </div>
        </div>
      </section>

      <section className="events" id="arrangementer">
        <div className="events-top">
          <div className="section-index">[ 003 / EVENTS ]</div>
          <span className="coming-pill"><i /> SYNC KOMMER</span>
        </div>
        <div className="events-copy">
          <h2>NESTE<br /><span>LEVEL</span><br />LASTER...</h2>
          <div className="loading-bar"><span /></div>
        </div>
        <div className="events-info">
          <p>Vi kobler snart på eventkalenderen fra LANhub. Da finner du åpne kvelder, workshops og de store LAN-helgene her.</p>
          <div className="lanhub-source">
            <div>
              <span>EVENT SOURCE</span>
              <b><i /> KOBLING KOMMER SNART</b>
            </div>
            <Image src="/brands/lanhubben.png" alt="LAN-Hubben – powered by Haugesund LANkultur" width={440} height={113} />
          </div>
          <div className="event-stats">
            <div><strong>2×</strong><span>STORE LAN<br />HVERT ÅR</span></div>
            <div><strong>0,-</strong><span>FOR DELTAKELSE,<br />MAT OG DRIKKE</span></div>
          </div>
        </div>
      </section>

      <section className="partners" id="partnere">
        <div className="section-index">[ 004 / SAMARBEIDET ]</div>
        <div className="partners-heading">
          <h2>BYGGET<br />SAMMEN.</h2>
          <p>GameVille skjer fordi lokale krefter drar i samme retning: mot flere åpne dører, flere opplevelser og færre barrierer.</p>
        </div>

        <div className="partner-grid">
          <a className="partner-card partner-fh" href="https://forandringshuset.no/forandringshuset-karmoy" target="_blank" rel="noreferrer" aria-label="Besøk Forandringshuset Karmøy">
            <span className="partner-label">PROSJEKTPARTNER / 01</span>
            <div className="fh-logo-wrap">
              <Image src="/brands/forandringshuset.png" alt="Forandringshuset KFUK-KFUM" width={750} height={159} />
            </div>
            <p>Et inkluderende sted der unge kan delta, skape og utvikle seg på egne premisser.</p>
            <i aria-hidden="true">BESØK ↗</i>
          </a>

          <a className="partner-card partner-lan" href="https://lankultur.no/" target="_blank" rel="noreferrer" aria-label="Besøk LANkultur">
            <span className="partner-label">PROSJEKTPARTNER / 02</span>
            <Image src="/brands/lankultur.png" alt="LANkultur Haugesund" width={300} height={362} />
            <p>Gamingkompetanse, LAN-erfaring og teknologi — med erfaring fra store og små gamingarrangementer.</p>
            <i aria-hidden="true">BESØK ↗</i>
          </a>

          <a className="partner-card partner-ungevil" href="https://ungevil.no/" target="_blank" rel="noreferrer" aria-label="Besøk Unge Vil">
            <span className="partner-label">PROSJEKTPARTNER / 03</span>
            <Image src="/brands/unge-vil.png" alt="Unge Vil" width={508} height={75} />
            <p>Skaper muligheter sammen med unge — og bygger fellesskap der ideer blir til virkelighet.</p>
            <i aria-hidden="true">BESØK ↗</i>
          </a>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-grid" aria-hidden="true" />
        <p>READY PLAYER?</p>
        <h2>DU HAR<br />EN PLASS<br /><span>HER.</span></h2>
        <a className="cta cta-primary" href="#top"><span>BACK TO START</span><b>↑</b></a>
        <Image src="/brands/gameville-icon.png" alt="" width={430} height={452} aria-hidden="true" />
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <Image src="/brands/gameville-icon.png" alt="" width={50} height={50} />
          <span>GAME<span>VILLE</span></span>
        </a>
        <p>EN ÅPEN MØTEPLASS FOR DATA- OG GAMINGINTERESSERT UNGDOM.</p>
        <div><span>© {new Date().getFullYear()} GAMEVILLE</span><a href="#top">TIL TOPP ↑</a></div>
      </footer>
    </main>
  );
}
