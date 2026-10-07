import Image from "next/image";
import { Barlow_Condensed, DM_Sans } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const products = [
  {
    id: "crest-black",
    name: "LG CREST TEE",
    color: "BLACK",
    alt: "LG Crest Tee Black",
    front: "/lg-crest-black-front.png",
    back: "/lg-crest-black-back.png",
    className: "",
  },
  {
    id: "crest-sky",
    name: "LG CREST TEE",
    color: "SKY",
    alt: "LG Crest Tee Sky",
    front: "/lg-crest-sky-front.png",
    back: "/lg-crest-sky-back.png",
    className: "",
  },
  {
    id: "gatekeeper",
    name: "LG GATEKEEPER SHIRT",
    color: "TAN",
    alt: "LG Gatekeeper Shirt Tan",
    front: "/lg-gatekeeper-front-v3.png",
    back: "/lg-gatekeeper-back-v3.png",
    className: "productGatekeeper",
  },
  {
    id: "track-jacket-navy",
    name: "LG TRACK JACKET",
    color: "NAVY",
    alt: "LG Track Jacket Navy",
    front: "/lg-track-jacket-navy-front.png",
    back: "/lg-track-jacket-navy-back.png",
    className: "",
  },
  {
    id: "sweatpants-navy",
    name: "LG SWEATPANTS",
    color: "NAVY",
    alt: "LG Sweatpants Navy",
    front: "/lg-sweatpants-navy-front.png",
    back: "/lg-sweatpants-navy-back.png",
    className: "",
  },
  {
    id: "baseball-jacket-red-cream",
    name: "LG BASEBALL JACKET",
    color: "RED / CREAM",
    alt: "LG Baseball Jacket Red and Cream",
    front: "/lg-baseball-jacket-red-cream-front.png",
    back: "/lg-baseball-jacket-red-cream-back.png",
    className: "",
  },
];

export default function Home() {
  return (
    <main className={`site ${barlowCondensed.variable} ${dmSans.variable}`}>
      {/* HEADER */}
      <header className="header">
        <nav className="nav navLeft">
          <a href="#new">SHOP</a>
          <a href="#new">COLLECTION</a>
        </nav>

        <a className="brandMark" href="#" aria-label="Lambo Geez home">
          <Image
            src="/lamboslogo.png"
            alt="Lambo Geez"
            width={120}
            height={120}
            priority
            quality={100}
          />
        </a>

        <nav className="nav navRight">
          <button type="button">SEARCH</button>
          <a href="#cart">CART (0)</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroInner">
          <div className="heroPhotos">
            <div className="heroPhoto heroPhotoLeft">
              <Image
                src="/lambo-geez-nightlife.png"
                alt="Lambo Geez campaign"
                fill
                priority
                quality={100}
                sizes="(max-width: 800px) 100vw, (max-width: 1500px) 47vw, 700px"
              />
            </div>

            <div className="heroPhoto heroPhotoRight">
              <Image
                src="/lambo-geez-hero.png"
                alt="Lambo Geez campaign"
                fill
                priority
                quality={100}
                sizes="(max-width: 800px) 100vw, (max-width: 1500px) 47vw, 700px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRAND DIVIDER */}
      <section className="brandDivider" aria-label="Lambo Geez">
        <div className="dividerLine" />

        <div className="dividerCenter">
          <Image
            src="/lamboslogo.png"
            alt="Lambo Geez"
            width={72}
            height={72}
            quality={100}
          />
        </div>

        <div className="dividerLine" />
      </section>

      {/* UPCOMING COLLECTION */}
      <section className="newArrivals" id="new">
        <div className="sectionHeader">
          <h2>THE UPCOMING COLLECTION</h2>
        </div>

        <div className="productGrid">
          {products.map((product) => (
            <article
              key={product.id}
              className={`product ${product.className}`.trim()}
            >
              <div className="productImage productMockup">
                <span className="productStatus">COMING SOON</span>

                <Image
                  className="productMockupFront"
                  src={product.front}
                  alt={`${product.alt} front`}
                  fill
                  quality={100}
                  sizes="(max-width: 800px) 100vw, 33vw"
                />

                <Image
                  className="productMockupBack"
                  src={product.back}
                  alt={`${product.alt} back`}
                  fill
                  quality={100}
                  sizes="(max-width: 800px) 100vw, 33vw"
                />
              </div>

              <div className="productInfo">
                <h3>{product.name}</h3>
                <p>{product.color}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BRAND */}
      <section className="brandSection">
        <div className="brandLayout">
          <div className="brandContent">
            <p className="brandEyebrow">LAMBO GEEZ</p>

            <h2>
              NO FOLLOWING
              <br />
              THE CROWD.
            </h2>

            <p className="brandStatement">
              CLOTHING FOR THOSE WHO
              <br />
              MOVE ON THEIR OWN TERMS.
            </p>
          </div>

          <div className="brandCampaignImage">
            <Image
              src="/lambo-geez-brand.png"
              alt="Lambo Geez campaign"
              fill
              quality={100}
              sizes="(max-width: 800px) 100vw, 44vw"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footerFeature">
          <h2>LAMBO GEEZ</h2>

          <div className="footerSocials">
            <a
              className="socialRow"
              href="https://music.apple.com/ca/artist/lambo-geez/1781774148"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialIcon socialIconApple">
                <Image
                  src="/apple-music.png"
                  alt=""
                  width={64}
                  height={64}
                  quality={100}
                />
              </span>

              <span className="socialText">
                <span className="socialPlatform">APPLE MUSIC</span>
                <span className="socialHandle">LAMBO GEEZ</span>
              </span>
            </a>

            <a
              className="socialRow"
              href="https://open.spotify.com/artist/5bgjOavjNLTuKVBUjGiTwh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialIcon socialIconSpotify">
                <Image
                  src="/spotify.png"
                  alt=""
                  width={64}
                  height={64}
                  quality={100}
                />
              </span>

              <span className="socialText">
                <span className="socialPlatform">SPOTIFY</span>
                <span className="socialHandle">LAMBO GEEZ</span>
              </span>
            </a>

            <a
              className="socialRow"
              href="https://www.instagram.com/lambogeezmusic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialIcon socialIconInstagram">
                <Image
                  src="/instagram.png"
                  alt=""
                  width={64}
                  height={64}
                  quality={100}
                />
              </span>

              <span className="socialText">
                <span className="socialPlatform">INSTAGRAM</span>
                <span className="socialHandle">@LAMBOGEEZMUSIC</span>
              </span>
            </a>

            <a
              className="socialRow"
              href="https://www.youtube.com/@lambogeezmusic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialIcon socialIconYoutube">
                <Image
                  src="/youtube.png"
                  alt=""
                  width={64}
                  height={64}
                  quality={100}
                />
              </span>

              <span className="socialText">
                <span className="socialPlatform">YOUTUBE</span>
                <span className="socialHandle">LAMBO GEEZ</span>
              </span>
            </a>
          </div>
        </div>

        <div className="footerBottom">
          <div className="footerLeft">
            <a href="#">CONTACT</a>
            <a href="#">SHIPPING &amp; RETURNS</a>
          </div>

          <p>© 2026 LAMBO GEEZ</p>

          <div className="footerRight">
            <a href="#">TERMS</a>
            <a href="#">PRIVACY</a>
          </div>
        </div>
      </footer>
    </main>
  );
}