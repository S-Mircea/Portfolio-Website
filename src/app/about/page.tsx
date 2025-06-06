export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="max-w-3xl">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Background</h2>
          <p className="text-gray-300 mb-4">
            I'm a Computer Science graduate with a passion for creating innovative solutions 
            and exploring new technologies. My journey in technology has been driven by 
            curiosity and a desire to solve complex problems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <p className="text-gray-300 mb-4">
            Currently focused on full-stack development and machine learning, 
            I enjoy working with modern technologies and frameworks to build 
            scalable and efficient applications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Interests</h2>
          <p className="text-gray-300 mb-4">
            When I'm not coding, I enjoy exploring new technologies, contributing to 
            open-source projects, and staying up-to-date with the latest developments 
            in the tech industry.
          </p>
        </section>
      </div>
    </div>
  )
}