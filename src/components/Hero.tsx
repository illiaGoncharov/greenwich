import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <article className="hero" role="banner" aria-labelledby="hero__heading">
      <div>
        <h1 className="hero__h1" id="hero__heading">
          Greenwich <br /> <span>Cultural Services</span>
        </h1>
        <h2 className="hero__h2">Brand activation through art</h2>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="hero__logo"
        className="hero__image"
        src={asset("/images/hero__logo.svg")}
        alt="Greenwich Cultural Services Logo"
      />
      <a href="#about">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="hero__about"
          className="hero__image"
          src={asset("/images/hero__about.svg")}
          alt="Learn More About Us"
        />
      </a>
      <a href="#contact">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="hero__contact"
          className="hero__image"
          src={asset("/images/hero__contact.svg")}
          alt="Contact Us"
        />
      </a>
      <div className="hero__red-container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero__red hero__image"
          src={asset("/images/hero__red.svg")}
          alt=""
          aria-hidden
        />
      </div>
      <div className="hero__green-container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero__green hero__image"
          src={asset("/images/hero__green.svg")}
          alt=""
          aria-hidden
        />
      </div>
    </article>
  );
}
