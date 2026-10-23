import type { ReactNode } from "react";

interface SectionProps {
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
  title: ReactNode;
  children: ReactNode;
}

/** Общая двухколоночная оболочка секций лендинга */
export function Section({
  className = "",
  id,
  "aria-labelledby": ariaLabelledBy,
  title,
  children,
}: SectionProps) {
  return (
    <article
      className={`article ${className}`.trim()}
      id={id}
      role="article"
      aria-labelledby={ariaLabelledBy}
    >
      <div className="article__column-container">
        <div className="article__column">
          <h3 className="article__h3">{title}</h3>
        </div>
        <div className="article__column">{children}</div>
      </div>
    </article>
  );
}
