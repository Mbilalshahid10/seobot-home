import Logo from "@/components/Logo";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg-warm border-b border-border-warm">
      <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center">
        <Logo />
      </div>
    </nav>
  );
}
