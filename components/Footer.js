const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Mircea Serban. All rights reserved.</p>
                    <div className="mt-2">
                        <a href="https://github.com/S-Mircea" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-gray-300">GitHub</a>
                        <a href="https://linkedin.com/in/mircea-serban-s81" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;