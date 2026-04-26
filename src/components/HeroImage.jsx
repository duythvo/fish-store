export default function HeroImage({ imageUrl }) {
  return (
    <div className="w-full h-full min-h-screen overflow-hidden relative">
      {/* Gradient overlay for aesthetics */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/60 via-transparent to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none"></div>

      <img
        src={imageUrl}
        alt="Featured Aquascape"
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2000ms] ease-out"
      />

      {/* Bottom label removed */}
    </div>
  );
}
