export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold mb-4">Mircea Serban</h1>
          <p className="text-xl text-secondary mb-4">Computer Science Graduate</p>
          <p className="max-w-2xl">
            Passionate about creating innovative solutions and exploring new technologies.
            Currently focused on full-stack development and machine learning.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/tech-illustration.svg" 
            alt="Tech Illustration" 
            className="w-full max-w-md"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'Git', 'Java', 'Kotlin'].map((skill) => (
            <div key={skill} className="bg-gray-700 p-4 rounded-lg text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Project Management System',
              description: 'A cross-language application that demonstrates Java and Kotlin interoperability, featuring a Java Swing GUI that interacts with Kotlin domain classes for managing projects and tasks.',
              tech: ['Java', 'Kotlin', 'Swing GUI'],
              link: 'https://github.com/S-Mircea/project-management-system'
            },
            {
              title: 'Project 2',
              description: 'A brief description of your second project',
              tech: ['Python', 'TensorFlow', 'Flask'],
            },
          ].map((project) => (
            <div key={project.title} className="border border-gray-600 rounded-lg p-6 bg-gray-800 bg-opacity-50">
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
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-4">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Contact Me
        </a>
      </section>
    </div>
  )
}