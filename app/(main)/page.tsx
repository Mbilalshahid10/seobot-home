import dynamic from "next/dynamic";
import { SECTION_MAP } from "@/components/landing/section-map";
import { getLayout, validateAllLayouts } from "@/lib/page-layout";

const SmoothScrollAnchors = dynamic(
  () => import("@/components/SmoothScrollAnchors"),
  { ssr: false }
);

const SectionTracker = dynamic(
  () => import("@/components/SectionTracker"),
  { ssr: false }
);

// Runs at module-eval time (during next build SSR or next dev first request).
// Validates ALL layouts in LAYOUT_MAP — catches duplicates and unknown keys.
validateAllLayouts();

export default function Home() {
  const layout = getLayout();
  return (
    <div className="landing-page-scope bg-bg-warm text-text-primary">
      <SmoothScrollAnchors />
      <SectionTracker />
      {layout.sections
        .filter((s) => s.enabled !== false)
        .map((s) => {
          const Component = SECTION_MAP[s.key];
          return <Component key={s.key} />;
        })}
    </div>
  );
}
