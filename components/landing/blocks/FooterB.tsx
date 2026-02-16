import { content } from "@/lib/content";
import Logo from "@/components/Logo";

const c = content.footer;
const brand = content.brand;

export function FooterB() {
  const year = brand.copyrightYear ?? new Date().getFullYear().toString();
  const copyright = c?.copyright ?? `\u00A9 ${year} ${brand.name}. All rights reserved.`;

  return (
    <footer className="py-16 bg-dark-bg text-white">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Top row: Logo + link group columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Logo href="/" />
          </div>

          {/* Link group columns */}
          {c?.linkGroups ? (
            c.linkGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-text-secondary hover:text-white transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))
          ) : c?.links ? (
            <nav aria-label="Footer links">
              <ul className="space-y-3">
                {c.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

        {/* Horizontal divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-text-secondary text-center">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
