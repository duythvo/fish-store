import { Share2, Settings } from 'lucide-react';

export default function Header({ title }) {
  return (
    <header className="flex items-center justify-between py-4 px-6 mb-4 md:mb-8">
      {/* <h1 className="text-xl font-bold text-slate-800 tracking-tight">
        {title}
      </h1> */}
      {/* <div className="flex items-center gap-4 text-slate-500">
        <button className="hover:text-slate-800 transition-colors cursor-pointer" aria-label="Share">
          <Share2 size={20} />
        </button>
        <button className="hover:text-slate-800 transition-colors cursor-pointer" aria-label="Settings">
          <Settings size={20} />
        </button>
      </div> */}
    </header>
  );
}
