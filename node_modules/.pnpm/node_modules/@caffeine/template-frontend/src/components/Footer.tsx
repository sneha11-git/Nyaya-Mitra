import { Heart, Scale } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full gradient-saffron flex items-center justify-center">
              <Scale className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-saffron">
              NyayMitra
            </span>
            <span className="text-muted-foreground text-sm font-body">
              — Your trusted legal companion
            </span>
          </div>
          <div className="text-sm text-muted-foreground font-body">
            <span>© {year}. Built with </span>
            <Heart className="inline w-3.5 h-3.5 text-destructive fill-destructive" />
            <span> using </span>
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:underline"
            >
              caffeine.ai
            </a>
          </div>
          <div className="text-xs text-muted-foreground font-body text-center md:text-right max-w-xs">
            This platform provides general legal information only. Always
            consult a qualified advocate for professional legal advice.
          </div>
        </div>
      </div>
    </footer>
  );
}
