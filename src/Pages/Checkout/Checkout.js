import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const service = useLoaderData();
    const { _id, img, title, price } = service;
    const { user } = useContext(AuthContext)

    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const phone = form.phone.value;
        const email = user?.email || 'not registered'
        const message = form.message.value;

        const order = {
            serviceId: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        // if(phone === String){
        //     alert('please provide a valid number')
        //     return;
        // }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    alert('order is placed successfully')
                    form.reset();
                }
                console.log(data)
            })
            .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleOrder} className='text-center'>
            <h1 className='text-4xl font-sans font-bold mt-14 mb-2'>Your selected service is <br /> <span className='text-orange-600'>{title}</span></h1>
            <h4 className='text-2xl font-sans font-bold'>Price <span className='text-orange-600'>${price}</span></h4>
            <div>
                <img className='w-3/12 mx-auto rounded mb-10' src={img} alt="" />
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-3'>
                <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" required />
                <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" required />
                <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                <input name='email' type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
            </div>
            <textarea name='message' className="textarea textarea-bordered w-full p-5 my-5" placeholder="Your Message"></textarea>
            <input className='btn bg-orange-600 border-none' type="submit" value="Confirm Order" />
        </form>
    );
};

export default Checkout;