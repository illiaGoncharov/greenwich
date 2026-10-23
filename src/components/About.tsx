import { Section } from "./Section";

export function About() {
  return (
    <Section
      className="about"
      id="about"
      aria-labelledby="about__heading"
      title="About us"
    >
      <p className="article__text_type_small" id="about__heading">
        Established in 2021, Greenwich Cultural Services was born from a desire
        to bring art and artists to a wider audience.
      </p>
      <p className="article__text_type_small">
        We believe that culture is paramount to civilisation and that visual art
        is one of the most important modes of expression available to us. Our
        mission is to support living artists as a way of preserving cultural
        capital for future generations. We forge relationships between companies
        and contemporary artists to create brand awareness and credibility,
        while ensuring ongoing support for the visual arts and opening new
        spaces for creative partnerships.
      </p>
      <p className="article__text_type_small">
        GCS was created by Rita Almeida Freitas and Marisa Bellani, two
        contemporary art professionals who saw the need to respond to social and
        environmental issues through art. With this objective at the core of the
        company, we commit to proposing a diverse range of sustainable solutions
        and to working with companies with the same goals.
      </p>
      <p className="article__text_type_small">
        Our founders Rita and Marisa are professionals from the art industry
        with 20 years of combined experience. Highly knowledgeable in
        contemporary art and well equipped to navigate the market, we provide
        easy access to a global network of artists, galleries, and curators.
      </p>
    </Section>
  );
}
