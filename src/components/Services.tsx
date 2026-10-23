import { Section } from "./Section";

const items = [
  "Implementing an art program: exhibition or events with emerging to established artists",
  "Intermediating sponsorships to support the project",
  "Providing advisory services to building an art collection.",
];

export function Services() {
  return (
    <Section
      className="services"
      aria-labelledby="services__heading"
      title="OUR SERVICES"
    >
      <p className="article__text_type_small" id="services__heading">
        We can employ a range of strategies to create awareness of your
        company&apos;s endeavour and identity. Our services include:
      </p>
      <ul className="article__list">
        {items.map((text) => (
          <li className="article__list-item" key={text}>
            <p className="article__text_type_small">{text}</p>
          </li>
        ))}
      </ul>
      <p className="article__text_type_small">
        We propose solutions that span across all media to adapt to the sites
        &amp; budgets, such as murals, paintings, sculpture, photography, to
        more contemporary and/or technological like digital art, installations,
        video, light installations, performance.
      </p>
    </Section>
  );
}
