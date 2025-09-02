import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCalendarAlt, faMapMarkerAlt, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { experiences } from '../constants/experience'

interface ExperienceProps {
  isDarkMode: boolean
}

const Experience = ({ isDarkMode }: ExperienceProps) => {
  return (
    <div className={`${isDarkMode ? '' : 'bg-white'} rounded-lg p-4 lg:p-6 border ${isDarkMode ? 'border-[#30363d]' : 'border-gray-200'}`}>
      <div className="flex items-start justify-between mb-6">
        <h1 className={`text-sm font-[500] ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>
          EXPERIENCE
          <span className="font-light">.md</span>
        </h1>
      </div>

      <div className="relative">
        <div className={`absolute left-6 top-6 w-0.5 h-full ${isDarkMode ? 'bg-[#30363d]' : 'bg-gray-200'} z-0`}></div>
        {experiences.map((exp) => (
          <div key={exp.id} className="flex gap-4 mb-8 last:mb-0 relative">
            <div className="flex-shrink-0 relative z-10">
              <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-[#21262d]' : 'bg-gray-100'} flex items-center justify-center border-2 ${isDarkMode ? 'border-[#30363d]' : 'border-gray-200'} overflow-hidden`}>
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className={`w-5 h-5 ${isDarkMode ? 'text-[#58a6ff]' : 'text-blue-600'} hidden`}
                />
              </div>
            </div>

            <div className="flex-1">
              <div className={`p-3 lg:p-4 rounded-lg border ${isDarkMode ? 'border-[#30363d] bg-[#21262d]' : 'border-gray-200 bg-gray-50'}`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3 gap-2">
                  <div>
                    <h3 className="font-semibold text-base lg:text-lg mb-1">{exp.title}</h3>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faBuilding} className={`w-3 h-3 ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-500'}`} />
                        <span className={`${isDarkMode ? 'text-[#58a6ff]' : 'text-blue-600'}`}>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={`w-3 h-3 ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-500'}`} />
                        <span className={`${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <FontAwesomeIcon icon={faCalendarAlt} className={`w-3 h-3 ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-500'}`} />
                    <span className={`${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  {exp.description.map((desc, descIndex) => (
                    <p key={descIndex} className={`text-sm ml-3 ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`}>
                      • {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-[#30363d] text-[#8b949e]' : 'bg-gray-200 text-gray-700'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <a
          href="/delgado_resume.pdf"
          target="_blank"
          className={`px-4 py-2 inline-block rounded-lg border ${isDarkMode ? 'border-[#30363d] hover:border-[#58a6ff] text-[#58a6ff]' : 'border-gray-300 hover:border-blue-400 text-blue-600'} transition-colors`}
        >
          View Resume🔗
        </a>
      </div>
    </div>
  )
}

export default Experience