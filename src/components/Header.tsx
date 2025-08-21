import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSearch,
  faCodeBranch,
  faSun,
  faMoon,
  faUser,
  faBriefcase,
  faGraduationCap,
  faLaptopCode,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Header = ({ isDarkMode, onToggleTheme }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationTabs = [
    { id: 'about', label: 'About', icon: 'user', sectionId: 'about-section' },
    { id: 'projects', label: 'Projects', icon: 'laptop', sectionId: 'projects-section' },
    { id: 'experience', label: 'Experience', icon: 'briefcase', sectionId: 'experience-section' },
    { id: 'education', label: 'Education', icon: 'graduation', sectionId: 'education-section' },
    { id: 'skills', label: 'Skills', icon: 'code', sectionId: 'skills-section' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleTabClick = (tabId: string, sectionId: string) => {
    setActiveTab(tabId);
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); 
  };

  const handleSearch = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();
    
    if (!normalizedQuery) return;
    
    const matchingTab = navigationTabs.find(tab => {
      const tabLabel = tab.label.toLowerCase();
      const tabId = tab.id.toLowerCase();
      
      if (tabLabel === normalizedQuery || tabId === normalizedQuery) {
        return true;
      }
      
      if (tabLabel.includes(normalizedQuery) || tabId.includes(normalizedQuery)) {
        return true;
      }
      
      const queryWords = normalizedQuery.split(' ');
      return queryWords.some(word => 
        tabLabel.includes(word) || tabId.includes(word)
      );
    });

    if (matchingTab) {
      setActiveTab(matchingTab.id);
      scrollToSection(matchingTab.sectionId);
      setSearchQuery('');
    } else {
      const fuzzyMatch = navigationTabs.find(tab => {
        const tabLabel = tab.label.toLowerCase();
        const tabId = tab.id.toLowerCase();
        
        let queryIndex = 0;
        for (let i = 0; i < tabLabel.length && queryIndex < normalizedQuery.length; i++) {
          if (tabLabel[i] === normalizedQuery[queryIndex]) {
            queryIndex++;
          }
        }
        
        if (queryIndex === normalizedQuery.length) return true;
        
        queryIndex = 0;
        for (let i = 0; i < tabId.length && queryIndex < normalizedQuery.length; i++) {
          if (tabId[i] === normalizedQuery[queryIndex]) {
            queryIndex++;
          }
        }
        
        return queryIndex === normalizedQuery.length;
      });
      
      if (fuzzyMatch) {
        setActiveTab(fuzzyMatch.id);
        scrollToSection(fuzzyMatch.sectionId);
        setSearchQuery('');
      }
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  return (
    <header className={`sticky top-0 z-50 border-b theme-transition ${
      isDarkMode 
        ? 'bg-[#0d1117] border-[#30363d] text-[#c9d1d9]' 
        : 'bg-white border-gray-200 text-gray-900'
    }`}>
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md hover:bg-opacity-80 md:hidden ${
                isDarkMode ? 'hover:bg-[#21262d]' : 'hover:bg-gray-100'
              }`}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="w-4 h-4" />
            </button>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-lg ">Keyan Andy Delgado</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Search bar - hidden on mobile */}
            <form onSubmit={handleSearchSubmit} className="relative hidden md:block">
              <div className={`relative border ${
                isDarkMode ? 'border-[#30363d] bg-[#0d1117]' : 'border-gray-300 bg-gray-50'
              } rounded-md`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faSearch} className={`w-4 h-4 ${
                    isDarkMode ? 'text-[#8b949e]' : 'text-gray-400'
                  }`} />
                </div>
                <input
                  type="text"
                  placeholder="Search: about, proj, exp, edu, skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  className={`block w-64 pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 ${
                    isDarkMode 
                      ? 'bg-[#0d1117] text-[#c9d1d9] placeholder-[#8b949e] focus:bg-[#21262d] focus:border-[#30363d]' 
                      : 'bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-gray-300'
                  } focus:outline-none focus:ring-1 focus:ring-blue-500`}
                />
              </div>
            </form>
            
            <button 
              onClick={onToggleTheme}
              className={`p-2 rounded-md hover:bg-opacity-80 ${
                isDarkMode ? 'hover:bg-[#21262d]' : 'hover:bg-gray-100'
              }`}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="w-4 h-4" />
            </button>

            <button className="flex items-center">
              <img
                src="./avatar.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "./avatar.jpg";
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden border-t ${isDarkMode ? 'border-[#30363d] bg-[#0d1117]' : 'border-gray-200 bg-white'}`}>
          {/* Mobile Search */}
          <div className="px-4 py-3 border-b border-gray-200">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className={`relative border ${
                isDarkMode ? 'border-[#30363d] bg-[#21262d]' : 'border-gray-300 bg-gray-50'
              } rounded-md`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faSearch} className={`w-4 h-4 ${
                    isDarkMode ? 'text-[#8b949e]' : 'text-gray-400'
                  }`} />
                </div>
                <input
                  type="text"
                  placeholder="Search sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  className={`block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 ${
                    isDarkMode 
                      ? 'bg-[#21262d] text-[#c9d1d9] placeholder-[#8b949e] focus:bg-[#30363d] focus:border-[#58a6ff]' 
                      : 'bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-300'
                  } focus:outline-none focus:ring-1 focus:ring-blue-500`}
                />
              </div>
            </form>
          </div>
          
          <div className="px-4 py-2 space-y-1">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.sectionId)}
                className={`w-full flex items-center space-x-3 py-3 px-3 rounded-md text-left transition-colors ${
                  activeTab === tab.id
                    ? `${isDarkMode ? 'bg-[#21262d] text-[#c9d1d9]' : 'bg-gray-100 text-gray-900'}`
                    : `${isDarkMode ? 'text-[#8b949e] hover:bg-[#21262d] hover:text-[#c9d1d9]' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
                }`}
              >
                {tab.icon === 'user' && (
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                )}
                {tab.icon === 'laptop' && (
                  <FontAwesomeIcon icon={faLaptopCode} className="w-4 h-4" />
                )}
                {tab.icon === 'briefcase' && (
                  <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />
                )}
                {tab.icon === 'graduation' && (
                  <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4" />
                )}
                {tab.icon === 'code' && (
                  <FontAwesomeIcon icon={faCodeBranch} className="w-4 h-4" />
                )}
                
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation tabs - hidden on mobile */}
      <div className={`border-b hidden md:block ${
        isDarkMode ? 'border-[#30363d]' : 'border-gray-200'
      }`}>
        <div className="max-w-full mx-auto px-4">
          <nav className="flex space-x-8">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.sectionId)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 text-sm transition-colors ${
                  activeTab === tab.id
                    ? `border-[#f78166] font-bold ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`
                    : `border-transparent font-normal ${
                        isDarkMode ? 'text-[#8b949e] hover:text-[#c9d1d9]' : 'text-gray-900 hover:text-gray-700'
                      }`
                }`}
              >
                {tab.icon === 'user' && (
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                )}
                {tab.icon === 'laptop' && (
                  <FontAwesomeIcon icon={faLaptopCode} className="w-4 h-4" />
                )}
                {tab.icon === 'briefcase' && (
                  <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />
                )}
                {tab.icon === 'graduation' && (
                  <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4" />
                )}
                {tab.icon === 'code' && (
                  <FontAwesomeIcon icon={faCodeBranch} className="w-4 h-4" />
                )}
                
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
