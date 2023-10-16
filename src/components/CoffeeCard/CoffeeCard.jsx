import PropTypes from 'prop-types';
import { FaEye, FaPen } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const CoffeeCard = ({ coffee, handelDeleteCoffee }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, chef, photo } = coffee;

    return (
        <div className="card card-side bg-transparent shadow-xl">
            <figure className='w-2/5'>
                <img className='w-full h-full' src={photo} alt={name} />
            </figure>
            <div className="card-body flex flex-col lg:flex-row items-center">
                <div className='flex-grow'>
                    <p><span className='font-semibold'>Name:</span> {name}</p>
                    <p><span className='font-semibold'>Chef:</span> {chef}</p>
                </div>
                <div className='flex lg:flex-col items-center justify-between gap-4 w-full'>
                    <Link to={`/view-coffee/${_id}`}>
                        <button className='bg-[#D2B48C] text-white p-2 rounded'><FaEye /></button>
                    </Link>
                    <Link to={`/edit-coffee/${_id}`}>
                        <button className='bg-[#3C393B] text-white p-2 rounded'><FaPen /></button>
                    </Link>
                    {user &&
                        <button onClick={() => handelDeleteCoffee(_id)} className='bg-[#EA4744] text-white p-2 rounded'><AiFillDelete /></button>
                    }
                </div>
            </div>
        </div>
    );
}

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
    handelDeleteCoffee: PropTypes.func.isRequired,
};

export default CoffeeCard;