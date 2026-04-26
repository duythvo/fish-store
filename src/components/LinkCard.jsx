import { Globe, ChevronRight, Link as LinkIcon } from 'lucide-react';
import { FaFacebook, FaStore } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { ZaloIcon } from './ZaloIcon';

// Map key → icon component
const IconMap = {
  'globe': Globe,
  'message-circle': ZaloIcon,   // Zalo
  'facebook': FaFacebook,      // Facebook
  'music': null,   // TikTok — rendered via FontAwesomeIcon below
  'store': FaStore,
};

const ColorMap = {
  'blue': 'border-blue-200 hover:border-blue-400',
  'green': 'border-[#427A5B]/30 hover:border-[#427A5B]',
  'black': 'border-slate-200 hover:border-slate-500',
  'red': 'border-red-200 hover:border-red-400',
};

const BackgroundIconColorMap = {
  'blue': 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
  'green': 'bg-green-50 text-[#427A5B] group-hover:bg-green-100',
  'black': 'bg-slate-100 text-slate-700 group-hover:bg-slate-200',
  'red': 'bg-red-50 text-red-600 group-hover:bg-red-100',
};

const TextColorMap = {
  'blue': 'text-blue-600',
  'green': 'text-[#427A5B]',
  'black': 'text-slate-700',
  'red': 'text-red-600',
};

const AccentBarColorMap = {
  'blue': 'bg-blue-500',
  'green': 'bg-[#427A5B]',
  'black': 'bg-slate-700',
  'red': 'bg-red-500',
};

export default function LinkCard({ link, index }) {
  const IconComponent = IconMap[link.icon?.toLowerCase()] || LinkIcon;
  const colorClass = ColorMap[link.color?.toLowerCase()] || ColorMap['blue'];
  const bgIconColor = BackgroundIconColorMap[link.color?.toLowerCase()] || BackgroundIconColorMap['blue'];
  const textColor = TextColorMap[link.color?.toLowerCase()] || TextColorMap['blue'];
  const accentBar = AccentBarColorMap[link.color?.toLowerCase()] || AccentBarColorMap['blue'];

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between
        p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8
        bg-white border-2 ${colorClass} rounded-2xl
        shadow-sm hover:shadow-lg
        transition-all duration-300 hover:-translate-y-0.5
        relative overflow-hidden`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${accentBar} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300`}></div>

      <div className="flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 relative z-10">
        {/* Icon box */}
        <div className={`
          w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20
          rounded-xl flex items-center justify-center shrink-0
          transition-colors duration-300 ${bgIconColor}
        `}>
          {link.icon?.toLowerCase() === 'music' ? (
            <FontAwesomeIcon
              icon={faTiktok}
              className="!w-5 !h-5 sm:!w-6 sm:!h-6 md:!w-7 md:!h-7 lg:!w-8 lg:!h-8 xl:!w-9 xl:!h-9"
            />
          ) : (
            <IconComponent
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9"
            />
          )}
        </div>

        {/* Label */}
        <span className={`font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-700 group-hover:${textColor} transition-colors`}>
          {link.label}
        </span>
      </div>

      <ChevronRight
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-slate-300 group-hover:text-slate-500 transition-all relative z-10 transform group-hover:translate-x-1 duration-300 shrink-0"
      />
    </a>
  );
}
