

export default function Profile({ data }) {
  return (
    <div className="flex flex-col items-center text-center mb-7">

      {/* Avatar */}
      <div className="relative mb-5 group">
        <div className="absolute inset-0 rounded-full bg-[#427A5B] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-110"></div>
        <img
          src={data.avatarUrl}
          alt="Profile Avatar"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Name */}
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-2 tracking-tight leading-tight">
        {data.name}
      </h1>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#427A5B] to-[#5a9e78]
                      text-white px-4 py-2 rounded-full text-xs font-semibold
                      shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-default">
        {data.badgeText}
      </div>
    </div>
  );
}
