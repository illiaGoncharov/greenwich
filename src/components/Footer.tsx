"use client";

import type { FormEvent } from "react";

/** UI-only подписка — как в legacy, без бэкенда */
export function Footer() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <article
      className="article footer"
      role="contentinfo"
      aria-labelledby="footer__heading"
    >
      <div className="article__column-container footer__column-container">
        <div className="article__column">
          <form className="footer__form" onSubmit={handleSubmit} noValidate>
            <input
              className="footer__form_input"
              type="text"
              placeholder="SUBSCRIBE"
              name="name"
              aria-label="Subscribe"
              required
            />
            <button
              type="submit"
              className="article__h3 footer__form_button"
              id="footer__heading"
            >
              SEND
            </button>
          </form>
        </div>
        <div className="article__column">
          <p className="article__text_type_small">
            © 2022 Greenwich Cultural Services.
            <br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </article>
  );
}
