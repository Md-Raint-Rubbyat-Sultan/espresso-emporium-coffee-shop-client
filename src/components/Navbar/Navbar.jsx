import { NavLink, useNavigate } from "react-router-dom";
import navBackground from "../../assets/images/more/10.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Successfully Sign Out!',
                    text: 'Please! continue.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate('/');
            })
            .catch((er) => Swal.fire({
                title: `${er.message}`,
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Get it.'
            }))
    }

    return (
        <div className="py-2" style={{
            backgroundImage: `url(${navBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            <ul className="flex items-center justify-center gap-20 font-rancho text-xl">
                <li>
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active underline" : ""
                    } to={'/'}>Home</NavLink>
                </li>
                {
                    !user ?
                        <li>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active underline" : ""
                            } to={'/signin'}>Sign In</NavLink>
                        </li>
                        :
                        <>
                            <li>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active underline" : ""
                                } to={'/allusers'}>All Users</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={handelSignOut} to={'/'}>Sign Out</NavLink>
                            </li>
                        </>
                }
            </ul>
        </div>
    );
};

export default Navbar;