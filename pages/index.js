import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkillBadge from '../components/SkillBadge';

export default function Home() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Kotlin', 'Java','Algorithms and Data Structures','R', 'Machine Learning'];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Mircea Serban - Software Developer</title>
        <meta name="description" content="Portfolio of Your Name, a graduate software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Image src="/images/profile-picture.jpg" alt="Your Name" width={200} height={200} className="rounded-full mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">Mircea Serban</h1>
          <p className="text-xl text-gray-600">Graduate Software Developer</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            I'm a recent graduate with a passion for creating efficient and user-friendly software solutions. 
            With a strong foundation in computer science and hands-on experience in modern web technologies, 
            I'm excited to contribute to innovative projects and continue learning in a professional environment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div>
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



