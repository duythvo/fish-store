import { BadgeCheck } from 'lucide-react';

export default function Profile({ data }) {
  return (
    <div className="flex flex-col items-center text-center mb-8 md:mb-10 lg:mb-12 xl:mb-12">

      {/* Avatar */}
      <div className="relative mb-5 md:mb-7 lg:mb-8 xl:mb-9 group">
        <div className="absolute inset-0 rounded-full bg-[#427A5B] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-110"></div>
        <img
          src={data.avatarUrl}
          alt="Profile Avatar"
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56
                     rounded-full object-cover border-4 border-white shadow-2xl
                     relative z-10 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-slate-800 mb-2 md:mb-3 xl:mb-5 tracking-tight leading-tight">
        {data.name}
      </h1>

      {/* Description */}
      <p className="text-slate-500 mb-5 md:mb-7 xl:mb-9 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs md:max-w-sm xl:max-w-md leading-relaxed">
        {data.description}
      </p>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 xl:gap-3 bg-gradient-to-r from-[#427A5B] to-[#5a9e78]
                      text-white px-5 py-2.5 md:px-7 md:py-3 lg:px-8 lg:py-3.5 xl:px-9 xl:py-5
                      rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                      font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-default">
        <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white shrink-0" />
        {data.badgeText}
      </div>
    </div>
  );
}
