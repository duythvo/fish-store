import { MapPin, Phone } from 'lucide-react';

export default function Footer({ description, phoneLink }) {
  return (
    <footer className="w-full mt-6 border-t border-slate-200">
      <div className="flex flex-col items-center gap-3 py-5 px-4">

        {/* Address */}
        {description && (
          <div className="flex items-start gap-2 text-slate-500 text-xs text-center max-w-xs leading-relaxed">
            <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#427A5B]" />
            <span>{description}</span>
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
