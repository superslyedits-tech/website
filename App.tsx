import React from 'react';
import { Header } from './components/Header';
import { SocialButton } from './components/SocialButton';
import { TipsSection } from './components/TipsSection';
import { AboutSection } from './components/AboutSection';
import { SocialLink } from './types';
import { 
  Instagram, 
  Youtube, 
  Music, 
  Disc, 
  Headphones, 
  ShoppingBag 
} from 'lucide-react';

// Data Definition
const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/slydylan/',
    icon: Instagram,
    isExternal: true
  },
  {
    id: 'youtube',
    label: 'YouTube',
    url: 'https://www.youtube.com/@sly8445',
    icon: Youtube,
    isExternal: true
  },
  {
    id: 'spotify',
    label: 'Spotify',
    url: 'https://open.spotify.com/artist/0zPvzCwEwleb4AooHiL5dX',
    icon: Headphones, // Generic music icon for Spotify
    isExternal: true
  },
  {
    id: 'applemusic',
    label: 'Apple Music',
    url: 'https://music.apple.com/us/artist/sly-nobody/1357999417',
    icon: Music,
    isExternal: true
  },
  {
    id: 'bandcamp-main',
    label: 'Bandcamp',
    url: 'https://slyfi.bandcamp.com/',
    icon: Disc,
    isExternal: true
  },
  // Moved to bottom per request
  {
    id: 'bandcamp-journey',
    label: 'Buy my Beat Tape',
    url: 'https://slyfi.bandcamp.com/album/journey',
    icon: ShoppingBag,
    highlight: true, // Special styling
    isExternal: true
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col overflow-x-hidden selection:bg-cyan-900 selection:text-white">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900 rounded-full blur-[128px]"></div>
      </div>

      <main className="relative z-10 flex-grow flex flex-col items-center w-full max-w-4xl mx-auto pb-12">
        
        {/* 1. Header */}
        <Header />

        {/* 2. Digital Tips Section */}
        <TipsSection />

        {/* 3. Social Links List */}
        <div className="w-full px-4 flex flex-col items-center gap-2 mt-4">
           {socialLinks.map((link, index) => (
             <SocialButton key={link.id} link={link} index={index} />
           ))}
        </div>

        {/* 4. About Me Section (Scrollable) */}
        <AboutSection />

      </main>
    </div>
  );
};

export default App;