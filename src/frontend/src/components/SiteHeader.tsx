const NAV_LINKS = [
  "Home",
  "About",
  "Programs",
  "Admissions",
  "Results",
  "Contact",
];

export default function SiteHeader() {
  return (
    <header>
      <div className="bg-white border-b border-border px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ background: "oklch(0.38 0.17 22)" }}
          >
            SN
          </div>
          <div>
            <div
              className="text-xl font-bold font-serif tracking-wide"
              style={{ color: "oklch(0.38 0.17 22)" }}
            >
              SIBM NOIDA
            </div>
            <div className="text-xs text-muted-foreground">
              Symbiosis Institute of Business Management, Noida
            </div>
          </div>
        </div>
      </div>
      <nav className="px-4" style={{ background: "oklch(0.38 0.17 22)" }}>
        <div className="max-w-6xl mx-auto flex items-center gap-1 overflow-x-auto">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link}
              data-ocid={`nav.${link.toLowerCase()}.link`}
              className="px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {link}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
