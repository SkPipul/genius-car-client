import React from 'react';
import { BsShopWindow } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';


const ServiceInfo = () => {
    return (
        <div className="card w-full bg-black text-white rounded-md mt-14">
            <div className="card-body py-14">
                <div className='flex items-center justify-around'>
                    <div className='flex items-center'>
                        <span className='mr-2 text-xl'><BsShopWindow></BsShopWindow></span>
                        <div>
                            <p className='text-sm'>We are open monday-friday</p>
                            <h3 className='text-2xl font-bold'>7:00 am - 9:00 pm</h3>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className='mr-2 text-2xl'><FiPhoneCall></FiPhoneCall></span>
                        <div>
                            <p className='text-sm'>Have a question?</p>
                            <h3 className='text-xl font-bold'>+2546 251 2658</h3>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className='mr-2 text-2xl'><MdLocationPin></MdLocationPin></span>
                        <div>
                            <p className='text-sm'>Need a repair? our address</p>
                            <h3 className='text-xl font-bold'>Bakalia Chittagong, Bangladesh</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;