import { asset } from "@/lib/asset";

export function BackgroundStar() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="body__star"
      src={asset("/images/body__star.svg")}
      alt=""
      aria-hidden
    />
  );
}
