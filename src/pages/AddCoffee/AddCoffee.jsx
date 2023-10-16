import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";
import addCoffeeBackGround from "../../assets/images/more/11.png";
import CommonButton from "../../components/CommonButton/CommonButton";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
    const handelAddCoffee = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const addCoffeeDetails = { name, chef, supplier, taste, category, details, photo }

        // post coffee
        try {
            const res = await fetch("https://coffee-shope-server-md-raint-rubbyat-sultan.vercel.app/add-coffees", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(addCoffeeDetails),
            });
            const feedback = await res.json();
            if (feedback?.acknowledged) {
                form.reset();
                Swal.fire({
                    title: 'Successfully Add A New Coffee!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
            // console.log(feedback);
        } catch (er) {
            Swal.fire({
                title: `${er.message}`,
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Get it.'
            })
        }
    }

    return (
        <div>
            <HelmetTitle title="Add-Coffee" />
            <div style={{
                backgroundImage: `url(${addCoffeeBackGround})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
            }}>
                <div className="w-3/4 mx-auto py-12 space-y-12">
                    <Link to={'/'}>
                        <h3 className="inline text-3xl font-rancho">&larr; Back to home</h3>
                    </Link>
                    {/* add coffee form */}
                    <div className="bg-[#F4F3F0] p-4 md:p-8 lg:p-16 space-y-8 rounded">
                        <h2 className="text-4xl text-center font-rancho">Add New Coffee</h2>
                        <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        <form onSubmit={handelAddCoffee}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Chef</span>
                                    </label>
                                    <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Supplier</span>
                                    </label>
                                    <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Taste</span>
                                    </label>
                                    <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Details</span>
                                    </label>
                                    <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="form-control w-full py-6">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </div>
                            <CommonButton btnType={"submit"} btnTitle="Add Coffee" customCss={"w-full"} btnColor={"#331A15"} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;