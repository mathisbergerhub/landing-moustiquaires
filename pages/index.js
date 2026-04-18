import Head from "next/head";
import { useState } from "react";

const canonicalUrl = "https://moustiquaire-chambery-caseo.vercel.app/";
const showroomUrl =
  "https://www.caseo-maison.com/magasins/page/caseo-chambery-voglans-85/magasin-fenetre-chambery-caseo-71";
const devisUrl = "https://www.caseo-maison.com/devis";
const mapsUrl = "https://maps.app.goo.gl/hsRmYYPDsB5QcNK98";
const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775923.340662299!2d1.4331651417110982!3d47.19970105736059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba7f4992eba1f%3A0x9ea3fb9aab31d495!2zQ0FTw4lPIENoYW1iw6lyeQ!5e0!3m2!1sfr!2sfr!4v1776328547399!5m2!1sfr!2sfr";

const phoneDisplay = "04 79 34 48 52";
const phoneLink = "tel:+33479344852";

const logoImage = "/images/logo-caseo.svg";
const showroomImage = "/images/showroom-caseo-chambery.jpeg";
const magasinImage = "/images/magasin-caseo-chambery.jpeg";
const fenetreImage = "/images/moustiquaire-magasin-fenetre.jpeg";
const baieImage = "/images/moustiquaire-magasin-baie-vitree.jpeg";
const ogImage = `${canonicalUrl}images/showroom-caseo-chambery.jpeg`;

const openingHours = [
  { day: "Lun – Ven", hours: "8h00 – 12h00 / 13h30 – 18h00" },
  { day: "Samedi", hours: "9h00 – 13h00" },
  { day: "Dimanche", hours: "Fermé" },
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

const problems = [
  "Vous fermez les fenêtres dès la nuit tombée à cause des moustiques",
  "Vous avez déjà essayé un filet du commerce — ça tient mal, ça fait moche, ça tombe",
  "Vous cherchez quelque chose de discret, de solide, qui s’ouvre vraiment facilement",
  "Vous voulez qu’on s’en occupe de A à Z sans avoir à vous en préoccuper",
];

const solutions = [
  {
    num: "01",
    kicker: "La plus demandée",
    title: "Moustiquaire enroulable",
    desc: "S'enroule en un geste, disparaît complètement quand vous n'en avez pas besoin. Robuste, discrète, parfaite pour une utilisation quotidienne.",
    use: "→ Chambre, cuisine, salle de bain",
    image: fenetreImage,
    alt: "Moustiquaire de fenêtre installée en magasin",
  },
  {
    num: "02",
    kicker: "Pour les grandes ouvertures",
    title: "Moustiquaire plissée",
    desc: "S'ouvre latéralement comme un accordéon. Zéro encombrement, usage fluide même plusieurs fois par jour, s'adapte aux baies vitrées les plus larges.",
    use: "→ Porte-fenêtre, baie vitrée, terrasse",
    image: baieImage,
    alt: "Moustiquaire de baie vitrée présentée en magasin",
  },
  {
    num: "03",
    kicker: "La solution sans prise de tête",
    title: "Moustiquaire fixe",
    desc: "On pose, c'est fait. Aucun mécanisme, aucune manipulation. Protection permanente pour les ouvertures qu'on n'ouvre pas souvent.",
    use: "→ Cave, véranda, cellier",
    image: null,
    alt: "",
  },
];

const benefits = [
  "Plus aucun moustique la nuit, fenêtres grandes ouvertes",
  "Air frais dans toutes les pièces sans compromis",
  "Rendu propre et discret, intégré à vos menuiseries",
  "Compatible avec toutes vos ouvertures existantes",
  "Fabriquée au millimètre pour durer des années",
  "Posée et réglée par un technicien — rien à faire de votre côté",
];

const reasons = [
  {
    number: "01",
    title: "Showroom ouvert à Chambéry",
    text: "Venez voir, toucher, comparer. Pas d'engagement, pas de vendeur qui vous court après.",
  },
  {
    number: "02",
    title: "On vient chez vous pour les mesures",
    text: "Pas de formulaire à remplir, pas de mesures à prendre vous-même. On s'en charge.",
  },
  {
    number: "03",
    title: "Fabriquée à vos cotes exactes",
    text: "Ajustement au millimètre. Ça s'ouvre bien, ça ferme bien, ça tient dans le temps.",
  },
  {
    number: "04",
    title: "Posée par nos techniciens",
    text: "Installation propre, réglages fins, démonstration d'usage. On ne part pas tant que c'est pas parfait.",
  },
];

const processSteps = [
  {
    n: "1",
    title: "Vous nous contactez — 2 minutes",
    desc: "Par téléphone ou en ligne. On vous répond dans la journée.",
  },
  {
    n: "2",
    title: "On vient mesurer chez vous — gratuit",
    desc: "Un technicien se déplace, mesure tout, vous conseille sur le modèle. Aucun engagement à cette étape.",
  },
  {
    n: "3",
    title: "On fabrique sur vos cotes — 1 à 2 semaines",
    desc: "Votre moustiquaire est produite selon vos dimensions exactes. Pas de standard, pas de compromis.",
  },
  {
    n: "4",
    title: "On installe, on règle, on vous montre",
    desc: "Pose propre, réglages, vérification finale. Vous êtes prêt pour l'été.",
  },
];

const reviews = [
  {
    name: "Thomas Jacquignon",
    rating: "5/5",
    date: "il y a un mois",
    text: "Excellente expérience du début à la fin.",
  },
  {
    name: "Manon Malavasi",
    rating: "5/5",
    date: "il y a un mois",
    text: "Super projet. Nous sommes ravis. L'équipe accompagne vraiment du début à la fin.",
  },
  {
    name: "Laurence Maranzoni",
    rating: "5/5",
    date: "il y a 4 mois",
    text: "De l'accueil magasin jusqu'à la pose, tout était parfait.",
  },
];

const faqs = [
  {
    question: "Quelle moustiquaire pour ma fenêtre à Chambéry ?",
    answer:
      "Pour une fenêtre fréquemment ouverte, l'enroulable est le bon choix : pratique, discrète, solide. Pour une porte-fenêtre ou une baie vitrée, on recommande la plissée. On vous conseille lors de la visite à domicile — c'est gratuit.",
  },
  {
    question: "Vous posez bien à Chambéry et autour ?",
    answer:
      "Oui : Chambéry, La Motte-Servolex, Bassens, Cognin, Barberaz, Aix-les-Bains, Le Bourget-du-Lac, Voglans. Autre commune ? Appelez-nous, on vérifie.",
  },
  {
    question: "Pourquoi pas acheter une moustiquaire au Leroy Merlin ?",
    answer:
      "Les modèles standard ne correspondent pas aux cotes de vos fenêtres. Résultat : ça ne ferme pas bien, ça laisse passer les insectes, ça tient mal. Le sur mesure coûte un peu plus cher à l'achat mais dure des années sans problème.",
  },
  {
    question: "Quel prix pour une moustiquaire posée à Chambéry ?",
    answer:
      "À partir de 180 € pour une enroulable posée. Le tarif exact dépend des dimensions et du nombre d'ouvertures. Devis gratuit, réponse sous 24h.",
  },
  {
    question: "Comment se passe la prise de mesures ?",
    answer:
      "Un technicien se déplace chez vous, mesure vos ouvertures et vous conseille. C'est gratuit, sans engagement, et ça prend 20 à 30 minutes.",
  },
  {
    question: "Horaires du showroom Caséo Chambéry ?",
    answer:
      "Lundi au vendredi : 8h – 12h / 13h30 – 18h. Samedi : 9h – 13h. Dimanche : fermé. 381 Avenue de Villarcher, 73000 Chambéry.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Caséo Chambéry - Menuiserie Diffusion",
  image: ogImage,
  url: canonicalUrl,
  telephone: "+33479344852",
  description:
    "Caséo Chambéry installe des moustiquaires sur mesure pour fenêtres, portes-fenêtres et baies vitrées à Chambéry et en Savoie.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "381 Avenue de Villarcher",
    postalCode: "73000",
    addressLocality: "Chambéry",
    addressCountry: "FR",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Dormez les fenêtres ouvertes cet été à Chambéry | Caséo Chambéry</title>
        <meta
          name="description"
          content="Moustiquaire sur mesure à Chambéry avec pose incluse. Devis gratuit sous 24h, mesures à domicile offertes, installation par Caséo Chambéry."
        />
        <meta
          property="og:title"
          content="Dormez les fenêtres ouvertes cet été à Chambéry | Caséo Chambéry"
        />
        <meta
          property="og:description"
          content="Moustiquaire sur mesure, pose incluse, devis offert sous 24h à Chambéry."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="theme-color" content="#1a2340" />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo">
            <img src={logoImage} alt="Logo Caséo Chambéry" className="logo-image" />
          </a>

          <nav className="nav">
            <a href="#solutions">Solutions</a>
            <a href="#pourquoi">Pourquoi Caséo</a>
            <a href="#magasin">Magasin</a>
            <a href="#faq">FAQ</a>
            <a href={devisUrl} className="btn btn-primary nav-cta">
              Devis gratuit en 24h
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-topline">
                <span className="hero-tag">Caséo Chambéry</span>
                <span className="hero-review-badge">⭐ 4,5/5 · 84 avis Google</span>
              </div>

              <h1>Dormez les fenêtres ouvertes cet été à Chambéry</h1>

              <div className="hero-inline-proof">
                ✓ Moustiquaire sur mesure · Pose incluse · Devis offert
              </div>

              <p className="hero-text">
                Fini les nuits étouffantes fenêtres fermées, les spirales qui puent et les filets de bazar qui tombent. Caséo Chambéry pose votre moustiquaire sur mesure — mesures, fabrication, installation, tout est géré.
              </p>

              <div className="hero-points">
                <span>On se déplace chez vous pour les mesures</span>
                <span>Fabriquée aux cotes exactes de vos fenêtres</span>
                <span>Posée proprement, réglée, opérationnelle le jour J</span>
              </div>

              <div className="hero-actions">
                <a href={devisUrl} className="btn btn-primary">
                  Recevoir mon devis gratuit →
                </a>
                <a href={phoneLink} className="btn btn-secondary">
                  Appeler le 04 79 34 48 52
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat-card">
                  <strong>+200 poses</strong>
                  <span>à Chambéry</span>
                </div>
                <div className="stat-card">
                  <strong>Showroom ouvert</strong>
                  <span>6j/7 à Chambéry</span>
                </div>
                <div className="stat-card">
                  <strong>Posée en</strong>
                  <span>1 à 2 semaines</span>
                </div>
              </div>
            </div>

            <div className="hero-side">
              <div className="hero-panel">
                <div className="hero-panel-label">Votre showroom à Chambéry</div>
                <div className="hero-panel-title">Venez voir avant de décider</div>
                <p className="hero-panel-text">
                  Touchez les matières, comparez les modèles, posez toutes vos questions — sans engagement, sans pression commerciale.
                </p>

                <div className="hero-panel-box">
                  <p>
                    <strong>Menuiserie Diffusion</strong>
                    <br />
                    381 Avenue de Villarcher · 73000 Chambéry
                  </p>
                  <a href={phoneLink}>{phoneDisplay}</a>
                </div>

                <div className="hero-panel-actions">
                  <a href={devisUrl} className="btn btn-primary">
                    Je veux un devis gratuit
                  </a>
                  <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn btn-dark-outline">
                    Voir comment venir
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-gallery">
          <div className="container hero-gallery-grid">
            <article className="hero-gallery-card large">
              <img src={showroomImage} alt="Showroom Caséo Chambéry" loading="lazy" />
              <div className="hero-gallery-copy">
                <span>Showroom</span>
                <strong>Découvrez les modèles exposés</strong>
              </div>
            </article>

            <article className="hero-gallery-card">
              <img src={magasinImage} alt="Magasin Caséo Chambéry" loading="lazy" />
              <div className="hero-gallery-copy">
                <span>Magasin</span>
                <strong>Un accompagnement local</strong>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container problem-grid">
            <div className="problem-copy">
              <p className="section-tag">Ce que vivent nos clients avant de nous appeler</p>
              <h2>Vous aimeriez juste pouvoir ouvrir vos fenêtres la nuit.</h2>
              <p className="section-text">
                Chaque été, c'est le même dilemme : étouffer dans une pièce fermée ou se faire dévorer. Les solutions du commerce ne tiennent pas, s'abîment, ne s'adaptent pas. Et on repart avec le même problème l'année suivante.
              </p>
            </div>

            <div className="problem-panel">
              <div className="problem-list">
                {problems.map((item, index) => (
                  <div key={item} className="problem-item">
                    <div className="problem-index">0{index + 1}</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="section">
          <div className="container">
            <p className="section-tag">Nos solutions</p>
            <h2>La bonne moustiquaire selon votre ouverture</h2>
            <p className="section-text">
              Pas de solution universelle. On choisit avec vous selon vos fenêtres, votre usage et ce que vous voulez vraiment au quotidien.
            </p>

            <div className="solutions-grid">
              {solutions.map((s) => (
                <article key={s.num} className="solution-card">
                  {s.image ? (
                    <div className="solution-media">
                      <img src={s.image} alt={s.alt} loading="lazy" />
                    </div>
                  ) : (
                    <div className="solution-media solution-media-placeholder">
                      <span>Protection discrète et durable</span>
                    </div>
                  )}

                  <div className="solution-body">
                    <div className="solution-kicker">
                      {s.num} — {s.kicker}
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <span>{s.use}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <p className="section-tag">Ce qui change avec du sur mesure</p>
            <h2>Une moustiquaire qui s'adapte à vos fenêtres — pas l'inverse.</h2>
            <p className="section-text">
              Les modèles du commerce sont prévus pour des fenêtres standard. Les vôtres ne le sont probablement pas.
            </p>

            <div className="benefits-grid">
              {benefits.map((benefit) => (
                <div key={benefit} className="benefit-card">
                  <span className="benefit-check">✓</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pourquoi" className="section">
          <div className="container why-grid">
            <div>
              <p className="section-tag">Pourquoi Caséo Chambéry</p>
              <h2>
                On est à Chambéry. On se déplace chez vous. On pose, on règle, on part quand c'est parfait.
              </h2>
              <p className="section-text why-text">
                Pas de centre d'appel, pas de sous-traitant qui ne connaît pas votre région. Une équipe locale qui connaît Chambéry, ses logements, ses menuiseries.
              </p>

              <div className="why-feature">
                <div className="why-feature-label">4,5/5 · 84 avis Google vérifiés</div>
                <div className="why-feature-title">"Excellente expérience du début à la fin."</div>
                <p>
                  <a href={mapsUrl} target="_blank" rel="noreferrer" className="why-link">
                    Lire tous les avis →
                  </a>
                </p>
              </div>
            </div>

            <div className="reasons-grid">
              {reasons.map((r) => (
                <article key={r.title} className="reason-card">
                  <div className="reason-number">{r.number}</div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-tag">Combien ça coûte</p>
            <h2>
              Moins cher que ce que vous imaginez.
              <br />
              Plus durable que ce que vous avez déjà essayé.
            </h2>
            <p className="section-text">
              Une moustiquaire enroulable posée à Chambéry démarre autour de 180 €. Le prix final dépend du type, des dimensions et du nombre d'ouvertures.
            </p>
            <p className="section-text price-text">
              Ce que vous payez : une solution qui tient des années, installée proprement, qui n'a rien à voir avec ce qu'on trouve au rayon bricolage.
            </p>
            <p className="section-text price-text">
              Le devis est gratuit, sans engagement, et vous avez votre réponse sous 24h.
            </p>

            <div className="price-box">
              <a href={devisUrl} className="btn btn-primary">
                Je veux mon devis gratuit →
              </a>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <p className="section-tag">Comment ça se passe</p>
            <h2>Quatre étapes. Vous n'avez presque rien à faire.</h2>

            <div className="process-grid">
              {processSteps.map((step) => (
                <article key={step.n} className="process-step">
                  <div className="process-circle">{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-reviews">
          <div className="container">
            <p className="section-tag">Ils l'ont fait avant vous</p>
            <h2>84 clients à Chambéry ont arrêté de subir les moustiques.</h2>
            <p className="section-text">
              Note moyenne de 4,5/5 sur Google. Des clients qui reviennent, qui recommandent, qui parlent de l'équipe par son prénom.
            </p>

            <div className="reviews-header">
              <div className="reviews-badge">
                <strong>4,5/5 · 84 avis Google</strong>
                <span>Caséo Chambéry</span>
              </div>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                Voir tous les avis Google →
              </a>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <article key={review.name} className="review-card">
                  <div className="review-top">
                    <strong>{review.name}</strong>
                    <span>{review.rating}</span>
                  </div>
                  <p className="review-date">{review.date}</p>
                  <p className="review-text">“{review.text}”</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <p className="section-tag dark-tag">Zone d’intervention</p>
            <h2>Vous êtes près de Chambéry ? On vient chez vous.</h2>
            <p className="section-text dark-text">
              Caséo Chambéry intervient pour la pose de moustiquaire sur mesure dans toute l'agglomération. Pas de frais de déplacement supplémentaires pour les communes ci-dessous.
            </p>

            <div className="zones-grid">
              {zones.map((z) => (
                <span key={z}>{z}</span>
              ))}
            </div>

            <p className="zone-note">
              Votre commune n'est pas dans la liste ? Appelez-nous, on vérifie ensemble.
            </p>
          </div>
        </section>

        <section id="magasin" className="section">
          <div className="container">
            <p className="section-tag">Le showroom</p>
            <h2>Venez voir les modèles avant de vous décider.</h2>
            <p className="section-text">
              Aucune obligation d'achat. Vous venez, vous voyez, vous touchez, vous posez vos questions. Si vous voulez aller plus loin, on vous fait un devis sur place.
            </p>

            <div className="local-gallery-card">
              <img src={magasinImage} alt="Magasin Caséo Chambéry" loading="lazy" />
              <div className="local-gallery-overlay">
                <span>Caséo Chambéry — Menuiserie Diffusion</span>
                <strong>381 Avenue de Villarcher · 73000 Chambéry</strong>
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
                  <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Voir comment venir
                  </a>
                  <a href={devisUrl} className="btn btn-secondary">
                    Recevoir mon devis gratuit
                  </a>
                </div>
              </div>

              <div className="hours-card">
                <div className="hours-head">
                  <p className="section-tag small-tag">Showroom</p>
                  <h3>Caséo Chambéry — Menuiserie Diffusion</h3>
                  <p>
                    381 Avenue de Villarcher · 73000 Chambéry
                    <br />
                    <a href={phoneLink} className="hours-phone">
                      04 79 34 48 52
                    </a>
                  </p>
                </div>

                <div className="hours-list">
                  {openingHours.map((item) => (
                    <div className="hours-row" key={item.day}>
                      <strong>{item.day}</strong>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="hours-actions">
                  <a href={phoneLink} className="btn btn-dark">
                    Appeler le 04 79 34 48 52
                  </a>
                  <a href={devisUrl} className="btn btn-primary">
                    Recevoir mon devis gratuit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section seo-block">
          <div className="container">
            <h2>Moustiquaire sur mesure à Chambéry avec pose — Caséo</h2>
            <p className="section-text">
              Caséo Chambéry installe des moustiquaires sur mesure pour fenêtres, portes-fenêtres et baies vitrées à Chambéry et en Savoie (73). Prise de mesures à domicile, fabrication sur vos cotes et pose par nos techniciens. Showroom ouvert à Chambéry, intervention sur La Motte-Servolex, Bassens, Cognin, Barberaz, Aix-les-Bains, Le Bourget-du-Lac et Voglans. Devis gratuit sous 24h.
            </p>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <h2>Vos questions, nos réponses</h2>

            <div className="faq-list">
              {faqs.map((f, i) => (
                <div key={f.question} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {f.question}
                    <span className={openFaq === i ? "faq-plus open" : "faq-plus"}>
                      +
                    </span>
                  </button>
                  {openFaq === i && <p className="faq-answer">{f.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-wrap">
          <div className="cta-box">
            <div>
              <h2>
                Fini les nuits étouffantes.
                <br />
                Votre moustiquaire est posée en 2 semaines.
              </h2>
              <p>
                Devis gratuit sous 24h. Mesures à domicile offertes. Pose par nos techniciens. Avant l'été, c'est réglé.
              </p>
            </div>

            <div className="cta-buttons">
              <a href={devisUrl} className="btn btn-white">
                Je veux mon devis gratuit →
              </a>
              <a href={phoneLink} className="btn btn-dark-outline">
                Appeler le 04 79 34 48 52
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="mobile-sticky-cta">
        <a href={phoneLink} className="mobile-sticky-btn mobile-call">
          04 79 34 48 52
        </a>
        <a href={devisUrl} className="mobile-sticky-btn mobile-devis">
          Devis gratuit →
        </a>
      </div>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>
            © 2026 Caséo Chambéry · Menuiserie Diffusion · 381 Avenue de Villarcher, 73000 Chambéry
          </span>
          <div className="footer-links">
            <a href={showroomUrl} target="_blank" rel="noreferrer">
              Showroom Caséo Chambéry
            </a>
            <a href={devisUrl} target="_blank" rel="noreferrer">
              Demande de devis
            </a>
            <a href="https://www.caseo-maison.com/" target="_blank" rel="noreferrer">
              caseo-maison.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
