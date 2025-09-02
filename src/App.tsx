import { useTheme } from './hooks/useTheme'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'

import Footer from './components/Footer'

function App() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className={`${isDarkMode ? 'bg-[#212830] text-[#c9d1d9]' : 'bg-gray-50 text-gray-900'} min-h-screen theme-transition`}>
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <div className="max-w-full mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-6 max-w-[1500px] w-full">
        
            <div className="hidden lg:block w-80 flex-shrink-0">
              <Sidebar isDarkMode={isDarkMode} />
            </div>
            
          
            <div className="lg:hidden mb-6">
              <Sidebar isDarkMode={isDarkMode} />
            </div>
            
            <div className="flex-1 max-w-none">
              <div className="space-y-6">
                <div id="about-section">
                  <About isDarkMode={isDarkMode} />
                </div>
                <div id="projects-section">
                  <Projects isDarkMode={isDarkMode} />
                </div>
                <div id="experience-section">
                  <Experience isDarkMode={isDarkMode} />
                </div>
                <div id="education-section">
                  <Education isDarkMode={isDarkMode} />
                </div>
                <div id="skills-section">
                  <Skills isDarkMode={isDarkMode} />
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default App