import { Link, useLocation, useNavigate } from "react-router-dom";
import CommonButton from "../../components/CommonButton/CommonButton";
import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";
import addCoffeeBackGround from "../../assets/images/more/11.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);
    const [formInputFiled, setFormInputFiled] = useState(() => { });
    const [showPass, setShowPass] = useState(() => false);
    const location = useLocation();
    const navigate = useNavigate();

    const handelInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormInputFiled((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handelSignUp = (e) => {
        e.preventDefault();
        // console.log(formInputFiled);

        createUser(formInputFiled.email, formInputFiled.password)
            .then((result) => {
                // add user name and photo
                updateUserProfile({ displayName: formInputFiled.name, photoURL: formInputFiled.photo })
                    .then(async () => {
                        // post user info to data base
                        try {
                            const res = await fetch('https://coffee-shope-server-md-raint-rubbyat-sultan.vercel.app/user', {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json",
                                },
                                body: JSON.stringify({
                                    email: formInputFiled.email,
                                    userCreated: result.user?.metadata?.creationTime
                                })
                            });
                            const feedback = await res.json();
                            if (feedback?.acknowledged) {
                                Swal.fire({
                                    title: 'Successfully Registered!',
                                    text: 'Please! continue.',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                                }).then((confirmed) => {
                                    if (confirmed.isConfirmed) {
                                        navigate(location?.state || '/');
                                    }
                                })
                            }
                            // console.log(result.user, feedback);
                        } catch (er) {
                            Swal.fire({
                                title: `${er.message}`,
                                text: 'Do you want to continue',
                                icon: 'error',
                                confirmButtonText: 'Get it.'
                            })
                        }
                    })
                    .catch((er) => Swal.fire({
                        title: `${er.message}`,
                        text: 'Do you want to continue',
                        icon: 'error',
                        confirmButtonText: 'Get it.'
                    }))
            })
            .catch((er) => Swal.fire({
                title: `${er.message}`,
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Get it.'
            }))
            .finally(() => {
                setLoading(() => false);
            })
    }

    return (
        <div>
            <HelmetTitle title="Register" />
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
                        <h2 className="text-4xl text-center font-rancho">Register</h2>
                        <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        <form onSubmit={handelSignUp}>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" value={formInputFiled?.name ? formInputFiled?.name : ''} onChange={handelInputChange} placeholder="Enter coffee name" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo</span>
                                </label>
                                <input type="text" name="photo" value={formInputFiled?.photo ? formInputFiled?.photo : ''} onChange={handelInputChange} placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" value={formInputFiled?.email ? formInputFiled?.email : ''} onChange={handelInputChange} placeholder="Enter Your Email" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type={showPass ? "text" : "password"} name="password" value={formInputFiled?.password ? formInputFiled?.password : ''} onChange={handelInputChange} placeholder="Enter Your Password" className="input input-bordered w-full" required />
                                <div className="text-right px-2 py-1">
                                    <span onClick={() => setShowPass((prev) => !prev)} className="font-semibold cursor-pointer max-w-fit">{showPass ? "Hidden Password" : "Show Password"}</span>
                                </div>
                            </div>
                            <CommonButton btnType={"submit"} btnTitle="Register" customCss={"w-full mt-6"} btnColor={"#331A15"} />
                            <p className="pt-4">Already have an account? Please <Link className="font-rancho underline text-xl" to={"/signin"}>Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;