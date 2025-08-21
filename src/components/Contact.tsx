import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'

interface ContactProps {
  isDarkMode: boolean
}

const Contact = ({ isDarkMode }: ContactProps) => {
  const contactInfo = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'keyanandydelgado@gmail.com',
      link: 'mailto:keyanandydelgado@gmail.com'
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: '+63 912 345 6789',
      link: 'tel:+639123456789'
    },
    {
      icon: faMapMarkerAlt,
      label: 'Location',
      value: 'South Cotabato, Philippines',
      link: null
    },
    {
      icon: faGlobe,
      label: 'Website',
      value: 'keyanandydelgado.netlify.app',
      link: 'https://keyanandydelgado.netlify.app/'
    }
  ]

  const socialLinks = [
    {
      icon: faGithub,
      name: 'GitHub',
      username: '@keyanandydelgado',
      url: 'https://github.com/keyanandydelgado',
      color: 'hover:text-gray-400'
    },
    {
      icon: faLinkedin,
      name: 'LinkedIn',
      username: 'keyanandydelgado',
      url: 'https://linkedin.com/in/keyanandydelgado',
      color: 'hover:text-blue-400'
    },
    {
      icon: faTwitter,
      name: 'Twitter',
      username: '@keyanandydelgado',
      url: 'https://twitter.com/keyanandydelgado',
      color: 'hover:text-blue-400'
    },
    {
      icon: faDiscord,
      name: 'Discord',
      username: 'keyanandydelgado#1234',
      url: 'https://discord.com/users/keyanandydelgado',
      color: 'hover:text-purple-400'
    }
  ]

  return (
    <div className={`${isDarkMode ? 'bg-[#161b22]' : 'bg-white'} rounded-lg p-6 border ${isDarkMode ? 'border-[#30363d]' : 'border-gray-200'}`}>
      <h2 className="text-lg font-semibold mb-6">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-4">Contact Information</h3>
          <div className="space-y-3">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${isDarkMode ? 'bg-[#21262d]' : 'bg-gray-100'} flex items-center justify-center`}>
                  <FontAwesomeIcon icon={contact.icon} className={`w-4 h-4 ${isDarkMode ? 'text-[#58a6ff]' : 'text-blue-600'}`} />
                </div>
                <div>
                  <p className={`text-xs ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-500'}`}>{contact.label}</p>
                  {contact.link ? (
                    <a 
                      href={contact.link} 
                      className={`text-sm ${isDarkMode ? 'text-[#58a6ff] hover:text-[#79c0ff]' : 'text-blue-600 hover:text-blue-700'} hover:underline`}
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className={`text-sm ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-700'}`}>{contact.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">Social Links</h3>
          <div className="space-y-3">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-lg border ${isDarkMode ? 'border-[#30363d] hover:border-[#8b949e] bg-[#21262d]' : 'border-gray-200 hover:border-gray-300 bg-gray-50'} transition-colors`}
              >
                <FontAwesomeIcon icon={social.icon} className={`w-5 h-5 ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-600'} ${social.color}`} />
                <div>
                  <p className={`font-medium ${isDarkMode ? 'text-[#c9d1d9]' : 'text-gray-900'}`}>{social.name}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-[#8b949e]' : 'text-gray-600'}`}>{social.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <h3 className="font-semibold mb-2">Let's Work Together!</h3>
        <p className="text-sm mb-4 opacity-90">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
        <button className={`px-6 py-2 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors`}>
          Send Message
        </button>
      </div>
    </div>
  )
}

export default Contact
