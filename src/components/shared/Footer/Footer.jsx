import copyBackground from "../../../assets/images/more/24.jpg";
import logo from "../../../assets/images/more/logo1.png";
import feedbackBackground from "../../../assets/images/more/13.jpg";
import CommonButton from "../../CommonButton/CommonButton";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin, AiFillPhone, AiFillMessage } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${feedbackBackground})`
            }}>
                <div className="w-3/4 mx-auto py-14 flex flex-col lg:flex-row gap-14">
                    <div className="flex-1 space-y-8">
                        <img className="w-16 h-16" src={logo} alt="logo" />
                        <h3 className="text-3xl text-[#331A15] font-rancho">Espresso Emporium</h3>
                        <p className="text-sm">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className="flex items-center gap-5 text-4xl text-[#331A15]">
                            <AiFillFacebook />
                            <AiFillTwitterSquare />
                            <AiFillInstagram />
                            <AiFillLinkedin />
                        </div>
                        <h3 className="text-3xl text-[#331A15] font-rancho">Get in Touch</h3>
                        <div className="text-sm space-y-5">
                            <p className="flex items-center gap-2"><AiFillPhone /> <span>+88 01533 333 333</span></p>
                            <p className="flex items-center gap-2"><AiFillMessage /> <span>info@gmail.com</span></p>
                            <p className="flex items-center gap-2"><FaLocationDot /> <span>72, Wall street, King Road, Dhaka</span></p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start gap-6">
                        <h3 className="text-3xl text-[#331A15] font-rancho">Connect with Us</h3>
                        <input className="w-full py-2 px-2 rounded outline-2 focus:outline-2 focus:outline-[#E3B577] focus:shadow-lg" type="text" placeholder="Name" />
                        <input className="w-full py-2 px-2 rounded outline-2 focus:outline-2 focus:outline-[#E3B577] focus:shadow-lg" type="email" placeholder="Email" />
                        <textarea className="w-full py-2 px-2 rounded outline-2 focus:outline-2 focus:outline-[#E3B577] focus:shadow-lg" name="" id="" cols="30" rows="5" placeholder="Massage"></textarea>
                        <div>
                            <CommonButton btnTitle="Send Message" customCss={'rounded-full'} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundImage: `url(${copyBackground})`
            }}>
                <p className="font-rancho text-white py-3 text-center">&copy; Espresso Emporium! 2023</p>
            </div>
        </div>
    );
};

export default Footer;