import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl, githubUrl, liveUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={imageUrl} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">Live Demo</a>
        </div>
        </div>
    </div>
    );
};

export default ProjectCard;