import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import AsciiArt from "./AsciiArt";
import GithubCalendar from "react-github-calendar";


interface AboutProps {
  isDarkMode: boolean;
}

const About = ({ isDarkMode }: AboutProps) => {
  return (
    <div
      className={`${isDarkMode ? "" : "bg-white"} rounded-lg p-4 lg:p-6 border ${
        isDarkMode ? "border-[#30363d]" : "border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <h1 className={`text-sm font-[500] ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>
          ABOUT
          <span className="font-light">.md</span>
        </h1>
      </div>

      <AsciiArt isDarkMode={isDarkMode} />

      <hr className={`my-6 ${isDarkMode ? "border-[#30363d]" : "border-gray-200"}`} />

      <div className="mt-5">
        <div className={`leading-relaxed ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>
          <p>
            I'm a passionate Full Stack Developer specializing in React, TypeScript, Node.js, 
            NestJS, and PHP. I build robust applications with modern frontend frameworks and 
            enterprise-grade backend services, while maintaining clean, maintainable code.
          </p>
        </div>
      </div>

      <hr className={`my-6 ${isDarkMode ? "border-[#30363d]" : "border-gray-200"}`} />

      <div className="mt-5">
        <div className="flex justify-center">
          <GithubCalendar 
            username="St4ckkk" 
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            hideColorLegend={false}
            hideMonthLabels={false}
            hideTotalCount={false}
          />
        </div>
      </div>

    </div>
  );
};

export default About;
