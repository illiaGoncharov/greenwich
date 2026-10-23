import { Section } from "./Section";

const countries = [
  "UK",
  "France",
  "Switzerland",
  "Portugal",
  "Brazil",
  "Australia",
  "Belgium",
  "Mexico",
];

export function World() {
  return (
    <Section
      className="world"
      aria-labelledby="world__heading"
      title="Our world"
    >
      <p className="article__text_type_small" id="world__heading">
        Our vast network of artists, brands and curators extends itself across:
      </p>
      <ul className="article__list">
        {countries.map((name) => (
          <li className="article__list-item" key={name}>
            <p className="article__text_type_small">{name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
