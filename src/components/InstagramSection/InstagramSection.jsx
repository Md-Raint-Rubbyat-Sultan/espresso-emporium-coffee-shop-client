import cup1 from "../../assets/images/cups/Rectangle 9.png";
import cup2 from "../../assets/images/cups/Rectangle 10.png";
import cup3 from "../../assets/images/cups/Rectangle 11.png";
import cup4 from "../../assets/images/cups/Rectangle 12.png";
import cup5 from "../../assets/images/cups/Rectangle 13.png";
import cup6 from "../../assets/images/cups/Rectangle 14.png";
import cup7 from "../../assets/images/cups/Rectangle 15.png";
import cup8 from "../../assets/images/cups/Rectangle 16.png";

const InstagramSection = () => {
    const images = [cup1, cup2, cup3, cup4, cup5, cup6, cup7, cup8];

    return (
        <div>
            <div className="text-center">
                <p>Follow Us Now</p>
                <h2 className="text-5xl text-[#331A15] font-rancho">Follow on Instagram</h2>
            </div>
            <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto px-6 xl:px-0 pt-12 pb-32">
                {
                    images.map((image,idx)=> <img key={idx} src={image}></img>)
                }
            </div>
        </div>
    );
};

export default InstagramSection;