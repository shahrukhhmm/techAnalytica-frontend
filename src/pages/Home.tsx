import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import CTA from '../components/sections/CTA';
import FAQ from '../components/sections/FAQ';

const Home = () => {
    return (
        <div className="relative">
            <Hero />
            <Features />
            <CTA />
            <FAQ />
        </div>
    );
};

export default Home;