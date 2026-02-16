import { SECTION_MAP, type SectionKey } from "@/components/landing/section-map";

export interface LayoutEntry {
  key: SectionKey;
  enabled?: boolean; // defaults to true
}

export interface LandingLayoutConfig {
  sections: LayoutEntry[];
}

// Mirrors current hardcoded order exactly
export const defaultLayout: LandingLayoutConfig = {
  sections: [
    { key: "nav_a" },
    { key: "hero_a" },
    { key: "problem_a" },
    { key: "mechanism_a" },
    { key: "offer_a" },
    { key: "faq_a" },
    { key: "footer_a" },
  ],
};

export const layoutB: LandingLayoutConfig = {
  sections: [
    { key: "nav_a" },
    { key: "hero_b" },
    { key: "problem_b" },
    { key: "mechanism_b" },
    { key: "offer_b" },
    { key: "faq_b" },
    { key: "footer_b" },
  ],
};

export const layoutC: LandingLayoutConfig = {
  sections: [
    { key: "nav_a" },
    { key: "hero_a" },
    { key: "problem_c" },
    { key: "mechanism_c" },
    { key: "offer_a" },
    { key: "faq_c" },
    { key: "footer_a" },
  ],
};

export const LAYOUT_MAP: Record<string, LandingLayoutConfig> = {
  default: defaultLayout,
  B: layoutB,
  C: layoutC,
} as const;

export function getLayout(key?: string): LandingLayoutConfig {
  const resolved = key ?? process.env.NEXT_PUBLIC_LAYOUT ?? "default";
  return LAYOUT_MAP[resolved] ?? defaultLayout;
}

export function validateAllLayouts(): void {
  for (const [name, config] of Object.entries(LAYOUT_MAP)) {
    try {
      validateLayout(config);
    } catch (err) {
      throw new Error(
        `Layout "${name}" failed validation: ${err instanceof Error ? err.message : err}`
      );
    }
  }
}

/**
 * Validates a layout config at module-eval time.
 *
 * TypeScript already catches invalid SectionKey literals at compile time;
 * this additionally catches duplicates and guards against dynamic configs.
 */
export function validateLayout(config: LandingLayoutConfig): void {
  const seen = new Set<string>();
  for (const entry of config.sections) {
    if (seen.has(entry.key)) {
      throw new Error(`Duplicate section key: "${entry.key}"`);
    }
    seen.add(entry.key);

    // Runtime guard for dynamic configs — static configs are already
    // validated by TypeScript's SectionKey type at compile time
    if (!(entry.key in SECTION_MAP)) {
      throw new Error(
        `Unknown section key: "${entry.key}". Valid keys: ${Object.keys(SECTION_MAP).join(", ")}`
      );
    }
  }
}
