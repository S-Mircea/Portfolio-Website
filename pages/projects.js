import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB.",
      imageUrl: "/images/ecommerce-project.jpg",
      githubUrl: "https://github.com/yourusername/ecommerce-project",
      liveUrl: "https://ecommerce-project.example.com"
    },
    {
      title: "Weather App",
      description: "A weather application using React and integrating with a third-party API.",
      imageUrl: "/images/weather-app.jpg",
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weather-app.example.com"
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Projects - Your Name</title>
        <meta name="description" content="Projects by Your Name, a graduate software developer" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}