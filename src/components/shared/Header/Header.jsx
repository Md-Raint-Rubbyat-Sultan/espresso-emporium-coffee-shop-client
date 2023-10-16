import logo from '../../../assets/images/more/logo1.png';
import backgroundLogo from '../../../assets/images/more/15.jpg';
import Navbar from '../../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-2 p-4' style={{
                background: `url("${backgroundLogo}")`,
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
                <img className='w-16 h-16' src={logo} alt="logo" />
                <h1 className="text-6xl text-white font-rancho">Espresso Emporium</h1>
            </div>
            <Navbar />
        </div>
    );
};

export default Header;