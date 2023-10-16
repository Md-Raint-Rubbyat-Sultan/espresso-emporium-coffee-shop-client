import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

const Root = () => {
    return (
        <div className="font-raleway" data-theme="light">
            <div>
                <Header />
                <Outlet />
            </div>
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default Root;