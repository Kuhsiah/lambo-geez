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

export default function Home() {
  return (
    <main className={`site ${barlowCondensed.variable} ${dmSans.variable}`}>
      {/* HEADER */}
      <header className="header">
        <nav className="nav navLeft">
          <a href="#shop">SHOP</a>
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
                sizes="(max-width: 800px) 50vw, (max-width: 1500px) 47vw, 700px"
              />
            </div>

            <div className="heroPhoto heroPhotoRight">
              <Image
                src="/lambo-geez-hero.png"
                alt="Lambo Geez campaign"
                fill
                priority
                quality={100}
                sizes="(max-width: 800px) 50vw, (max-width: 1500px) 47vw, 700px"
              />
            </div>
          </div>

          <div className="heroCopy">
            <h1>COMING SOON.</h1>
            <p>The next Lambo Geez collection is on the way.</p>
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
          {/* BLACK CREST TEE */}
          <article className="product">
            <div className="productImage productMockup">
              <span className="productStatus">COMING SOON</span>

              <Image
                className="productMockupFront"
                src="/lg-crest-black-front.png"
                alt="LG Crest Tee Black front"
                fill
                quality={100}
                sizes="(max-width: 800px) 100vw, 33vw"
              />

              <Image
                className="productMockupBack"
                src="/lg-crest-black-back.png"
                alt="LG Crest Tee Black back"
                fill
                quality={100}
                sizes="(max-width: 800px) 100vw, 33vw"
              />
            </div>

            <div className="productInfo">
              <h3>LG CREST TEE</h3>
              <p>BLACK</p>
            </div>
          </article>

          {/* SKY CREST TEE */}
          <article className="product">
            <div className="productImage productMockup">
              <span className="productStatus">COMING SOON</span>

              <Image
                className="productMockupFront"
                src="/lg-crest-sky-front.png"
                alt="LG Crest Tee Sky front"
                fill
                quality={100}
                sizes="(max-width: 800px) 100vw, 33vw"
              />

              <Image
                className="productMockupBack"
                src="/lg-crest-sky-back.png"
                alt="LG Crest Tee Sky back"
                fill
                quality={100}
                sizes="(max-width: 800px) 100vw, 33vw"
              />
            </div>

            <div className="productInfo">
              <h3>LG CREST TEE</h3>
              <p>SKY</p>
            </div>
          </article>

          {/* GATEKEEPER SHIRT */}
          <article className="product productGatekeeper">
            <div className="productImage productMockup">
              <span className="productStatus">COMING SOON</span>

              <Image
                className="productMockupFront"
                src="/lg-gatekeeper-front-v3.png"
                alt="LG Gatekeeper Shirt front"
                fill
                quality={100}
                sizes="(max-width: 800px) 100vw, 33vw"
              />

              <Image
                className="productMockupBack"
                src="/lg-gatekeeper-back-v3.png"
                alt="LG Gatekeeper Shirt back"
                fill
                quality={100}
                sizes="(max-width: 800px) 100vw, 33vw"
              />
            </div>

            <div className="productInfo">
              <h3>LG GATEKEEPER SHIRT</h3>
              <p>TAN</p>
            </div>
          </article>
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
              THE HERD.
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

          <div className="footerInstagram">
            <p>VISIT OUR INSTAGRAM</p>

            <a
              href="https://www.instagram.com/lambogeezmusic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @LAMBOGEEZMUSIC
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