import Head from "next/head";
import { useState } from "react";

const canonicalUrl = "https://moustiquaire-chambery-caseo.vercel.app/";
const ogImage = `${canonicalUrl}images/showroom-caseo-chambery.jpeg`;
const showroomUrl =
  "https://www.caseo-maison.com/magasins/page/caseo-chambery-voglans-85/magasin-fenetre-chambery-caseo-71";
const logoImage = "/images/logo-caseo.svg";
const devisUrl = "https://www.caseo-maison.com/devis";
const mapsUrl = "https://maps.app.goo.gl/hsRmYYPDsB5QcNK98";
const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775923.340662299!2d1.4331651417110982!3d47.19970105736059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba7f4992eba1f%3A0x9ea3fb9aab31d495!2zQ0FTw4lPIENoYW1iw6lyeQ!5e0!3m2!1sfr!2sfr!4v1776328547399!5m2!1sfr!2sfr";

const phoneDisplay = "04 79 34 48 52";
const phoneLink = "tel:+33479344852";

const showroomImage = "/images/showroom-caseo-chambery.jpeg";
const magasinImage = "/images/magasin-caseo-chambery.jpeg";
const fenetreImage = "/images/moustiquaire-magasin-fenetre.jpeg";
const baieImage = "/images/moustiquaire-magasin-baie-vitree.jpeg";

const openingHours = [
  ["Lundi", "08h00-12h00 / 13h30-18h00"],
  ["Mardi", "08h00-12h00 / 13h30-18h00"],
  ["Mercredi", "08h00-12h00 / 13h30-18h00"],
  ["Jeudi", "08h00-12h00 / 13h30-18h00"],
  ["Vendredi", "08h00-12h00 / 13h30-18h00"],
  ["Samedi", "09h00-13h00"],
  ["Dimanche", "Fermé"],
];

const zones = [
  "Chambéry",
  "La Motte-Servolex",
  "Bassens",
  "Cognin",
  "Barberaz",
  "Aix-les-Bains",
  "Le Bourget-du-Lac",
  "Voglans",
];

const solutions = [
  [
    "Moustiquaire enroulable",
    "La solution la plus demandée pour les fenêtres.",
    fenetreImage,
  ],
  [
    "Moustiquaire plissée",
    "Parfaite pour les portes-fenêtres et baies vitrées.",
    baieImage,
  ],
  [
    "Moustiquaire fixe",
    "Simple, discrète et durable pour les ouvertures peu sollicitées.",
    "",
  ],
];

const reviews = [
  [
    "Thomas Jacquignon",
    "5/5",
    "Excellente expérience du début à la fin. Très bons conseils et installation impeccable.",
  ],
  [
    "Manon Malavasi",
    "5/5",
    "Super projet. Nous sommes ravis de notre nouvelle porte d'entrée. Équipe top.",
  ],
  [
    "Laurence Maranzoni",
    "5/5",
    "De l'accueil magasin jusqu'à la pose, tout était parfait. Merci beaucoup.",
  ],
];

const faqs = [
  [
    "Quel type de moustiquaire choisir ?",
    "Pour une fenêtre standard, l'enroulable est souvent le meilleur choix. Pour une porte-fenêtre ou une baie vitrée, la plissée est généralement la plus confortable à l'usage.",
  ],
  [
    "Proposez-vous la pose à Chambéry et autour ?",
    "Oui. Caséo Chambéry intervient pour la prise de mesures, la fabrication sur mesure et la pose de moustiquaires à Chambéry et dans les communes voisines.",
  ],
  [
    "Combien coûte une moustiquaire sur mesure ?",
    "Le prix dépend du type de moustiquaire, des dimensions et du nombre d'ouvertures. Le plus simple est de demander un devis gratuit.",
  ],
  [
    "Quels sont les horaires du showroom ?",
    "Le showroom est ouvert du lundi au vendredi de 08h00 à 12h00 puis de 13h30 à 18h00, et le samedi de 09h00 à 13h00.",
  ],
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Caséo Chambéry - Menuiserie Diffusion",
  image: ogImage,
  url: canonicalUrl,
  telephone: "+33479344852",
  address: {
    "@type": "PostalAddress",
    streetAddress: "381 Avenue de Villarcher",
    postalCode: "73000",
    addressLocality: "Chambéry",
    addressCountry: "FR",
  },
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>
          Moustiquaire sur mesure à Chambéry avec pose | Caséo Chambéry
        </title>
        <meta
          name="description"
          content="Caséo Chambéry installe votre moustiquaire sur mesure à Chambéry : fenêtres, portes-fenêtres et baies vitrées. Devis gratuit et pose professionnelle."
        />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large"
        />
        <meta
          property="og:title"
          content="Moustiquaire sur mesure à Chambéry avec pose | Caséo Chambéry"
        />
        <meta
          property="og:description"
          content="Demandez votre devis gratuit pour une moustiquaire sur mesure à Chambéry."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="theme-color" content="#1a2340" />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </Head>

      <main>
        <header className="site-header">
          <div className="container header-inner">
            <a href="#top" className="logo">
              <img
                src={logoImage}
                alt="Logo Caséo Chambéry"
                className="logo-image"
              />
            </a>

            <nav className="nav">
              <a href="#solutions">Solutions</a>
              <a href="#avis">Avis</a>
              <a href="#magasin">Magasin</a>
              <a href="#faq">FAQ</a>
              <a href={devisUrl} className="btn btn-primary">
                Recevoir mon devis gratuit
              </a>
            </nav>
          </div>
        </header>

        <section className="hero" id="top">
          <div className="container hero-grid">
            <div>
              <div className="badges">
                <span className="badge badge-orange">Caséo Chambéry</span>
                <span className="badge badge-white">
                  4,5/5 · 84 avis Google
                </span>
              </div>

              <h1>
                Moustiquaire
                <br />
                sur mesure à
                <br />
                Chambéry
                <br />
                avec <span>pose</span>
              </h1>

              <p className="lead">
                Fenêtres, portes-fenêtres, baies vitrées : protégez votre maison
                des moustiques tout l'été sans renoncer à l'air frais.
              </p>

              <ul className="ticks">
                <li>Prise de mesures à domicile</li>
                <li>Fabrication sur vos cotes</li>
                <li>Pose par nos techniciens</li>
              </ul>

              <div className="actions">
                <a href={devisUrl} className="btn btn-primary">
                  Recevoir mon devis gratuit
                </a>
                <a href={phoneLink} className="btn btn-secondary">
                  Appeler le showroom
                </a>
              </div>
            </div>

            <div className="hero-panel">
              <p className="overline">Votre showroom local</p>
              <h2>Un projet simple, clair et bien accompagné</h2>
              <p>
                Venez voir les modèles au showroom Caséo Chambéry ou faites
                directement votre demande en ligne pour être recontacté.
              </p>

              <div className="address-box">
                <strong>Menuiserie Diffusion</strong>
                <span>381 Avenue de Villarcher</span>
                <span>73000 Chambéry</span>
                <a href={phoneLink}>{phoneDisplay}</a>
              </div>

              <div className="actions">
                <a href={devisUrl} className="btn btn-primary">
                  Demander un devis
                </a>
                <a
                  href={mapsUrl}
                  className="btn btn-outline-light"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir l'itinéraire
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery">
          <div className="container gallery-grid">
            <article className="gallery-card large">
              <img src={showroomImage} alt="Showroom Caséo Chambéry" />
              <div className="overlay">
                <span>Showroom</span>
                <strong>Découvrez les modèles exposés</strong>
              </div>
            </article>

            <article className="gallery-card">
              <img src={magasinImage} alt="Magasin Caséo Chambéry" />
              <div className="overlay">
                <span>Magasin</span>
                <strong>Un accompagnement local</strong>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="container">
            <p className="eyebrow">Nos solutions</p>
            <h2>Des moustiquaires adaptées à chaque ouverture</h2>

            <div className="cards cards-3">
              {solutions.map(([title, text, image], index) => (
                <article className="card" key={title}>
                  <div className="card-media">
                    {image ? (
                      <img src={image} alt={title} />
                    ) : (
                      <div className="placeholder">
                        Protection discrète et durable
                      </div>
                    )}
                  </div>

                  <div className="card-body">
                    <div className="step">0{index + 1}</div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft" id="avis">
          <div className="container">
            <p className="eyebrow">Avis clients</p>
            <h2>Des retours visibles en ligne pour vous rassurer</h2>

            <div className="reviews-head">
              <div className="score-box">
                <strong>4,5/5 · 84 avis Google</strong>
                <span>Caséo Chambéry</span>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Voir les avis Google
              </a>
            </div>

            <div className="cards cards-3">
              {reviews.map(([name, rating, text]) => (
                <article className="review" key={name}>
                  <div className="review-top">
                    <strong>{name}</strong>
                    <span>{rating}</span>
                  </div>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="container">
            <p className="eyebrow eyebrow-light">Zone d'intervention</p>
            <h2>Pose de moustiquaire à Chambéry et dans les environs</h2>
            <p className="dark-copy">
              Caséo Chambéry intervient à Chambéry, La Motte-Servolex, Bassens,
              Cognin, Barberaz, Aix-les-Bains, Le Bourget-du-Lac et Voglans.
            </p>

            <div className="zone-list">
              {zones.map((zone, index) => (
                <span
                  key={zone}
                  className={index === 0 ? "zone active" : "zone"}
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="magasin">
          <div className="container">
            <p className="eyebrow">Magasin & horaires</p>
            <h2>Retrouvez Caséo Chambéry au showroom</h2>

            <div className="local-shot">
              <img src={magasinImage} alt="Magasin Caséo Chambéry" />
              <div className="overlay">
                <span>Magasin Caséo Chambéry</span>
                <strong>Découvrez le showroom et les modèles exposés</strong>
              </div>
            </div>

            <div className="local-grid">
              <div className="map-card">
                <iframe
                  src={mapsEmbedUrl}
                  className="map-frame"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Caséo Chambéry"
                />
                <div className="map-actions">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Voir l'itinéraire
                  </a>
                  <a href={devisUrl} className="btn btn-secondary">
                    Faire une demande de devis
                  </a>
                </div>
              </div>

              <div className="hours-card">
                <p className="eyebrow">Horaires showroom</p>
                <h3>Caséo Chambéry</h3>
                <p className="address-text">
                  Menuiserie Diffusion
                  <br />
                  381 Avenue de Villarcher
                  <br />
                  73000 Chambéry
                </p>

                <div className="hours-list">
                  {openingHours.map(([day, hours]) => (
                    <div className="hours-row" key={day}>
                      <strong>{day}</strong>
                      <span>{hours}</span>
                    </div>
                  ))}
                </div>

                <div className="hours-actions">
                  <a href={phoneLink} className="btn btn-dark">
                    Appeler le {phoneDisplay}
                  </a>
                  <a href={devisUrl} className="btn btn-primary">
                    Recevoir mon devis gratuit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <p className="eyebrow">FAQ moustiquaire Chambéry</p>
            <h2>Les questions fréquentes</h2>

            <div className="faq-list">
              {faqs.map(([q, a], index) => (
                <div className="faq-item" key={q}>
                  <button
                    className="faq-question"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    aria-expanded={openFaq === index}
                  >
                    {q}
                    <span
                      className={
                        openFaq === index ? "faq-plus open" : "faq-plus"
                      }
                    >
                      +
                    </span>
                  </button>

                  {openFaq === index && <p className="faq-answer">{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-wrap">
          <div className="cta-box">
            <div>
              <h2>Votre moustiquaire sur mesure à Chambéry commence ici</h2>
              <p>
                Devis gratuit, prise de mesures à domicile, fabrication sur
                mesure et pose par nos techniciens.
              </p>
            </div>

            <div className="cta-buttons">
              <a href={devisUrl} className="btn btn-white">
                Recevoir mon devis gratuit
              </a>
              <a href={phoneLink} className="btn btn-outline-light">
                Appeler le showroom
              </a>
            </div>
          </div>
        </section>

        <footer className="site-footer bottom">
          <div className="container footer-inner">
            <span>© 2026 Caséo Chambéry - Menuiserie Diffusion</span>
            <div className="footer-links">
              <a href={showroomUrl} target="_blank" rel="noreferrer">
                Page showroom Caséo Chambéry
              </a>
              <a href={devisUrl} target="_blank" rel="noreferrer">
                Demande de devis Caséo
              </a>
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f6f3ef;
          color: #15224b;
        }

        :global(*) {
          box-sizing: border-box;
        }

        :global(a) {
          text-decoration: none;
        }

        :global(img) {
          max-width: 100%;
          display: block;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #16224b;
          padding: 26px 0;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .logo {
          display: inline-flex;
          align-items: center;
        }

        .logo-image {
          height: 48px;
          width: auto;
          object-fit: contain;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 34px;
          flex-wrap: wrap;
        }

        .nav a {
          color: #fff;
          font-weight: 700;
          font-size: 16px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          border-radius: 999px;
          padding: 0 28px;
          font-weight: 800;
          transition: 0.2s ease;
          border: 1px solid transparent;
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btn-primary {
          background: #f58a1f;
          color: #fff;
          box-shadow: 0 10px 30px rgba(245, 138, 31, 0.25);
        }

        .btn-secondary {
          background: #ffffff;
          color: #16224b;
          border-color: #d7ddea;
        }

        .btn-outline-light {
          background: transparent;
          color: #fff;
          border-color: rgba(255, 255, 255, 0.35);
        }

        .btn-dark {
          background: #16224b;
          color: #fff;
        }

        .btn-white {
          background: #fff;
          color: #16224b;
        }

        .hero {
          padding: 66px 0 40px;
          background:
            radial-gradient(circle at right top, rgba(245, 138, 31, 0.12), transparent 26%),
            #f6f3ef;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 44px;
          align-items: start;
        }

        .badges {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          min-height: 48px;
          padding: 0 22px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 16px;
        }

        .badge-orange {
          background: #fff2e6;
          color: #df7b16;
          border: 1px solid rgba(223, 123, 22, 0.22);
        }

        .badge-white {
          background: #f7f9fc;
          color: #15224b;
          border: 1px solid #dbe2ed;
        }

        h1 {
          font-size: clamp(46px, 8vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin: 0 0 26px;
          font-weight: 900;
          color: #16224b;
        }

        h1 span {
          color: #f58a1f;
        }

        .lead {
          font-size: 21px;
          line-height: 1.65;
          color: #586c93;
          max-width: 800px;
          margin: 0 0 28px;
        }

        .ticks {
          list-style: none;
          padding: 0;
          margin: 0 0 34px;
          display: grid;
          gap: 18px;
        }

        .ticks li {
          position: relative;
          padding-left: 42px;
          font-size: 18px;
          font-weight: 700;
          color: #16224b;
        }

        .ticks li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: -2px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #fff1e3;
          color: #f58a1f;
          font-weight: 900;
        }

        .actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-panel {
          background: #1f2b5a;
          color: #fff;
          border-radius: 40px;
          padding: 52px 44px;
          position: relative;
          overflow: hidden;
        }

        .hero-panel::before {
          content: "";
          position: absolute;
          width: 240px;
          height: 240px;
          right: -80px;
          bottom: -80px;
          border-radius: 50%;
          background: rgba(245, 138, 31, 0.08);
        }

        .overline {
          margin: 0 0 20px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 800;
          font-size: 14px;
          color: #d7ddf2;
        }

        .hero-panel h2 {
          margin: 0 0 22px;
          font-size: clamp(36px, 4.6vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #fff;
        }

        .hero-panel p {
          margin: 0 0 26px;
          font-size: 18px;
          line-height: 1.7;
          color: #e6ebff;
        }

        .address-box {
          background: rgba(255, 255, 255, 0.09);
          border-radius: 24px;
          padding: 26px;
          display: grid;
          gap: 10px;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }

        .address-box strong,
        .address-box span,
        .address-box a {
          color: #fff;
          font-size: 17px;
        }

        .gallery {
          padding: 8px 0 36px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 24px;
        }

        .gallery-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          min-height: 300px;
          background: #dde4f2;
        }

        .gallery-card.large {
          min-height: 420px;
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          color: #fff;
          padding: 18px 20px;
          border-radius: 20px;
          background: linear-gradient(
            180deg,
            rgba(22, 34, 75, 0.2),
            rgba(22, 34, 75, 0.86)
          );
          backdrop-filter: blur(4px);
        }

        .overlay span {
          display: block;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          margin-bottom: 8px;
          opacity: 0.9;
        }

        .overlay strong {
          display: block;
          font-size: 22px;
          line-height: 1.25;
        }

        .section {
          padding: 88px 0;
        }

        .soft {
          background: #fbf8f4;
        }

        .dark {
          background: #16224b;
          color: #fff;
        }

        .eyebrow {
          margin: 0 0 10px;
          color: #f58a1f;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 13px;
        }

        .eyebrow-light {
          color: #ffb262;
        }

        .section h2,
        .cta-box h2 {
          margin: 0 0 18px;
          font-size: clamp(34px, 4.5vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.035em;
          color: inherit;
        }

        .cards {
          display: grid;
          gap: 24px;
          margin-top: 34px;
        }

        .cards-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .card,
        .review {
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid #e8edf5;
        }

        .card-media {
          height: 260px;
          background: #edf2f8;
        }

        .card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .placeholder {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          padding: 20px;
          text-align: center;
          color: #5d6f96;
          font-weight: 700;
        }

        .card-body {
          padding: 28px;
        }

        .step {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #fff2e6;
          color: #f58a1f;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .card h3,
        .hours-card h3 {
          margin: 0 0 12px;
          font-size: 28px;
          line-height: 1.12;
          color: #16224b;
        }

        .card p,
        .review p,
        .dark-copy,
        .faq-answer,
        .address-text {
          margin: 0;
          font-size: 17px;
          line-height: 1.75;
          color: #5c6f95;
        }

        .reviews-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .score-box {
          display: inline-grid;
          gap: 6px;
          padding: 22px 24px;
          background: #fff;
          border-radius: 22px;
          border: 1px solid #e8edf5;
        }

        .score-box strong {
          font-size: 24px;
          color: #16224b;
        }

        .score-box span {
          color: #5c6f95;
        }

        .review {
          padding: 28px;
        }

        .review-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
        }

        .review-top strong {
          font-size: 18px;
          color: #16224b;
        }

        .review-top span {
          font-weight: 800;
          color: #f58a1f;
        }

        .dark-copy {
          color: #d8def1;
          max-width: 900px;
        }

        .zone-list {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        .zone {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 18px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #fff;
        }

        .zone.active {
          background: #f58a1f;
          border-color: #f58a1f;
        }

        .local-shot {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          margin-top: 28px;
          min-height: 360px;
          background: #dfe5f3;
        }

        .local-shot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .local-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 24px;
          margin-top: 28px;
          align-items: start;
        }

        .map-card,
        .hours-card {
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid #e8edf5;
        }

        .map-frame {
          width: 100%;
          height: 440px;
          border: 0;
        }

        .map-actions,
        .hours-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          padding: 22px;
        }

        .hours-card {
          padding: 30px;
        }

        .hours-list {
          display: grid;
          gap: 14px;
          margin-top: 22px;
        }

        .hours-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #eef2f8;
        }

        .hours-row strong {
          color: #16224b;
        }

        .hours-row span {
          color: #5c6f95;
          text-align: right;
        }

        .faq-list {
          display: grid;
          gap: 16px;
          margin-top: 28px;
        }

        .faq-item {
          border: 1px solid #e7edf6;
          border-radius: 22px;
          background: #fff;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          padding: 24px 26px;
          background: #fff;
          border: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          font-size: 18px;
          font-weight: 800;
          color: #16224b;
          text-align: left;
          cursor: pointer;
        }

        .faq-plus {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #fff2e6;
          color: #f58a1f;
          font-size: 24px;
          flex: 0 0 auto;
          transition: transform 0.2s ease;
        }

        .faq-plus.open {
          transform: rotate(45deg);
        }

        .faq-answer {
          padding: 0 26px 24px;
        }

        .cta-wrap {
          padding: 0 20px 80px;
        }

        .cta-box {
          width: min(1180px, 100%);
          margin: 0 auto;
          background: #1f2b5a;
          border-radius: 34px;
          padding: 42px 34px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .cta-box p {
          margin: 0;
          color: #d8def1;
          font-size: 17px;
          line-height: 1.75;
        }

        .cta-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .site-footer {
          padding: 24px 0 44px;
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          color: #5c6f95;
          font-size: 15px;
        }

        .footer-links {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .footer-links a {
          color: #16224b;
          font-weight: 700;
        }

        @media (max-width: 1080px) {
          .hero-grid,
          .gallery-grid,
          .local-grid,
          .cards-3 {
            grid-template-columns: 1fr;
          }

          .nav {
            gap: 18px;
          }

          .hero-panel {
            padding: 38px 28px;
          }
        }

        @media (max-width: 720px) {
          .site-header {
            padding: 18px 0;
          }

          .header-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav {
            width: 100%;
          }

          .nav a {
            font-size: 15px;
          }

          .btn {
            width: 100%;
          }

          .actions,
          .map-actions,
          .hours-actions,
          .cta-buttons {
            flex-direction: column;
          }

          .gallery-card.large,
          .gallery-card,
          .local-shot {
            min-height: 250px;
          }

          .hero {
            padding-top: 34px;
          }

          .section {
            padding: 64px 0;
          }

          .cta-box {
            padding: 30px 22px;
          }

          .hours-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .hours-row span {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}
