import { motion } from 'framer-motion';
import { Search, Zap, Shield } from 'lucide-react';

const features = [
    {
        title: "Smart Search",
        desc: "Advanced algorithms that understand exactly what your business needs.",
        icon: Search,
        color: "tech-blue"
    },
    {
        title: "Real-time Metrics",
        desc: "Get instant performance data on every tool in our directory.",
        icon: Zap,
        color: "tech-purple"
    },
    {
        title: "Verified Secure",
        desc: "Every platform is audited for enterprise-grade security compliance.",
        icon: Shield,
        color: "tech-indigo"
    }
];

const Features = () => (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container px-4 mx-auto">
            <div className="text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black mb-4 dark:text-white"
                >
                    Designed for <span className="text-tech-blue">Innovation</span>.
                </motion.h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">Every detail crafted to help you discover tools faster than ever.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -12, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="group p-8 rounded-[2.5rem] bg-gray-50 dark:bg-gray-800/50 border-2 border-transparent hover:border-tech-blue hover:shadow-2xl hover:bg-white dark:hover:bg-gray-800 transition-[border-color,background-color,box-shadow] duration-200"
                    >
                        <div className={`w-16 h-16 bg-${feature.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                            <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 dark:text-white">{feature.title}</h3>
                        <p className="text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Features;
