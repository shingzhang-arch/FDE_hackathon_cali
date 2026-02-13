import { useState, useEffect } from 'react';
import SidebarNavigation from './SidebarNavigation';

interface PresentationLayoutProps {
  children: React.ReactNode;
  sections: Array<{ id: string; title: string; icon?: React.ReactNode }>;
}

export default function PresentationLayout({ children, sections }: PresentationLayoutProps) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for better detection

      // If at top of page, set first section as active
      if (window.scrollY < 100) {
        setActiveSection(sections[0]?.id || '');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    // Set initial active section
    setActiveSection(sections[0]?.id || '');
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Sidebar */}
      <SidebarNavigation sections={sections} activeSection={activeSection} />

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-8 pb-12">
          {children}
        </div>
      </main>
    </div>
  );
}
