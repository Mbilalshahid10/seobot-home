import { content } from "@/lib/content";

const c = content.footer;
const brand = content.brand;

export function Footer() {
  const year = brand.copyrightYear ?? new Date().getFullYear().toString();
  const copyright = c?.copyright ?? `\u00A9 ${year} ${brand.name}. All rights reserved.`;

  return (
    <footer className="py-10 bg-dark-bg border-t border-dark-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>{copyright}</p>
          </div>
          {c?.links && (
            <nav aria-label="Footer" className="flex gap-6 mt-4 md:mt-0">
              {c.links.map((link) => (
                <a key={link.href} className="hover:text-white transition-colors" href={link.href}>
                  {link.text}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </footer>
  );
}
