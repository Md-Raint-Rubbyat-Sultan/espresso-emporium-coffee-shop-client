import { Link } from "react-router-dom";
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";
import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";
import errorLogo from '../../assets/images/404/404.gif';

const Error = () => {
    return (
        <div>
            <HelmetTitle title="404 Page" />
            <Header />
            <div className="font-rancho text-center my-12">
                <Link to={'/'} className="bg-clip-text text-transparent text-3xl bg-gradient-to-r from-[#374151] to-[#331A15]">&larr; Back To Home</Link>
            </div>
            <img className="w-full md:w-3/4 lg:w-1/2 mx-auto" src={errorLogo} alt="404" />
            <Footer />
        </div>
    );
};

export default Error;