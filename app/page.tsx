import business from '../data/business.json';

const locationUrl = business.website;
const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;
const address = '485 7th Ave, New York, NY 10018';

const details = [
  { label: 'Restaurant', value: business.businessType },
  { label: 'Area', value: 'Manhattan' },
  { label: 'Google rating', value: '4.6 from 2,240 reviews' },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Primary">
          <a className="brand" href="#top" aria-label="7th Street Burger home">
            <span className="brand-mark">7</span>
            <span>{business.name}</span>
          </a>
          <div className="nav-actions">
            <a href={phoneHref}>Call</a>
            <a href={locationUrl}>Location</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Fast food burger counter in Manhattan</p>
            <h1 id="hero-title">Burgers on 7th Ave, built for a Midtown stop.</h1>
            <p className="lede">
              7th Street Burger serves Manhattan from its 485 7th Ave location.
              Check the official location page before you go, or call the
              restaurant directly.
            </p>
            <div className="cta-row" aria-label="Contact actions">
              <a className="button primary" href={locationUrl}>
                View location
              </a>
              <a className="button secondary" href={phoneHref}>
                {business.phone}
              </a>
            </div>
          </div>

          <aside className="counter-board" aria-label="Location details">
            <div className="board-top">
              <span>485</span>
              <span>7th Ave</span>
            </div>
            <div className="board-lines">
              {details.map((detail) => (
                <div className="board-line" key={detail.label}>
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="address-band" aria-label="Address">
        <p>New York, NY</p>
        <h2>{address}</h2>
        <a href={locationUrl}>Open official location page</a>
      </section>

      <section className="split-section" aria-labelledby="visit-title">
        <div>
          <p className="section-kicker">Plan the stop</p>
          <h2 id="visit-title">Simple next steps for a busy block.</h2>
        </div>
        <div className="visit-list">
          <article>
            <span>01</span>
            <h3>Confirm the location</h3>
            <p>
              Use the official 7th Street Burger location page for current
              store details before heading to 7th Ave.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Call with a question</h3>
            <p>
              The listed phone number is available for direct questions about
              this Manhattan restaurant.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Find it in Midtown</h3>
            <p>
              The address places the restaurant on 7th Ave in New York, NY,
              close to the movement of central Manhattan.
            </p>
          </article>
        </div>
      </section>

      <section className="proof-strip" aria-label="Provided business details">
        <div>
          <strong>4.6</strong>
          <span>Google rating</span>
        </div>
        <div>
          <strong>2,240</strong>
          <span>Google reviews</span>
        </div>
        <div>
          <strong>Manhattan</strong>
          <span>Service area</span>
        </div>
      </section>

      <footer>
        <div>
          <strong>{business.name}</strong>
          <p>{address}</p>
        </div>
        <div className="footer-links">
          <a href={phoneHref}>{business.phone}</a>
          <a href={locationUrl}>Official website</a>
        </div>
      </footer>
    </main>
  );
}
