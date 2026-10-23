import { asset } from "@/lib/asset";

export function Contact() {
  return (
    <article
      className="contact"
      id="contact"
      role="article"
      aria-labelledby="contact__heading"
    >
      <article className="article contact__article">
        <div className="article__column-container contact__column-container">
          <div className="article__column contact__column">
            <h3 className="article__h3 contact__h3" id="contact__heading">
              Contact us
            </h3>
            <p className="article__text_type_small contact__text_type_small">
              To enquire about our services and fees, please contact us! <br />
              <a href="mailto:hello@culturalservices.art">
                hello@culturalservices.art
              </a>
            </p>
          </div>
        </div>
      </article>
      <article className="article contact__article">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/inst.svg")} alt="" />
        </a>
      </article>
    </article>
  );
}
