import { Link, useLocation, useNavigate } from "react-router-dom";
import CommonButton from "../../components/CommonButton/CommonButton";
import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";
import addCoffeeBackGround from "../../assets/images/more/11.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
    const { signInUser, resetPassword, setLoading, signInWithGoogle } = useContext(AuthContext);
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

    const handelSignIn = (e) => {
        e.preventDefault();

        signInUser(formInputFiled.email, formInputFiled.password)
            .then(async (result) => {
                // post user info to data base
                try {
                    const res = await fetch('https://coffee-shope-server-md-raint-rubbyat-sultan.vercel.app/user', {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({
                            email: formInputFiled.email,
                            lastSignIn: result.user?.metadata?.lastSignInTime
                        })
                    });
                    const feedback = await res.json();
                    if (feedback?.acknowledged) {
                        Swal.fire({
                            title: 'Successfully Sign In!',
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
            }));
    }

    const handelResetPassword = (e) => {
        e.preventDefault();
        if (formInputFiled?.email) {
            resetPassword(formInputFiled.email)
                .then(() => {
                    Swal.fire({
                        title: 'An Reset Email Has Been Send To Your Email. Please Check Your Email.',
                        text: "If You Can't See The Email, Then Please Check Your Spam Files In Your Email. Thank You!",
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
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
        } else {
            Swal.fire({
                title: `Must Have To Provide Email`,
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Get it.'
            })
        }
    }

    const handelGoogleSignIn = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then(async (result) => {
                // post user info to data base
                try {
                    const res = await fetch('https://coffee-shope-server-md-raint-rubbyat-sultan.vercel.app/user', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({
                            email: result.user?.email,
                            userCreated: result.user?.metadata?.creationTime
                        })
                    });
                    const feedback = await res.json();
                    if (feedback?.acknowledged) {
                        Swal.fire({
                            title: 'Successfully Sign In!',
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
            .finally(() => {
                setLoading(() => false);
            })
    }

    return (
        <div>
            <HelmetTitle title="Sign-In" />
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
                        <h2 className="text-4xl text-center font-rancho">Sign In</h2>
                        <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        <form onSubmit={handelSignIn}>
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
                                <div className="text-right px-2 py-1 flex items-center justify-between">
                                    <label className="label">
                                        <Link onClick={handelResetPassword} className="label-text font-semibold">Forget Password?</Link>
                                    </label>
                                    <span onClick={() => setShowPass((prev) => !prev)} className="font-semibold cursor-pointer max-w-fit">{showPass ? "Hidden Password" : "Show Password"}</span>
                                </div>
                            </div>
                            <CommonButton btnType={"submit"} btnTitle="Sign In" customCss={"w-full mt-6"} btnColor={"#331A15"} />
                            <span onClick={handelGoogleSignIn} className="block mt-6">
                                <CommonButton btnType={"button"} btnTitle={`Sign In With Google`} customCss={"w-full"} btnColor={"#331A15 flex justify-center"} />
                            </span>
                            <p className="pt-4">Don&lsquo;t have an account? Please <Link className="font-rancho underline text-xl" to={"/signup"} state={location?.state}>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;