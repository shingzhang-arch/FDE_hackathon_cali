import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface DocumentLayoutProps {
  children: React.ReactNode;
  tableOfContents: Array<{ id: string; title: string; level?: number }>;
}

export default function DocumentLayout({ children, tableOfContents }: DocumentLayoutProps) {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          return {
            id: item.id,
            top: element.getBoundingClientRect().top,
          };
        }
        return null;
      }).filter(Boolean) as Array<{ id: string; top: number }>;

      const current = sections.find(section => section.top <= 150 && section.top >= -300);
      if (current) {
        setActiveSection(current.id);
      } else if (sections.length > 0 && window.scrollY < 100) {
        setActiveSection(sections[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-50 md:hidden p-2 bg-slate-900 text-white rounded-lg"
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar TOC */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-slate-50 border-r border-slate-200 overflow-y-auto z-30
          transform transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="p-6 sticky top-0 bg-slate-50 border-b border-slate-200">
          <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Table of Contents</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                    ${activeSection === item.id
                      ? 'bg-blue-100 text-blue-900 font-medium'
                      : 'text-slate-600 hover:bg-slate-100'
                    }
                    ${item.level === 2 ? 'pl-6' : ''}
                  `}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="md:ml-64">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
