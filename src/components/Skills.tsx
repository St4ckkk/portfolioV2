import { skillCategories } from "../constants/skills";

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills = ({ isDarkMode }: SkillsProps) => {
  return (
    <div
      className={`${
        isDarkMode ? "" : "bg-white"
      } rounded-lg p-4 lg:p-6 border ${
        isDarkMode ? "border-[#30363d]" : "border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-sm font-[500]">
          SKILLS
          <span className="font-light">.md</span>
        </h1>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center justify-center mb-6">
              <h3 className="font-semibold text-base lg:text-lg text-center">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 lg:w-16 lg:h-16 rounded-lg border-2 ${
                      isDarkMode ? "border-[#30363d]" : "border-gray-200 bg-[#f9fafb]"
                    } flex items-center justify-center p-2 hover:shadow-lg transition-shadow`}
                  >
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-medium text-xs lg:text-sm mt-2 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
