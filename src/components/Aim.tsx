import { Section } from "./Section";

const items = [
  "Bringing you closer to your targeted audience",
  "Enhancing your visibility",
  "Elevating your brand",
  "Developing an increasingly creative work environment, leading to more motivated staff",
  "Shedding a new light on your positioning",
];

export function Aim() {
  return (
    <Section
      className="aim"
      aria-labelledby="aim__heading"
      title={
        <>
          What <br /> we do
        </>
      }
    >
      <p className="article__text_type_small" id="aim__heading">
        We provide bespoke art driven solutions by connecting artists and
        companies to create synergies. By partnering with brands and companies,
        we aim to make contemporary art more accessible and more widely shared
        around the world, while:
      </p>
      <ul className="article__list">
        {items.map((text) => (
          <li className="article__list-item" key={text}>
            <p className="article__text_type_small">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
