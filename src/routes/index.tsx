import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Youtube, Facebook, Crown } from "lucide-react";

import heroPortrait from "@/assets/hero-portrait.jpg";
import aboutSash from "@/assets/about-sash.jpg";
import journeyStage from "@/assets/journey-stage.jpg";
import journeySash from "@/assets/journey-sash.jpg";
import journeyCrown from "@/assets/journey-crown.jpg";
import galleryPortrait from "@/assets/gallery-portrait.jpg";
import video1 from "@/assets/gallery-video-1.mp4.asset.json";
import video2 from "@/assets/gallery-video-2.mp4.asset.json";
import video3 from "@/assets/gallery-video-3.mp4.asset.json";
import video1Poster from "@/assets/gallery-video-1-poster.jpg";
import video2Poster from "@/assets/gallery-video-2-poster.jpg";
import video3Poster from "@/assets/gallery-video-3-poster.jpg";
import galleryGown from "@/assets/gallery-gown.jpg";
import galleryCrowd from "@/assets/gallery-crowd.jpg";
import galleryTiara from "@/assets/gallery-tiara.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catarina Alves — Miss Ícolo & Bengo 2026" },
      {
        name: "description",
        content:
          "Celebrating Catarina Alves, crowned Queen of Ícolo & Bengo. Explore her journey, gallery, and leave a message of congratulations.",
      },
      { property: "og:title", content: "Catarina Alves — Miss Ícolo & Bengo 2026" },
      {
        property: "og:description",
        content:
          "A celebration of grace, purpose, and quiet brilliance — the journey and crowning of Catarina Alves.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Lang = "en" | "pt";

const t = {
  en: {
    nav: { about: "About", journey: "Journey", gallery: "Gallery", wishes: "Wishes" },
    heroKicker: "Miss Ícolo & Bengo · 2026",
    heroSubtitle:
      "Crowned Queen of Ícolo & Bengo — a celebration of grace, purpose, and quiet brilliance.",
    heroCtaPrimary: "Send a Wish",
    heroCtaSecondary: "Her Journey",
    aboutKicker: "About the Winner",
    aboutTitle: "Grace is a practice, not a prize.",
    aboutBody:
      "Catarina is a community advocate from Ícolo & Bengo who channels her platform into education and community pride. Her story is one of steady devotion — to craft, to people, and to the cause she carries forward.",
    journeyKicker: "The Journey · Highlights",
    journeyTitle: "Milestones along the road to the crown.",
    milestones: [
      {
        title: "First Stage",
        caption: "The debut that set the tone, held with composure.",
      },
      {
        title: "The Sash",
        caption: "A cause embraced and carried into every community visit.",
      },
      {
        title: "The Crown",
        caption: "The moment the title was placed, and a new chapter opened.",
      },
    ],
    galleryKicker: "Gallery & Video",
    galleryTitle: "A keepsake in frames.",
    videoBadge: "Video",
    wishesKicker: "Messages & Well Wishes",
    wishesTitle: "Leave a note for the new queen.",
    featuredQuote:
      "“Your grace lights every room. Congratulations, Catarina — we are so proud of you.”",
    featuredAuthor: "With love — the Ícolo & Bengo Family",
    formName: "Your Name",
    formNamePlaceholder: "e.g. Marina",
    formMessage: "Your Message",
    formMessagePlaceholder: "Write your congratulations…",
    formSubmit: "Share Your Wish",
    formThanks: "Thank you! Your wish has been noted.",
    footerLine: "With joy, we celebrate her.",
    footerCopyright: "© 2026 Catarina Alves · catarinaalves.com",
  },
  pt: {
    nav: { about: "Sobre", journey: "Percurso", gallery: "Galeria", wishes: "Mensagens" },
    heroKicker: "Miss Ícolo e Bengo · 2026",
    heroSubtitle:
      "Coroada Rainha de Ícolo e Bengo — uma celebração de graça, propósito e brilho sereno.",
    heroCtaPrimary: "Enviar Mensagem",
    heroCtaSecondary: "Seu Percurso",
    aboutKicker: "Sobre a Vencedora",
    aboutTitle: "A graça é uma prática, não um prêmio.",
    aboutBody:
      "Catarina é uma defensora da comunidade de Ícolo e Bengo que dedica sua plataforma à educação e ao orgulho comunitário. Sua história é de devoção constante — ao seu ofício, às pessoas e à causa que leva adiante.",
    journeyKicker: "O Percurso · Destaques",
    journeyTitle: "Marcos no caminho até a coroa.",
    milestones: [
      {
        title: "Primeiro Palco",
        caption: "A estreia que deu o tom, sustentada com serenidade.",
      },
      {
        title: "A Faixa",
        caption: "Uma causa abraçada e levada a cada visita comunitária.",
      },
      {
        title: "A Coroa",
        caption: "O momento em que o título foi colocado, e um novo capítulo se abriu.",
      },
    ],
    galleryKicker: "Galeria & Vídeo",
    galleryTitle: "Uma lembrança em molduras.",
    videoBadge: "Vídeo",
    wishesKicker: "Mensagens & Votos",
    wishesTitle: "Deixe um recado para a nova rainha.",
    featuredQuote:
      "“Sua graça ilumina todos os ambientes. Parabéns, Catarina — temos muito orgulho de você.”",
    featuredAuthor: "Com amor — a Família de Ícolo e Bengo",
    formName: "Seu Nome",
    formNamePlaceholder: "ex. Marina",
    formMessage: "Sua Mensagem",
    formMessagePlaceholder: "Escreva seus parabéns…",
    formSubmit: "Enviar Votos",
    formThanks: "Obrigado! Seu recado foi registrado.",
    footerLine: "Com alegria, nós a celebramos.",
    footerCopyright: "© 2026 Catarina Alves · catarinaalves.com",
  },
};

function Index() {
  const [lang, setLang] = useState<Lang>("pt");
  const [sent, setSent] = useState(false);
  const c = t[lang];

  const milestoneImages = [journeyStage, journeySash, journeyCrown];
  const gallery = [
    { src: galleryPortrait, alt: "Catarina Alves crowned on stage", ratio: "aspect-[4/5]", w: 800, h: 1000 },
    { src: video1Poster, video: video1.url, alt: "Crowning moment video", ratio: "aspect-square", w: 800, h: 800 },
    { src: galleryGown, alt: "Catarina Alves in her beaded gown", ratio: "aspect-square", w: 800, h: 800 },
    { src: video2Poster, video: video2.url, alt: "Celebration video", ratio: "aspect-[4/5]", w: 800, h: 1000 },
    { src: galleryCrowd, alt: "Catarina Alves greeting the crowd", ratio: "aspect-[4/5]", w: 800, h: 1000 },
    { src: video3Poster, video: video3.url, alt: "Finale video", ratio: "aspect-square", w: 800, h: 800 },
    { src: galleryTiara, alt: "Catarina Alves with her crown and bouquet", ratio: "aspect-[4/5]", w: 800, h: 1000 },
  ];

  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      {/* NAV + HERO */}
      <header className="relative bg-aurora">
        <div className="glass sticky top-0 z-50 border-b border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="#top" className="flex items-center gap-2 font-display text-2xl tracking-wide">
              <Crown className="size-5 text-gold" aria-hidden />
              Catarina <span className="text-shimmer">Alves</span>
            </a>
            <nav className="hidden items-center gap-8 text-sm text-foreground/70 md:flex">
              <a href="#about" className="transition-colors hover:text-gold">{c.nav.about}</a>
              <a href="#journey" className="transition-colors hover:text-gold">{c.nav.journey}</a>
              <a href="#gallery" className="transition-colors hover:text-gold">{c.nav.gallery}</a>
              <a href="#wishes" className="transition-colors hover:text-gold">{c.nav.wishes}</a>
            </nav>
            <div
              className="glass flex items-center gap-1 rounded-full border border-white/10 p-1 text-xs font-semibold"
              role="group"
              aria-label="Language / Idioma"
            >
              {(["en", "pt"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`rounded-full px-3 py-1 uppercase transition-colors ${
                    lang === l
                      ? "bg-gold text-primary-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <section id="top" className="relative">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 pb-16 md:grid-cols-[1.15fr_0.85fr] md:pt-28 md:pb-24">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold md:text-sm">
                <span className="orn" aria-hidden /> {c.heroKicker}
              </p>
              <h1 className="font-display text-6xl leading-none text-balance md:text-8xl">
                Catarina <span className="text-shimmer italic">Alves</span>
              </h1>
              <p className="mt-6 max-w-[56ch] text-base text-pretty text-foreground/70 md:text-lg">
                {c.heroSubtitle}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#wishes"
                  className="rounded-full bg-gold py-2.5 pr-4 pl-5 text-sm font-semibold text-primary-foreground ring-1 ring-gold/40 transition hover:brightness-110"
                >
                  {c.heroCtaPrimary}
                </a>
                <a
                  href="#journey"
                  className="rounded-full border border-white/15 py-2.5 pr-4 pl-5 text-sm font-medium text-foreground/80 transition hover:border-gold/50 hover:text-gold"
                >
                  {c.heroCtaSecondary}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[min(3vw,28px)] border border-gold/30" aria-hidden />
              <img
                src={heroPortrait}
                alt="Catarina Alves, Miss Ícolo & Bengo, crowned and waving with her bouquet"
                width={1024}
                height={1365}
                className="relative aspect-[3/4] w-full rounded-[min(3vw,28px)] object-cover object-top"
              />
            </div>
          </div>
        </section>
      </header>

      {/* ABOUT */}
      <section id="about" className="bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <img
              src={aboutSash}
              alt="Catarina Alves seated on the winner's throne after being crowned"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full rounded-[min(2.5vw,16px)] object-cover"
            />
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blush">{c.aboutKicker}</p>
              <h2 className="font-display text-4xl leading-tight text-balance md:text-5xl">
                {c.aboutTitle}
              </h2>
              <div className="orn my-6" aria-hidden />
              <p className="text-base text-pretty text-foreground/70">{c.aboutBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold">{c.journeyKicker}</p>
          <h2 className="max-w-[48ch] font-display text-4xl leading-tight text-balance md:text-5xl">
            {c.journeyTitle}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.milestones.map((m, i) => (
              <article
                key={m.title}
                className="glass rounded-[min(2vw,16px)] border border-white/10 p-6 transition hover:border-gold/40"
              >
                <img
                  src={milestoneImages[i]}
                  alt={m.title}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="mb-4 aspect-[4/5] w-full rounded-[min(1.5vw,10px)] object-cover object-top"
                />
                <h3 className="font-display text-2xl text-gold-soft">{m.title}</h3>
                <p className="mt-1 text-sm text-pretty text-foreground/60">{m.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-blush">{c.galleryKicker}</p>
          <h2 className="max-w-[48ch] font-display text-4xl leading-tight text-balance md:text-5xl">
            {c.galleryTitle}
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((g) => (
              <figure key={g.src} className="relative">
                {g.video ? (
                  <>
                    <video
                      src={g.video}
                      poster={g.src}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={g.alt}
                      className={`${g.ratio} w-full rounded-[min(1.5vw,10px)] bg-black object-cover`}
                    />
                    <figcaption className="pointer-events-none absolute top-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-md">
                      {c.videoBadge}
                    </figcaption>
                  </>
                ) : (
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                    className={`${g.ratio} w-full rounded-[min(1.5vw,10px)] object-cover`}
                  />
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* WISHES */}
      <section id="wishes" className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold">{c.wishesKicker}</p>
          <h2 className="max-w-[48ch] font-display text-4xl leading-tight text-balance md:text-5xl">
            {c.wishesTitle}
          </h2>
          <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
            <figure className="glass rounded-[min(2vw,16px)] border border-white/10 p-8">
              <blockquote className="max-w-[48ch] font-display text-3xl leading-tight italic text-gold-soft">
                {c.featuredQuote}
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-foreground/50">
                {c.featuredAuthor}
              </figcaption>
            </figure>
            <form
              className="glass space-y-4 rounded-[min(2vw,16px)] border border-white/10 p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label htmlFor="wish-name" className="mb-2 block text-xs uppercase tracking-[0.2em] text-foreground/50">
                  {c.formName}
                </label>
                <input
                  id="wish-name"
                  type="text"
                  required
                  placeholder={c.formNamePlaceholder}
                  className="w-full rounded-lg border border-white/10 bg-ink-2 px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 focus:border-gold/60 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="wish-message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-foreground/50">
                  {c.formMessage}
                </label>
                <textarea
                  id="wish-message"
                  rows={3}
                  required
                  placeholder={c.formMessagePlaceholder}
                  className="w-full resize-none rounded-lg border border-white/10 bg-ink-2 px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 focus:border-gold/60 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gold py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                {c.formSubmit}
              </button>
              {sent && <p className="text-center text-sm text-gold-soft">{c.formThanks}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <p className="font-display text-3xl text-balance">{c.footerLine}</p>
          <div className="orn mx-auto my-6" aria-hidden />
          <div className="flex items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-foreground/50">
            <a href="#" aria-label="Instagram" className="flex items-center gap-2 transition-colors hover:text-gold">
              <Instagram className="size-4" /> Instagram
            </a>
            <a href="#" aria-label="YouTube" className="flex items-center gap-2 transition-colors hover:text-gold">
              <Youtube className="size-4" /> YouTube
            </a>
            <a href="#" aria-label="Facebook" className="flex items-center gap-2 transition-colors hover:text-gold">
              <Facebook className="size-4" /> Facebook
            </a>
          </div>
          <p className="mt-8 text-[11px] tracking-wide text-foreground/30">{c.footerCopyright}</p>
        </div>
      </footer>
    </div>
  );
}
