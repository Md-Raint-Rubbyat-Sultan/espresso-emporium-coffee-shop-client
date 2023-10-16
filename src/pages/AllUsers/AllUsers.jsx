import { useLoaderData } from "react-router-dom";
import CommonButton from "../../components/CommonButton/CommonButton";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AllUsers = () => {
    const { user, deleteUserProfile } = useContext(AuthContext);
    const allUsers = useLoaderData();
    const [appUsers, setAppUsers] = useState(() => allUsers);

    // console.log(user)
    // console.log(appUsers)

    const handelUserDelete = (id) => {
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
                const res = await fetch(`http://localhost:5000/user/${id}`, {
                    method: "DELETE",
                });
                const feedback = await res.json();
                if (feedback?.acknowledged) {
                    deleteUserProfile()
                        .then(() => {
                            setAppUsers((prev) => {
                                const remaining = prev.filter(currentUsers => currentUsers?.id !== id);
                                return remaining;
                            })
                            Swal.fire({
                                title: 'Successfully Delete User!',
                                text: 'Do you want to continue',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        })
                        .catch((er) => Swal.fire({
                            title: `${er.message}`,
                            text: 'Do you want to continue',
                            icon: 'error',
                            confirmButtonText: 'Get it!'
                        }))
                }
            }
        })
    }

    return (
        <div className="overflow-x-auto my-12">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL. No.</th>
                        <th>User Name</th>
                        <th>Created</th>
                        <th>Last Sign In</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appUsers.map((appUser, idx) => <tr key={appUser._id}>
                            <th>{idx + 1}</th>
                            <td>{appUser?.email}</td>
                            <td>{appUser?.userCreated}</td>
                            <td>{appUser?.lastSignIn}</td>
                            <td><span onClick={() => handelUserDelete(appUser?._id)}><CommonButton btnTitle="Delete User" isDisabled={(user?.email === appUser?.email) ? false : true} /></span></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;