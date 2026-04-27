import { Globe, ChevronRight, Link as LinkIcon, Phone } from 'lucide-react';
import { FaFacebook, FaStore } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { ZaloIcon } from './ZaloIcon';

const IconMap = {
  'globe': Globe,
  'message-circle': ZaloIcon,
  'facebook': FaFacebook,
  'music': null,   // TikTok — rendered via FontAwesomeIcon
  'store': FaStore,
  'phone': Phone,
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
  const isPhone = link.icon?.toLowerCase() === 'phone';
  const isTiktok = link.icon?.toLowerCase() === 'music';

  const IconComponent = IconMap[link.icon?.toLowerCase()] || LinkIcon;
  const colorClass = ColorMap[link.color?.toLowerCase()] || ColorMap['blue'];
  const bgIconColor = BackgroundIconColorMap[link.color?.toLowerCase()] || BackgroundIconColorMap['blue'];
  const textColor = TextColorMap[link.color?.toLowerCase()] || TextColorMap['blue'];
  const accentBar = AccentBarColorMap[link.color?.toLowerCase()] || AccentBarColorMap['blue'];

  if (isPhone) {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between
          p-3.5 sm:p-4
          bg-gradient-to-r from-[#427A5B] to-[#5a9e78]
          border-2 border-[#427A5B]
          rounded-2xl shadow-lg hover:shadow-xl
          transition-all duration-300 hover:-translate-y-0.5
          relative overflow-hidden"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
          -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />


        <div className="flex items-center gap-3 relative z-10 min-w-0">
          {/* Icon box */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0
            bg-white/20 text-white group-hover:bg-white/30 transition-colors duration-300">
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>

          {/* Label */}
          <span className="font-bold text-sm sm:text-base text-white truncate whitespace-nowrap">
            {link.label}
          </span>
        </div>

        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white
          transition-all relative z-10 transform group-hover:translate-x-1 duration-300 shrink-0" />
      </a>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between
        p-3.5 sm:p-4
        bg-white border-2 ${colorClass} rounded-2xl
        shadow-sm hover:shadow-md
        transition-all duration-300 hover:-translate-y-0.5
        relative overflow-hidden`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${accentBar} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300`} />

      <div className="flex items-center gap-3 relative z-10 min-w-0">
        {/* Icon box */}
        <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${bgIconColor}`}>
          {isTiktok ? (
            <FontAwesomeIcon
              icon={faTiktok}
              className="!w-4 !h-4 sm:!w-5 sm:!h-5"
            />
          ) : (
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </div>

        {/* Label */}
        <span className={`font-semibold text-sm sm:text-base text-slate-700 group-hover:${textColor} transition-colors truncate whitespace-nowrap`}>
          {link.label}
        </span>
      </div>

      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-slate-500 transition-all relative z-10 transform group-hover:translate-x-1 duration-300 shrink-0" />
    </a>
  );
}
