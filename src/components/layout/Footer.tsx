import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative pt-20 pb-10 overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            {/* Soft Ambient Globs for extra depth */}
            <div className="absolute inset-0 pointer-events-none opacity-50">
                <div className="absolute top-0 -left-20 w-72 h-72 bg-pink-200/30 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px]"></div>
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col items-center">
                    {/* Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center mb-10"
                    >
                        <div className="relative w-10 h-10 mr-4">
                            <svg viewBox="0 0 40 40" fill='none' xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <path
                                    d="M10 10L30 15L10 25L30 30"
                                    stroke="url(#logo-grad)"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="drop-shadow-sm"
                                />
                                <defs>
                                    <linearGradient id="logo-grad" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#ec4899" />
                                        <stop offset="1" stopColor="#3b82f6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
                            Techanalytica
                        </span>
                    </motion.div>

                    {/* Navigation Links */}
                    <nav className="mb-10 w-full max-w-4xl">
                        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-700 dark:text-gray-300 font-bold">
                            {['Software', 'Industries', 'Vendors', 'Write a Review', 'Blog', 'About Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-tech-blue transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-8 mb-16 px-4 py-2">
                        {[
                            { Icon: Facebook, color: "hover:text-blue-600" },
                            { Icon: Twitter, color: "hover:text-sky-500" },
                            { Icon: Linkedin, color: "hover:text-blue-700" },
                            { Icon: Instagram, color: "hover:text-pink-600" }
                        ].map(({ Icon, color }, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ scale: 1.2, y: -4 }}
                                className={`text-gray-900 dark:text-white transition-all duration-200 ${color}`}
                            >
                                <Icon size={24} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Divider Line */}
                    <div className="w-full h-px bg-gray-900/10 dark:bg-white/10 mb-8"></div>

                    {/* Copyright Section */}
                    <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                            &copy; {new Date().getFullYear()} Techanalytics | Powered by XYZ
                        </p>
                    </div>
                </div>
            </div >
        </footer >
    );
};

export default Footer;
