export default function Projects() {
  const projects = [
    {
      title: 'Project Management System',
      description: 'A cross-language application that demonstrates Java and Kotlin interoperability, featuring a Java Swing GUI that interacts with Kotlin domain classes for managing projects and tasks.',
      tech: ['Java', 'Kotlin', 'Swing GUI'],
      link: 'https://github.com/S-Mircea/project-management-system',
      image: '/images/ecommerce-project.svg'
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application built with modern web technologies, featuring real-time weather data and forecasts.',
      tech: ['React', 'JavaScript', 'API Integration'],
      image: '/images/weather-app.svg'
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and payment processing.',
      tech: ['Node.js', 'React', 'MongoDB', 'Stripe'],
      image: '/images/ecommerce-project.svg'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="border border-gray-600 rounded-lg p-6 bg-gray-800 bg-opacity-50">
            {project.image && (
              <div className="mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}