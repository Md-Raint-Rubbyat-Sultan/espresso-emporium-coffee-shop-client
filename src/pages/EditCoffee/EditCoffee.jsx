import CommonButton from "../../components/CommonButton/CommonButton";
import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";
import addCoffeeBackGround from "../../assets/images/more/11.png";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditCoffee = () => {
    const singleCoffee = useLoaderData();
    const navigate = useNavigate();
    const { _id, name, chef, supplier, taste, category, details, photo } = singleCoffee;

    const handelUpdateCoffee = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updateName = form.name.value;
        const updateChef = form.chef.value;
        const updateSupplier = form.supplier.value;
        const updateTaste = form.taste.value;
        const updateCategory = form.category.value;
        const updateDetails = form.details.value;
        const updatePhoto = form.photo.value;
        const updateCoffeeDetails = { updateName, updateChef, updateSupplier, updateTaste, updateCategory, updateDetails, updatePhoto }
        console.log(updateCoffeeDetails);

        // post coffee
        try {
            const res = await fetch(`https://coffee-shope-server-md-raint-rubbyat-sultan.vercel.app/coffees/${_id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updateCoffeeDetails),
            });
            const feedback = await res.json();
            if (feedback?.acknowledged) {
                form.reset();
                navigate('/')
                Swal.fire({
                    title: 'Successfully Update The New Coffee!',
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
                        <h2 className="text-4xl text-center font-rancho">Update Existing Coffee Details</h2>
                        <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        <form onSubmit={handelUpdateCoffee}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Chef</span>
                                    </label>
                                    <input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Supplier</span>
                                    </label>
                                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Taste</span>
                                    </label>
                                    <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Category</span>
                                    </label>
                                    <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Details</span>
                                    </label>
                                    <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="form-control w-full py-6">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo</span>
                                </label>
                                <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </div>
                            <CommonButton btnTitle="Update Coffee Details" customCss={"w-full"} btnColor={"#331A15"} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCoffee;