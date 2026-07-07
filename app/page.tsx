import business from '../data/business.json';

const address = '485 7th Ave, New York, NY 10018';
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;

const facts = [
  { label: 'Restaurant', value: business.businessType },
  { label: 'Neighborhood', value: 'Manhattan' },
  { label: 'Google rating', value: '4.6 from 2,240 reviews' },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="7th Street Burger home">
            <span className="brandMark">7</span>
            <span>7th Street Burger</span>
          </a>
          <div className="navActions">
            <a href={phoneHref}>Call</a>
            <a href={business.website}>Location page</a>
          </div>
        </nav>

        <div className="heroGrid" id="top">
          <div className="heroCopy">
            <p className="eyebrow">Hamburger restaurant in Manhattan</p>
            <h1 id="hero-title">A fast burger stop on 7th Ave.</h1>
            <p className="lede">
              7th Street Burger at 485 7th Ave keeps the decision simple: a direct
              Midtown counter for burgers when you are moving through Manhattan.
            </p>

            <div className="ctaRow" aria-label="Main actions">
              <a className="button primary" href={business.website}>
                View location details
              </a>
              <a className="button secondary" href={phoneHref}>
                {business.phone}
              </a>
            </div>
          </div>

          <div className="burgerPoster" aria-label="Abstract burger counter graphic">
            <div className="ticket">
              <span>7th Ave</span>
              <strong>485</strong>
            </div>
            <div className="burgerArt">
              <span className="bun topBun" />
              <span className="cheese" />
              <span className="patty" />
              <span className="bun bottomBun" />
            </div>
            <p>Fast food • Manhattan • 4.6 Google rating</p>
          </div>
        </div>
      </section>

      <section className="proofBand" aria-label="Key details">
        {facts.map((fact) => (
          <div className="fact" key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </section>

      <section className="locationSection" aria-labelledby="visit-title">
        <div className="sectionIntro">
          <p className="eyebrow">Visit</p>
          <h2 id="visit-title">Built around the 7th Ave stop.</h2>
        </div>

        <div className="locationGrid">
          <a className="addressPanel" href={mapsUrl}>
            <span className="panelLabel">Address</span>
            <strong>485 7th Ave</strong>
            <span>New York, NY 10018</span>
            <em>Open in maps</em>
          </a>

          <div className="streetPanel" aria-hidden="true">
            <div className="avenueLabel">7th Ave</div>
            <div className="streetLine" />
            <div className="crossStreet top">W 37</div>
            <div className="pin">485</div>
            <div className="crossStreet bottom">W 36</div>
          </div>
        </div>
      </section>

      <section className="decisionSection" aria-labelledby="decision-title">
        <div>
          <p className="eyebrow">Before you go</p>
          <h2 id="decision-title">Use the official location page for live details.</h2>
        </div>
        <p>
          Menus, hours, ordering options, and store-specific updates can change. The
          direct location page is the best next step before heading over or placing
          an order.
        </p>
        <a className="button primary dark" href={business.website}>
          Go to official location page
        </a>
      </section>

      <footer>
        <div>
          <strong>7th Street Burger</strong>
          <span>Hamburger Restaurant • Manhattan</span>
        </div>
        <a href={phoneHref}>{business.phone}</a>
      </footer>
    </main>
  );
}
