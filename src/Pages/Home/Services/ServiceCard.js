import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='p-5' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex'>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className='text-orange-600 text-2xl mr-2'><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;