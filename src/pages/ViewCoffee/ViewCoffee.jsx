import { Link, useLoaderData } from "react-router-dom";
import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";
import addCoffeeBackGround from "../../assets/images/more/11.png";

const ViewCoffee = () => {
    const singleCoffee = useLoaderData()

    const { name, chef, supplier, taste, category, details, photo } = singleCoffee;

    // console.log(singleCoffee);

    return (
        <div>
            <HelmetTitle title="single coffee" />
            <div style={{
                backgroundImage: `url(${addCoffeeBackGround})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
            }}>
                <div className="w-3/4 mx-auto py-12 space-y-12">
                    <Link to={'/'}>
                        <h3 className="inline text-3xl font-rancho">&larr; Back to home</h3>
                    </Link>
                    <div className="bg-[#F4F3F0] p-4 md:p-8 lg:p-16 space-y-8 rounded">
                        <div className="card card-side bg-transparent">
                            <figure>
                                <img src={photo} alt={name} />
                            </figure>
                            <div className="card-body flex flex-col items-center gap-6">
                                    <h2 className="text-4xl text-center font-rancho">{name}</h2>
                                <div className="space-y-4">
                                    <p><span className='font-semibold'>Chef:</span> {chef}</p>
                                    <p><span className='font-semibold'>Supplier:</span> {supplier}</p>
                                    <p><span className='font-semibold'>Taste:</span> {taste}</p>
                                    <p><span className='font-semibold'>Category:</span> {category}</p>
                                    <p><span className='font-semibold'>Details:</span> {details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;