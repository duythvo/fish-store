import { getSiteData } from './config/siteData';
import Profile from './components/Profile';
import LinkCard from './components/LinkCard';
import HeroImage from './components/HeroImage';

function App() {
  const siteData = getSiteData();

  return (
    <div className="bg-slate-50 font-sans w-full xl:flex xl:h-screen xl:overflow-hidden">

      {/* Left Column - Content */}
      <div className="w-full xl:w-1/2 xl:h-screen xl:overflow-y-auto">
        <main className="min-h-screen xl:min-h-0 xl:h-full flex flex-col items-center justify-center px-5 py-10">
          <div className="w-full max-w-xs sm:max-w-sm">
            <Profile data={siteData.profile} />
            <div className="mt-5 space-y-3">
              {siteData.links.map((link, index) => (
                <LinkCard key={index} link={link} index={index} />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Right Column - Hero image, ONLY on xl+ */}
      <div className="hidden xl:block xl:w-1/2 xl:h-screen flex-shrink-0">
        <HeroImage imageUrl={siteData.heroImage} />
      </div>

    </div>
  );
}

export default App;