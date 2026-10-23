import { Section } from "./Section";

interface FounderProps {
  className: string;
  name: string;
  headingId: string;
  bio: string;
}

export function Founder({ className, name, headingId, bio }: FounderProps) {
  return (
    <Section
      className={className}
      aria-labelledby={headingId}
      title={name}
    >
      <p className="article__text_type_small" id={headingId}>
        {bio}
      </p>
    </Section>
  );
}

export const marisaBio =
  "Marisa is the founder and creative director of Roman Road, a contemporary art gallery in London. The gallery has recently redefined itself with a more fluid and ethical approach, becoming a platform for collaborative exhibitions in 2019. Since 2020, Marisa has organised art residencies in London. She has been running the company since 2013, following and fostering notable projects and dealing with artists all over the world. Roman Road has established a qualitative and thematic programme and realised the creation of a research cell and Roman Road Journal in 2018, an online platform dedicated to publishing articles and exploring topics on art, science, technology, anthropology and literature. Marisa has completed two master degree courses, first at the Institut d’Études Supérieures des Arts and subsequently at Sotheby’s Institute of Art. She has held a seat and became the youngest member of one of the Tate’s Acquisition Committees and regularly participates in panel discussions and portfolio reviews, and gives talks at art universities.";

export const ritaBio =
  "Rita is a Lisbon-based art advisor working for a diverse range of clients worldwide. Before co-founding Imaginalis, Rita previously worked at Phillips de Pury (London) and Serralves Foundation, was a nominator for the FT Oppenheimer Funds Emerging Voices Award and has collaborated with ARCO art fair as a collector's liaison. Rita is also the co-founder of The SPOT: Sculpture Park and Outdoor Tendencies and a guest lecturer in the Art Market Post-Graduate program at Universidade Nova (Lisboa). Rita has completed her Business and Administration degree at the Católica Business School and her Masters at Sotheby’s Institute of Art (Art Business) and Christie’s Education (Post-war and Contemporary Art). The years spent in Paris, London and São Paulo allied to her extensive travels have provided her an excellent worldwide network, including private collectors, art dealers, curators and artists, therefore offering a privileged access to distinct art market sectors.";
