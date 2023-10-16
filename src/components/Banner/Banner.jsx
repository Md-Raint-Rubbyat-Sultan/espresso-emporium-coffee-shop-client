import CommonButton from "../CommonButton/CommonButton";
import BannerNextSection from "./BannerNextSection";
import bannerLogo from "../../assets/images/more/3.png";
import icon1 from "../../assets/images/icons/1.png";
import icon2 from "../../assets/images/icons/2.png";
import icon3 from "../../assets/images/icons/3.png";
import icon4 from "../../assets/images/icons/4.png";

const Banner = () => {
    return (
        <div>
            {/* banner image */}
            <div className="relative overflow-hidden">
                <img className="max-h-[800px] mx-auto" src={bannerLogo} alt="banner logo" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 right-0">
                    <div className="space-y-4">
                        <h2 className="font-rancho text-xl md:text-5xl text-white">Would you like a Cup of Delicious Coffee?</h2>
                        <p className="text-white hidden md:block">It&lsquo;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <CommonButton
                            btnTitle="Learn More"
                            btnColor={"text-[#242222]"}
                        />
                    </div>
                </div>
            </div>
            {/* banner next section */}
            <div className="bg-[#ECEAE3] flex flex-col md:flex-row items-center justify-evenly gap-6 py-6 md:py-10 px-4 md:px-10">
                <BannerNextSection 
                item={icon1}
                heading="Awesome Aroma"
                text="You will definitely be a fan of the design & aroma of your coffee"
                />
                <BannerNextSection 
                item={icon2}
                heading="High Quality"
                text="We served the coffee to you maintaining the best quality"
                />
                <BannerNextSection 
                item={icon3}
                heading="Pure Grades"
                text="The coffee is made of the green coffee beans which you will love"
                />
                <BannerNextSection 
                item={icon4}
                heading="Proper Roasting"
                text="Your coffee is brewed by first roasting the green coffee beans"
                />
            </div>
        </div>
    );
};

export default Banner;