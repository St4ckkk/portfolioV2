import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { projects as initialProjects } from '../constants/projects'

interface ProjectsProps {
  isDarkMode: boolean
}

const Projects = ({ isDarkMode }: ProjectsProps) => {
  return (
    <div className={`${isDarkMode ? 'bg-[#212830]' : 'bg-white'} rounded-lg p-4 lg:p-6 border ${isDarkMode ? 'border-[#30363d]' : 'border-gray-300'}`}>
        <div className="flex items-start justify-between mb-6">
        <h1 className={`text-sm font-[500] ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>
         PROJECTS
          <span className="font-light">.md</span>
        </h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {initialProjects.map((project) => (
          <div 
            key={project.id}
            className={`p-4 lg:p-5 rounded-lg border ${
              isDarkMode ? 'border-[#30363d] bg-[#21262d]' : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBook} className={`w-4 h-4 ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-500'}`} />
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#58a6ff] hover:underline font-medium text-sm lg:text-base"
                >
                  {project.name}
                </a>
                {project.isPublic && (
                  <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-[#30363d] text-[#8b949e]' : 'bg-gray-100 text-gray-600'}`}>
                    Public
                  </span>
                )}
              </div>
              {project.isLive && project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-cyan-500 hover:text-cyan-600 transition-colors`}
                  title="Live Demo"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                </a>
              )}
            </div>
            
            <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>
              {project.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-3">
              {project.languages.map((language, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 rounded-full ${project.languageColors[index]}`}></div>
                  <span className={`text-xs lg:text-sm ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>
                    {language}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects