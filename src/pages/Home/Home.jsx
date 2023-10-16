import Banner from "../../components/Banner/Banner";
import CommonButton from "../../components/CommonButton/CommonButton";
import ButtonLogo from "../../assets/images/icons/1.png"
import popularProductBackground from "../../assets/images/more/1.png";
import { lazy, useState } from "react";
import { Suspense } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import Swal from "sweetalert2";
import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";
import Spinner from "../../components/Spinner/Spinner";
const InstagramSection = lazy(() => import("../../components/InstagramSection/InstagramSection"));

const Home = () => {
    const allCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(() => allCoffees);
    // console.log(coffees);

    const handelDeleteCoffee = (id) => {
        Swal.fire({
            title: 'Are you sure you want to delete this coffee?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch(`https://coffee-shope-server-md-raint-rubbyat-sultan.vercel.app/coffees/${id}`, {
                    method: "DELETE",
                })
                const feedback = await res.json();
                if (feedback?.acknowledged) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    );
                    setCoffees((prev) => {
                        const remaining = prev.filter(coffee => coffee?._id !== id);
                        return remaining;
                    })
                }
            }
        })
    }


    return (
        <div>
            <HelmetTitle title="Espresso Emporium" />
            <Banner />
            <div className="my-16 py-16" style={{
                backgroundImage: `url(${popularProductBackground})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
            }}>
                <div className="flex flex-col items-center gap-4">
                    <p>--- Sip & Savor ---</p>
                    <h2 className="text-5xl text-[#331A15] font-rancho">Our Popular Products</h2>
                    <div>
                        <Link to={'/add-coffee'}>
                            <CommonButton
                                btnTitle="Add Coffee"
                                icon={ButtonLogo}
                            />
                        </Link>
                    </div>
                </div>
                <div className="my-12 mx-auto px-4 md:px-0 w-full md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        coffees.map((coffee) => <CoffeeCard
                            key={coffee?._id}
                            coffee={coffee}
                            handelDeleteCoffee={handelDeleteCoffee}
                        />)
                    }
                </div>
            </div>
            <Suspense fallback={<Spinner />}>
                <InstagramSection />
            </Suspense>
        </div>
    );
};

export default Home;