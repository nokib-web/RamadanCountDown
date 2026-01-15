import { Facebook, Twitter, Linkedin, Instagram, Phone, Github } from "lucide-react";

const SocialLinks = () => {
    return (
        <div className="flex items-center justify-center gap-8 mb-4">
            <a href="https://www.facebook.com/NokibHasan.Nazmul" target="_blank" rel="noopener noreferrer" aria-label="Facebook (placeholder)" className="hover:text-blue-600 dark:hover:text-[#38bdf8] text-current transition-colors duration-300 transform hover:scale-110">
                <Facebook className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true" />
            </a>

            <a href="https://www.linkedin.com/in/nazmulhasan-nokib/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (placeholder)" className="hover:text-blue-700 dark:hover:text-[#38bdf8] text-current transition-colors duration-300 transform hover:scale-110">
                <Linkedin className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true" />
            </a>
            <a href="https://github.com/nokib-web" target="_blank" rel="noopener noreferrer" aria-label="GitHub (placeholder)" className="hover:text-blue-400 dark:hover:text-[#38bdf8] text-current transition-colors duration-300 transform hover:scale-110">
                <Github className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true" />
            </a>

        </div>
    );
};

export default SocialLinks;
