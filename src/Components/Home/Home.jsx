import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
    return (
        <div className='mx-auto'>
            <Banner />
            <HeroSection />
            <Footer />
        </div>
    );
};

export default Home;