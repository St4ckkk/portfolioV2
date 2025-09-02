import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useGitHubData } from "../hooks/github";
import { achievements } from "../constants/achievements";

interface SidebarProps {
  isDarkMode: boolean;
}

const Sidebar = ({ isDarkMode }: SidebarProps) => {
  const { data: githubData, loading } = useGitHubData("St4ckkk");

  const getOrganizationLogo = (org: string) => {
    if (org === "PSITS") {
      return (
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <img 
            src="./PSITS.png" 
            alt="PSITS Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      );
    } else if (org === "ISITE") {
      return (
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <img 
            src="./ISITE.png" 
            alt="ISITE Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="lg:sticky lg:top-6">
      <div className="lg:hidden mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-white flex-shrink-0">
            <img
              src={githubData?.avatar_url || "./avatar.jpg"}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "./avatar.jpg";
              }}
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>
              Keyan Andy Delgado
            </h1>
            <p className={`text-sm font-medium ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>
              Full Stack Developer
            </p>
          </div>
        </div>

        <div className={`px-3 py-2 rounded-lg mb-4 ${isDarkMode ? 'bg-[#f6f8fa] text-[#24292f]' : 'bg-gray-100 text-gray-700'}`}>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUsers} className={`w-4 h-4 ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`} />
            <span className={`text-sm ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>Working from home</span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUsers} className={`w-4 h-4 ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-500'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>
              {loading ? "..." : githubData?.followers || 0}
            </span>
            <span className={`text-sm ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>followers</span>
            <span className={`text-sm ${isDarkMode ? 'text-[#30363d]' : 'text-gray-400'}`}>•</span>
            <span className={`text-sm font-medium ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>
              {loading ? "..." : githubData?.following || 0}
            </span>
            <span className={`text-sm ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>following</span>
          </div>
        </div>

        <div className="space-y-3 mb-6 ">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} className={`w-4 h-4 ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`} />
            <span className={`text-sm ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`}>
              {githubData?.location || "South Cotabato, PH"}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className={`w-4 h-4 ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`} />
            <a href="mailto:keyanandydelgado@gmail.com" className={`text-sm ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'} hover:underline`}>
              keyanandydelgado@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faInstagram} className={`w-4 h-4 ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`} />
            <a href="https://www.instagram.com/https.keyan/" target="_blank" rel="noopener noreferrer" className={`text-sm ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'} hover:underline`}>
              https://www.instagram.com/https.keyan/
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faGithub} className={`w-4 h-4 ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`} />
            <a href="https://github.com/St4ckkk" target="_blank" rel="noopener noreferrer" className={`text-sm ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'} hover:underline`}>
              https://github.com/St4ckkk
            </a>
          </div>
        </div>

        <hr className={`border-t ${isDarkMode ? 'border-[#30363d]' : 'border-gray-300'} mb-5`} />

        <div className="mt-5">
          <h3 className={`font-semibold mb-4 ${isDarkMode ? "text-[#c9d1d9]" : "text-gray-900"}`}>
            Achievements
          </h3>
          <div className="flex gap-3">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex flex-col items-center">
                {getOrganizationLogo(achievement.organization)}
                <span className={`text-xs mt-1 text-center ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>
                  {achievement.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

   
      <div className="hidden lg:block">
        <div className="mb-6">
          <div className="flex justify-center mb-4">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-white mb-3">
              <img
                src={githubData?.avatar_url || "./avatar.jpg"}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "./avatar.jpg";
                }}
              />
            </div>
          </div>

          <h1 className={`text-xl lg:text-2xl font-medium mb-1 text-center lg:text-left ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>
            Keyan Andy Delgado
          </h1>
          <p
            className={`text-sm lg:text-base text-center lg:text-left ${
              isDarkMode ? "text-[#8b949e]" : "text-gray-600"
            } mb-2`}
          >
            Full Stack Developer 
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-1 mb-8">
            <FontAwesomeIcon icon={faUsers} className={`w-4 h-4 ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-500'}`} />
            <span className={`text-sm lg:text-md font-medium ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>
              {loading ? "..." : githubData?.followers || 0}
            </span>
            <span className={`text-sm lg:text-md ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>followers</span>
            <span className={`text-sm lg:text-md ${isDarkMode ? 'text-[#30363d]' : 'text-gray-400'}`}>•</span>
            <span className={`text-sm lg:text-md font-medium ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>
              {loading ? "..." : githubData?.following || 0}
            </span>
            <span className={`text-sm lg:text-md ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>following</span>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <FontAwesomeIcon icon={faLocationDot} className={`w-4 h-4 ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`} />
            <span className={`text-sm lg:text-md ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`}>
              {githubData?.location || "South Cotabato, PH"}
            </span>
          </div>
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <FontAwesomeIcon icon={faEnvelope} className={`w-4 h-4 ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`} />
            <a href="mailto:keyanandydelgado@gmail.com" className={`text-sm lg:text-md ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'} hover:underline`}>
              keyanandydelgado@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <FontAwesomeIcon icon={faInstagram} className={`w-4 h-4 ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`} />
            <a href="https://www.instagram.com/https.keyan/" target="_blank" rel="noopener noreferrer" className={`text-sm lg:text-md ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'} hover:underline`}>
              https://www.instagram.com/https.keyan/
            </a>
          </div>
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <FontAwesomeIcon icon={faGithub} className={`w-4 h-4 ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`} />
            <a href="https://github.com/St4ckkk" target="_blank" rel="noopener noreferrer" className={`text-sm lg:text-md ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'} hover:underline`}>
              https://github.com/St4ckkk
            </a>
          </div>
        </div>

        <hr className={`border-t ${isDarkMode ? 'border-[#30363d]' : 'border-gray-300'} mb-5`} />

        <div className="mt-5">
          <h3
            className={`font-semibold mb-4 text-center lg:text-left ${
              isDarkMode ? "text-[#c9d1d9]" : "text-gray-900"
            }`}
          >
            Achievements
          </h3>
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-start gap-3">
                {getOrganizationLogo(achievement.organization)}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-sm lg:text-md font-medium ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>
                      {achievement.year}
                    </span>
                  </div>
                  <p className={`text-sm lg:text-md font-medium ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>
                    {achievement.title}
                  </p>
                  <p className={`text-sm lg:text-md ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>
                    {achievement.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;