import { educationData } from "../constants/education";

interface EducationProps {
  isDarkMode: boolean;
}

const Education = ({ isDarkMode }: EducationProps) => {
  return (
    <div
      className={`${isDarkMode ? "" : "bg-white"} rounded-lg p-4 lg:p-6 border ${
        isDarkMode ? "border-[#30363d]" : "border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <h1 className={`text-sm font-[500] ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>
        EDUCATION
          <span className="font-light">.md</span>
        </h1>
      </div>

      <div className="mt-6">
        <div className="relative pl-12">
          <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${
            isDarkMode ? "bg-[#30363d]" : "bg-gray-300"
          }`}></div>
          
          <div className="space-y-8">
            {educationData.map((education) => (
              <div key={education.id} className="relative">
                <div className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 ${
                  isDarkMode ? "border-[#212830] bg-blue-500" : "border-white bg-blue-600"
                } z-10`}></div>
                
              
                <div className={`rounded-lg p-3 lg:p-4 border  ${isDarkMode ? 'border-[#30363d]' : 'border-gray-200 bg-[#f9fafb]'}`}>
                  <div className="flex items-center space-x-3 mb-3">
                    <img 
                      src={education.logo} 
                      alt={`${education.school} logo`}
                      className={`w-10 h-10 rounded-full object-cover border-2 ${isDarkMode ? 'border-[#30363d]' : 'border-gray-200'}`}
                    />
                    <div>
                      <h3 className={`font-semibold text-sm lg:text-base ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-800'}`}>
                        {education.level}
                      </h3>
                      <p className={`text-xs lg:text-sm ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-500'}`}>
                        {education.year}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <p className={`font-medium mb-2 text-sm lg:text-base ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`}>
                      {education.school}
                    </p>
                    {education.course && (
                      <p className={`text-xs lg:text-sm mb-1 ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>
                        {education.course}
                      </p>
                    )}
                    {education.strand && (
                      <p className={`text-xs lg:text-sm ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>
                        {education.strand}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
