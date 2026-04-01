import { Mail, MapPin, Phone } from "lucide-react";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer
      className="text-white"
      style={{ background: "oklch(0.22 0.10 22)" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-lg font-serif mb-2">SIBM NOIDA</div>
          <p className="text-white/70 text-sm leading-relaxed">
            Symbiosis Institute of Business Management, Noida – A premier
            institution for management education.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-white/50">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              "Home",
              "About Us",
              "Programs",
              "Admissions",
              "Results",
              "Contact",
            ].map((l) => (
              <li key={l}>
                <button
                  type="button"
                  className="hover:text-white transition-colors"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-white/50">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2 items-start">
              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>admissions@sibmnoida.edu.in</span>
            </li>
            <li className="flex gap-2 items-start">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>+91-120-4567890</span>
            </li>
            <li className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Sector 62, Noida, UP – 201309</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-white/50">
            Campus Info
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>MBA Program – 2026-28</li>
            <li>NAAC A+ Accredited</li>
            <li>AICTE Approved</li>
            <li>Ranked among Top 50 B-Schools</li>
          </ul>
        </div>
      </div>
      <div
        className="border-t px-4 py-4 text-center text-xs text-white/50"
        style={{ borderColor: "oklch(0.30 0.10 22)" }}
      >
        <p>
          © {year} SIBM Noida. All rights reserved. &nbsp;|&nbsp; Built with ❤️
          using{" "}
          <a
            href={utm}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
