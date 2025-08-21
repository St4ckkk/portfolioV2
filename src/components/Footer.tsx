import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface FooterProps {
  isDarkMode: boolean
}

const Footer = ({ isDarkMode }: FooterProps) => {
  return (
    <footer className={`mt-12 py-8 border-t ${isDarkMode ? 'border-[#30363d] bg-[#0d1117] text-[#c9d1d9]' : 'border-gray-200 bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className={`text-sm ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>
              © 2025 Keyan Andy Delgado. Made with
            </span>
            <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-red-500" />
            <span className={`text-sm ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>
              and React
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/St4ckkk/portfolioV2" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-[#8b949e] hover:text-[#c9d1d9]' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
              View Source
            </a>
            
            <span className={`text-sm ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>
              •
            </span>
            
            <a 
              href="#" 
              className={`text-sm ${isDarkMode ? 'text-[#8b949e] hover:text-[#c9d1d9]' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              Privacy Policy
            </a>
            
            <span className={`text-sm ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>
              •
            </span>
            
            <a 
              href="#" 
              className={`text-sm ${isDarkMode ? 'text-[#8b949e] hover:text-[#c9d1d9]' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              Terms of Service
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className={`text-xs ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-500'}`}>
            Built with Vite, TypeScript, and Tailwind CSS. Hosted on Vercel.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
