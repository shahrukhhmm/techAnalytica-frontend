import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
    {
        question: "How does the AI smart search work?",
        answer: "Our engine uses advanced semantic analysis to understand the intent behind your search, not just keywords. It cross-references millions of data points to match tools to your specific business architecture."
    },
    {
        question: "Is the data updated in real-time?",
        answer: "Yes, we track version updates, pricing changes, and security patches daily. Our crawlers monitor 500+ sources to ensure you always have the latest intelligence."
    },
    {
        question: "Can I compare multiple tools side-by-side?",
        answer: "Absolutely. Our platform allows you to select up to 5 tools and compare them across latency, security compliance, pricing tiers, and integration capabilities."
    },
    {
        question: "How do you verify the reviews?",
        answer: "We use a multi-step verification process, including LinkedIn authentication and technical verification, to ensure that reviews come from real users with verified professional backgrounds."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black mb-6 dark:text-white"
                    >
                        Got <span className="text-tech-blue">Questions</span>?
                    </motion.h2>
                    <p className="text-gray-500 text-lg">Everything you need to know about navigating the tech landscape.</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group rounded-[2rem] border-2 transition-all duration-300 ${openIndex === index
                                    ? 'bg-white dark:bg-gray-800 border-tech-blue shadow-2xl'
                                    : 'bg-white/50 dark:bg-gray-800/30 border-transparent hover:border-tech-blue/30'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-7 flex items-center justify-between text-left"
                            >
                                <span className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-tech-blue' : 'text-gray-900 dark:text-white'
                                    }`}>
                                    {item.question}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-tech-blue text-white rotate-180' : 'bg-tech-blue/10 text-tech-blue'
                                    }`}>
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 pt-0 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
