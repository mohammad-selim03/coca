import Display from '../Display/Display';
import Navbar from '../Navbar/Navbar';

const Banner = () => {
    return (
        <div className='h-[1007px] w-[1440px] bg-gradient-to-r from-blue-500 to-green-300'>
            <div>
            <Navbar />
            <Display />
            </div>
        </div>
    );
};

export default Banner;