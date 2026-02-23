import { Search, Sparkles, Star, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 pt-20">
            {/* Background Animated Blobs */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-tech-blue/20 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tech-purple/20 rounded-full blur-[120px] animate-blob delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tech-indigo/10 rounded-full blur-[150px] animate-blob delay-4000"></div>
            </div>

            <div className="container px-4 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-tech-blue/10 text-tech-blue text-sm font-bold mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Discover the Best AI Software</span>
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-8 leading-tight">
                        Find your next <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue via-tech-purple to-tech-indigo">
                            competitive edge.
                        </span>
                    </h1>

                    <div className="max-w-3xl mx-auto mb-12 relative">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="What are you looking for today?"
                                className="w-full px-8 py-6 rounded-3xl bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 backdrop-blur-xl shadow-2xl focus:ring-4 focus:ring-tech-blue/30 focus:border-tech-blue transition-all text-xl outline-none"
                            />
                            <button className="absolute right-3 top-3 bottom-3 px-8 bg-tech-blue text-white rounded-2xl font-bold hover:scale-105 transition-transform flex items-center space-x-2 shadow-lg">
                                <Search className="w-5 h-5" />
                                <span>Find</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 text-gray-500 dark:text-gray-400 font-medium">
                        <span>Popular:</span>
                        <a href="#" className="hover:text-tech-blue transition-colors">AI Writing</a>
                        <span>•</span>
                        <a href="#" className="hover:text-tech-blue transition-colors">Video Editors</a>
                        <span>•</span>
                        <a href="#" className="hover:text-tech-blue transition-colors">SEO Tools</a>
                        <span>•</span>
                        <a href="#" className="hover:text-tech-blue transition-colors">CRM</a>
                    </div>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Left Side Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: "transform" }}
                    className="absolute top-[15%] left-[5%] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                >
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <span className="text-green-600 font-bold">98%</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Match score</p>
                            <p className="text-sm font-bold dark:text-white">Perfect Choice</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    style={{ willChange: "transform" }}
                    className="absolute top-[45%] left-[10%] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                >
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-tech-blue/10 rounded-lg flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-tech-blue" />
                        </div>
                        <p className="text-sm font-bold dark:text-white">AI Powered</p>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{ willChange: "transform" }}
                    className="absolute bottom-[15%] left-[8%] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                >
                    <div className="flex items-center space-x-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200" />
                            ))}
                        </div>
                        <p className="text-sm font-bold dark:text-white">+2k reviews</p>
                    </div>
                </motion.div>

                {/* Right Side Elements */}
                <motion.div
                    animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: "transform" }}
                    className="absolute top-[20%] right-[8%] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                >
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Top Rated</p>
                            <p className="text-sm font-bold dark:text-white">Verified</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    style={{ willChange: "transform" }}
                    className="absolute top-[50%] right-[15%] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                >
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-tech-purple/10 rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-tech-purple" />
                        </div>
                        <p className="text-sm font-bold dark:text-white">Real-time Data</p>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                    style={{ willChange: "transform" }}
                    className="absolute bottom-[20%] right-[6%] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                >
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-tech-indigo/10 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-tech-indigo" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Market Leader</p>
                            <p className="text-sm font-bold dark:text-white">Trend Setter</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
