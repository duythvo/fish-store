import { ExternalLink, MapPin, Phone } from 'lucide-react';

export default function Footer({ description, mapUrl, phoneLink }) {
  return (
    <footer className="w-full mt-6 border-t border-slate-200">
      <div className="flex flex-col items-center gap-3 py-5 px-4">

        {/* Address */}
        {description && mapUrl && (
          <div className="w-full max-w-xs sm:max-w-sm rounded-2xl border border-[#427A5B]/15 bg-white px-4 py-3 shadow-sm">
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-xs sm:text-sm text-slate-500 leading-relaxed transition-colors hover:text-slate-700"
              aria-label={`Mở Google Maps cho địa chỉ ${description}`}
              title="Mở Google Maps"
            >
              <MapPin size={14} className="flex-shrink-0 text-[#427A5B] transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="min-w-0 text-left">
                <span>{description}</span>
                <span className="ml-1 inline-flex h-5 w-5 align-middle items-center justify-center rounded-full text-[#427A5B] transition-colors group-hover:bg-[#427A5B]/10 group-hover:text-[#2f5d40]">
                  <ExternalLink size={12} />
                  <span className="sr-only">Mở Google Maps</span>
                </span>
              </span>
            </a>
          </div>
        )}

        {/* Phone link button */}
        {phoneLink && (
          <a
            href={phoneLink.url}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#427A5B] to-[#5a9e78]
                       text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-md
                       hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
          >
            <Phone size={13} />
            {phoneLink.label}
          </a>
        )}

      </div>
    </footer>
  );
}
