import { useState } from "react";

type IconName =
  | "play"
  | "pause"
  | "heart"
  | "search"
  | "bag"
  | "user"
  | "arrow"
  | "skip"
  | "volume"
  | "queue"
  | "expand"
  | "sparkle"
  | "check"
  | "menu"
  | "close";

function Icon({
  name,
  size = 18,
  fill = false,
}: {
  name: IconName;
  size?: number;
  fill?: boolean;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    play: <path d="m8 5 11 7-11 7V5Z" />,
    pause: (
      <>
        <path d="M9 5v14M15 5v14" />
      </>
    ),
    heart: (
      <path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 22l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    bag: (
      <>
        <path d="M5 8h14l-1 13H6L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    skip: (
      <>
        <path d="m5 6 9 6-9 6V6Z" />
        <path d="M18 6v12" />
      </>
    ),
    volume: (
      <>
        <path d="M11 5 6 9H3v6h3l5 4V5Z" />
        <path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12" />
      </>
    ),
    queue: (
      <>
        <path d="M4 7h12M4 12h12M4 17h8" />
        <path d="m17 15 4 3-4 3v-6Z" />
      </>
    ),
    expand: (
      <>
        <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
      </>
    ),
    sparkle: (
      <path d="m12 2 1.4 5.1L18 9l-4.6 1.9L12 16l-1.4-5.1L6 9l4.6-1.9L12 2ZM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" />
    ),
    check: <path d="m5 12 4 4L19 6" />,
    menu: (
      <>
        <path d="M4 8h16M4 16h16" />
      </>
    ),
    close: (
      <>
        <path d="m5 5 14 14M19 5 5 19" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const beats = [
  {
    title: "NIGHTSHIFT",
    producer: "Raji & Kairo",
    bpm: 142,
    key: "F# min",
    genre: "Trap",
    time: "2:48",
    price: 39,
    art: "art-violet",
  },
  {
    title: "SILK ROAD",
    producer: "Al-Djandali Ustas",
    bpm: 96,
    key: "C min",
    genre: "R&B",
    time: "3:12",
    price: 45,
    art: "art-silver",
  },
  {
    title: "LAGOS / 2AM",
    producer: "Vasiliy Kravchuk",
    bpm: 108,
    key: "A min",
    genre: "Afro",
    time: "2:36",
    price: 39,
    art: "art-green",
  },
  {
    title: "NO SIGNAL",
    producer: "Astra",
    bpm: 150,
    key: "D# min",
    genre: "Drill",
    time: "2:51",
    price: 49,
    art: "art-blue",
  },
];

const packs = [
  {
    name: "FUTURE DUST",
    type: "Drum Kit",
    count: "184 sounds",
    size: "1.2 GB",
    price: 49,
    art: "pack-dust",
  },
  {
    name: "GLASSHOUSE",
    type: "Sample Pack",
    count: "72 loops",
    size: "846 MB",
    price: 39,
    art: "pack-glass",
  },
  {
    name: "MIDNIGHT KEYS",
    type: "MIDI Pack",
    count: "95 files",
    size: "38 MB",
    price: 29,
    art: "pack-keys",
  },
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Raji Records home">
      <span className="logo-mark">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>RAJI</span>
    </a>
  );
}

function Waveform({
  active = false,
  compact = false,
}: {
  active?: boolean;
  compact?: boolean;
}) {
  const bars = [
    8, 16, 11, 24, 30, 17, 36, 22, 28, 13, 32, 20, 10, 25, 34, 18, 28, 14, 22,
    31, 17, 9, 24, 16, 29, 20, 12, 26, 18, 8,
  ];
  return (
    <div
      className={`waveform ${active ? "is-active" : ""} ${compact ? "compact" : ""}`}
    >
      {bars.map((height, index) => (
        <i
          key={index}
          style={{ height: compact ? Math.max(4, height * 0.55) : height }}
        />
      ))}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {action && (
        <a href="#beats" className="text-link">
          {action}
          <Icon name="arrow" />
        </a>
      )}
    </div>
  );
}

function App() {
  const [currentBeat, setCurrentBeat] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([1]);
  const [activeGenre, setActiveGenre] = useState("All beats");
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [notice, setNotice] = useState("");
  const [email, setEmail] = useState("");

  const playBeat = (index: number) => {
    if (currentBeat === index) setPlaying(!playing);
    else {
      setCurrentBeat(index);
      setPlaying(true);
    }
  };

  const addItem = (message: string) => {
    setCartCount((count) => count + 1);
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2400);
  };

  const toggleFavorite = (index: number) => {
    setFavorites((items) =>
      items.includes(index)
        ? items.filter((item) => item !== index)
        : [...items, index],
    );
  };

  return (
    <div className="app-shell" id="top">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header glass">
        <Logo />
        <nav className={menuOpen ? "nav-open" : ""}>
          <a href="#beats" onClick={() => setMenuOpen(false)}>
            Beats
          </a>
          <a href="#packs" onClick={() => setMenuOpen(false)}>
            Sound packs
          </a>
          <a href="#artists" onClick={() => setMenuOpen(false)}>
            Artists
          </a>
          <a href="#plugins" onClick={() => setMenuOpen(false)}>
            Plugins <small>Soon</small>
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </nav>
        <div className="header-actions">
          <button className="icon-button desktop-only" aria-label="Search">
            <Icon name="search" />
          </button>
          <button className="icon-button desktop-only" aria-label="Account">
            <Icon name="user" />
          </button>
          <button
            className="cart-button"
            aria-label={`Cart with ${cartCount} items`}
          >
            <Icon name="bag" />
            <span>{cartCount}</span>
          </button>
          <button
            className="icon-button menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="availability">
              <span /> Independent sound, globally heard
            </div>
            <h1>
              Sound Beyond
              <br />
              the <em>Ordinary.</em>
            </h1>
            <p>
              Distinctive beats, future-facing sound packs, and producer tools
              built for artists who refuse to blend in.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#beats">
                Explore Beats <Icon name="arrow" />
              </a>
              <a className="button secondary" href="#packs">
                Shop Sound Packs
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <strong>40K+</strong>
                <span>Creators worldwide</span>
              </div>
              <div>
                <strong>120M</strong>
                <span>Collective streams</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Instant licensing</span>
              </div>
            </div>
          </div>

          <div className="hero-art" aria-label="Featured release artwork">
            <div className="orb">
              <div className="orb-ring ring-one" />
              <div className="orb-ring ring-two" />
              <div className="orb-core">
                <span>R</span>
              </div>
            </div>
            <div className="floating-tag glass">
              <Icon name="sparkle" />
              <span>
                New sonic territory
                <br />
                <small>RAJI ORIGINALS · 2025</small>
              </span>
            </div>
            <div className="release-card glass">
              <div className="release-art art-violet">
                <span>
                  RAJI
                  <br />
                  <b>AFTER//DARK</b>
                </span>
              </div>
              <div className="release-info">
                <span className="eyebrow">Featured release</span>
                <h3>After Dark</h3>
                <p>Raji & Kairo</p>
                <Waveform active compact />
                <div className="release-controls">
                  <button
                    className="round-play"
                    onClick={() => setPlaying(!playing)}
                    aria-label={playing ? "Pause" : "Play"}
                  >
                    <Icon name={playing ? "pause" : "play"} fill={!playing} />
                  </button>
                  <span>01:18</span>
                  <i />
                  <span>02:48</span>
                  <button
                    className="mini-buy"
                    onClick={() => addItem("After Dark added to cart")}
                  >
                    $39
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-mark">
            <span>Scroll to explore</span>
            <i />
          </div>
        </section>

        <section className="content-section" id="beats">
          <SectionTitle
            eyebrow="Curated for you"
            title="Trending beats"
            action="Browse all beats"
          />
          <div className="catalog-toolbar glass">
            <div className="genre-tabs">
              {[
                "All beats",
                "Trap",
                "Hip-Hop",
                "R&B",
                "Drill",
                "Afro",
                "Experimental",
              ].map((genre) => (
                <button
                  key={genre}
                  className={activeGenre === genre ? "active" : ""}
                  onClick={() => setActiveGenre(genre)}
                >
                  {genre}
                </button>
              ))}
            </div>
            <button className="filter-button">
              <span>Filters</span>
              <i />
              <i />
              <i />
            </button>
          </div>
          <div className="beats-grid">
            {beats.map((beat, index) => {
              const active = currentBeat === index;
              return (
                <article
                  className={`beat-card ${active ? "playing" : ""}`}
                  key={beat.title}
                >
                  <div className={`beat-art ${beat.art}`}>
                    <span className="art-index">0{index + 1}</span>
                    <span className="art-word">{beat.title.split(" ")[0]}</span>
                    <button
                      className="card-play"
                      onClick={() => playBeat(index)}
                      aria-label={`${active && playing ? "Pause" : "Play"} ${beat.title}`}
                    >
                      <Icon
                        name={active && playing ? "pause" : "play"}
                        fill={!active || !playing}
                      />
                    </button>
                    {active && <span className="now-playing">Now playing</span>}
                  </div>
                  <div className="beat-card-body">
                    <div className="beat-title-row">
                      <div>
                        <h3>{beat.title}</h3>
                        <p>{beat.producer}</p>
                      </div>
                      <button
                        className={`heart-button ${favorites.includes(index) ? "favorited" : ""}`}
                        onClick={() => toggleFavorite(index)}
                        aria-label="Favorite"
                      >
                        <Icon name="heart" fill={favorites.includes(index)} />
                      </button>
                    </div>
                    <Waveform active={active && playing} compact />
                    <div className="beat-specs">
                      <span>{beat.bpm} BPM</span>
                      <span>{beat.key}</span>
                      <span>{beat.genre}</span>
                      <span>{beat.time}</span>
                    </div>
                    <div className="beat-purchase">
                      <p>
                        From <strong>${beat.price}</strong>
                      </p>
                      <button
                        onClick={() =>
                          addItem(`${beat.title} license added to cart`)
                        }
                      >
                        Choose license <Icon name="arrow" size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="editorial-release">
          <div className="editorial-image">
            <div className="image-label">
              <span>NEW RELEASE</span>
              <b>RR—025</b>
            </div>
          </div>
          <div className="editorial-copy">
            <span className="eyebrow">Latest release · Raji originals</span>
            <h2>
              Where silence
              <br />
              meets <em>pressure.</em>
            </h2>
            <p>
              Explore “Monolith,” a study in space, texture, and low-end
              architecture. Twelve compositions built to move between headphones
              and stadiums.
            </p>
            <div className="release-stats">
              <span>
                <b>12</b> compositions
              </span>
              <span>
                <b>24-bit</b> WAV stems
              </span>
              <span>
                <b>100%</b> royalty-free
              </span>
            </div>
            <button className="button primary" onClick={() => playBeat(3)}>
              {currentBeat === 3 && playing
                ? "Pause preview"
                : "Listen to release"}{" "}
              <Icon name="play" fill />
            </button>
          </div>
        </section>

        <section className="content-section" id="packs">
          <SectionTitle
            eyebrow="Build your sound"
            title="Featured sound packs"
            action="Explore all packs"
          />
          <div className="packs-grid">
            {packs.map((pack, index) => (
              <article className="pack-card glass" key={pack.name}>
                <div className={`pack-art ${pack.art}`}>
                  <span className="pack-brand">
                    RAJI
                    <br />
                    SOUND
                    <br />
                    SYSTEM
                  </span>
                  <span className="pack-number">0{index + 1}</span>
                  <button
                    className="preview-pill"
                    onClick={() => setNotice(`Previewing ${pack.name}`)}
                  >
                    <Icon name="play" size={14} fill /> Preview
                  </button>
                </div>
                <div className="pack-body">
                  <span className="eyebrow">{pack.type}</span>
                  <h3>{pack.name}</h3>
                  <div className="pack-meta">
                    <span>{pack.count}</span>
                    <span>{pack.size}</span>
                    <span>All DAWs</span>
                  </div>
                  <div className="pack-bottom">
                    <strong>${pack.price}</strong>
                    <button
                      onClick={() => addItem(`${pack.name} added to cart`)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="artists-section" id="artists">
          <div className="artists-copy">
            <span className="eyebrow">The collective</span>
            <h2>
              Artists shaping
              <br />
              what comes <em>next.</em>
            </h2>
            <p>
              Meet the producers, artists, and sonic architects behind the Raji
              sound.
            </p>
            <a href="#artists" className="text-link">
              Meet the collective <Icon name="arrow" />
            </a>
          </div>
          <div className="artist-cards">
            <article className="artist-card artist-main">
              <img
                src="https://images.unsplash.com/photo-1610716632424-4d45990bcd48?auto=format&fit=crop&w=1000&q=85"
                alt="Music producer working in a dark studio"
              />
              <div>
                <span>Producer · SAINT-PETERSBURG</span>
                <h3>ROLAN ABBASGULIEV</h3>
              </div>
            </article>
            <article className="artist-card artist-small">
              <img
                src="https://images.unsplash.com/photo-1604277598647-eadc8645952c?auto=format&fit=crop&w=800&q=85"
                alt="Artist performing under atmospheric stage lighting"
              />
              <div>
                <span>Artist · SAINT-PETERSBURG</span>
                <h3>AL-DJANDALI USTAS</h3>
              </div>
            </article>
          </div>
        </section>

        <section className="benefits content-section">
          <SectionTitle
            eyebrow="License with confidence"
            title="Your sound. Your rights."
          />
          <div className="benefit-grid">
            {[
              [
                "01",
                "Instant delivery",
                "Files and contracts arrive the moment your payment clears.",
              ],
              [
                "02",
                "Clear licensing",
                "Simple terms written for artists, not legal departments.",
              ],
              [
                "03",
                "Trackout stems",
                "Mix-ready WAV stems available with Premium and Unlimited.",
              ],
              [
                "04",
                "Built for release",
                "Monetize across DSPs, social, live shows, and broadcast.",
              ],
            ].map(([num, title, copy]) => (
              <article key={num}>
                <span>{num}</span>
                <div className="benefit-icon">
                  <Icon name="check" />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="plugin-section content-section" id="plugins">
          <div className="plugin-window glass">
            <div className="plugin-top">
              <span>
                <i />
                <i />
                <i />
              </span>
              <small>RAJI INSTRUMENTS / R-01</small>
              <b>•••</b>
            </div>
            <div className="plugin-interface">
              <aside>
                <span>R-01</span>
                <b>
                  VOID
                  <br />
                  ENGINE
                </b>
                <small>TEXTURE SYNTHESIS</small>
              </aside>
              <div className="plugin-screen">
                <div className="spectrum">
                  {[
                    12, 18, 24, 35, 42, 55, 38, 64, 76, 58, 46, 69, 40, 31, 22,
                    15,
                  ].map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="knobs">
                  {["SPACE", "GRAIN", "MOTION", "DEPTH"].map((knob, i) => (
                    <div key={knob}>
                      <span className={`knob k${i}`}>
                        <i />
                      </span>
                      <small>{knob}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="plugin-copy">
            <span className="eyebrow">Raji instruments · Coming soon</span>
            <h2>
              Tools for the
              <br />
              <em>next frequency.</em>
            </h2>
            <p>
              We’re building a new generation of music tools—expressive,
              immediate, and designed to inspire accidents worth keeping.
            </p>
            <form
              className="waitlist"
              onSubmit={(e) => {
                e.preventDefault();
                setNotice("You’re on the R-01 early access list");
                setEmail("");
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button type="submit">
                Join waitlist <Icon name="arrow" />
              </button>
            </form>
            <small>Early access. Product news. No noise.</small>
          </div>
        </section>

        <section className="newsletter" id="about">
          <span className="eyebrow">Stay in the loop</span>
          <h2>New sounds, first.</h2>
          <p>
            Weekly drops, artist stories, and tools to push your sound forward.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setNotice("Welcome to the Raji frequency");
              setEmail("");
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Newsletter email"
            />
            <button type="submit">
              Subscribe <Icon name="arrow" />
            </button>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div>
            <Logo />
            <p>
              Independent sound for
              <br />
              independent minds.
            </p>
          </div>
          <div className="footer-links">
            <span>Explore</span>
            <a href="#beats">Beats</a>
            <a href="#packs">Sound packs</a>
            <a href="#artists">Artists</a>
            <a href="#plugins">Plugins</a>
          </div>
          <div className="footer-links">
            <span>Company</span>
            <a href="#about">About</a>
            <a href="#about">Licensing</a>
            <a href="#about">Contact</a>
            <a href="#about">FAQ</a>
          </div>
          <div className="footer-links">
            <span>Follow</span>
            <a href="#instagram">Instagram</a>
            <a href="#youtube">YouTube</a>
            <a href="#tiktok">TikTok</a>
            <a href="#soundcloud">SoundCloud</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Raji Records</span>
          <span>Privacy · Terms · Cookies</span>
          <span>Designed for the future of sound</span>
        </div>
      </footer>

      <div className={`player glass ${expanded ? "player-hidden" : ""}`}>
        <button className="player-track" onClick={() => setExpanded(true)}>
          <span className={`player-art ${beats[currentBeat].art}`}>R</span>
          <span>
            <strong>{beats[currentBeat].title}</strong>
            <small>{beats[currentBeat].producer}</small>
          </span>
        </button>
        <div className="player-controls">
          <button
            aria-label="Previous"
            onClick={() =>
              setCurrentBeat((currentBeat + beats.length - 1) % beats.length)
            }
          >
            <Icon name="skip" />
          </button>
          <button
            className="main-play"
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? "Pause" : "Play"}
          >
            <Icon name={playing ? "pause" : "play"} fill={!playing} />
          </button>
          <button
            aria-label="Next"
            onClick={() => setCurrentBeat((currentBeat + 1) % beats.length)}
          >
            <Icon name="skip" />
          </button>
        </div>
        <div className="player-progress">
          <span>1:18</span>
          <Waveform active={playing} compact />
          <span>{beats[currentBeat].time}</span>
        </div>
        <div className="player-extras">
          <button aria-label="Volume">
            <Icon name="volume" />
          </button>
          <div className="volume-line">
            <i />
          </div>
          <button aria-label="Favorite">
            <Icon name="heart" fill={favorites.includes(currentBeat)} />
          </button>
          <button aria-label="Queue">
            <Icon name="queue" />
          </button>
          <button aria-label="Expand player" onClick={() => setExpanded(true)}>
            <Icon name="expand" />
          </button>
          <button
            className="buy-button"
            onClick={() => addItem(`${beats[currentBeat].title} added to cart`)}
          >
            Buy <span>from ${beats[currentBeat].price}</span>
          </button>
        </div>
      </div>

      {expanded && (
        <div className={`expanded-player ${beats[currentBeat].art}`}>
          <button className="close-player" onClick={() => setExpanded(false)}>
            <Icon name="close" /> Close player
          </button>
          <div className="expanded-inner">
            <div className={`expanded-art ${beats[currentBeat].art}`}>
              <span>RAJI</span>
              <strong>{beats[currentBeat].title}</strong>
              <small>RR—00{currentBeat + 1}</small>
            </div>
            <div className="expanded-content">
              <span className="eyebrow">Now playing</span>
              <h2>{beats[currentBeat].title}</h2>
              <p>{beats[currentBeat].producer}</p>
              <div className="expanded-wave">
                <Waveform active={playing} />
                <div>
                  <span>01:18</span>
                  <span>{beats[currentBeat].time}</span>
                </div>
              </div>
              <div className="expanded-actions">
                <button
                  onClick={() =>
                    setCurrentBeat(
                      (currentBeat + beats.length - 1) % beats.length,
                    )
                  }
                >
                  <Icon name="skip" />
                </button>
                <button
                  className="giant-play"
                  onClick={() => setPlaying(!playing)}
                >
                  <Icon
                    name={playing ? "pause" : "play"}
                    size={28}
                    fill={!playing}
                  />
                </button>
                <button
                  onClick={() =>
                    setCurrentBeat((currentBeat + 1) % beats.length)
                  }
                >
                  <Icon name="skip" />
                </button>
              </div>
              <div className="expanded-specs">
                <span>
                  <small>BPM</small>
                  {beats[currentBeat].bpm}
                </span>
                <span>
                  <small>KEY</small>
                  {beats[currentBeat].key}
                </span>
                <span>
                  <small>GENRE</small>
                  {beats[currentBeat].genre}
                </span>
              </div>
              <button
                className="button primary full"
                onClick={() =>
                  addItem(`${beats[currentBeat].title} license added to cart`)
                }
              >
                Choose license — from ${beats[currentBeat].price}{" "}
                <Icon name="arrow" />
              </button>
            </div>
          </div>
        </div>
      )}

      {notice && (
        <div className="toast glass">
          <Icon name="check" />
          {notice}
        </div>
      )}
    </div>
  );
}

export default App;
