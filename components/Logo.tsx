import { content } from "@/lib/content";

const brand = content.brand;

export default function Logo({ href }: { href?: string }) {
  const img = (
    <img
      src={brand.logoPath}
      alt={brand.logoAlt ?? brand.name}
      width={240}
      height={160}
      className="h-24 w-auto"
    />
  );

  if (href) {
    return <a href={href}>{img}</a>;
  }

  return img;
}
