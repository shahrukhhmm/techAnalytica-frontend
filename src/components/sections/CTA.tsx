import { motion } from 'framer-motion';

const CTA = () => (
    <section className="py-20 relative px-4">
        <div className="container mx-auto">
            <motion.div
                whileHover={{
                    scale: 1.02,
                    backgroundColor: "#575757ff"
                }}
                transition={{
                    scale: { type: "spring", stiffness: 400, damping: 17 },
                    backgroundColor: { duration: 0.1 }
                }}
                className="bg-tech-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">Start your journey today.</h2>
                <button className="px-12 py-5 bg-white text-tech-blue rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl transition-all relative z-10 active:scale-95">
                    Get Free Access
                </button>
            </motion.div>
        </div>
    </section>
);

export default CTA;
