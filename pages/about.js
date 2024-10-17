import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
        <Head>
            <title>About - Mircea Serban</title>
            <meta name="description" content="About Your Name, a graduate software developer" />
        </Head>

        <Header />

        <main className="flex-grow container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <p className="mb-4">
            I'm a recent graduate with a Bachelor's degree in Computer Science from University of Greenwich. 
            My academic journey has equipped me with a strong foundation in software development principles, 
            algorithms, and data structures.
                    </p>
                    <p className="mb-4">
            During my studies, I developed a keen interest in web development and have since focused on 
            expanding my skills in modern JavaScript frameworks like React and Node.js. I'm passionate about 
            creating intuitive user interfaces and optimizing backend performance.
                    </p>
                    <p>
            I'm excited to bring my enthusiasm, fresh perspective, and willingness to learn to a dynamic 
            development team. I'm looking for opportunities to contribute to meaningful projects while 
            continuing to grow as a developer.
                    </p>
                </div>
        </main>

        <Footer />
    </div>
    );
}