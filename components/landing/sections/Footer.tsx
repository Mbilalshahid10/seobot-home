export function Footer() {
  return (
    <footer className="py-10 bg-dark-bg border-t border-dark-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>&copy; 2026 Seoscribed. All rights reserved.</p>
          </div>
          <nav aria-label="Footer" className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-white transition-colors" href="/privacy">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="/terms">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
