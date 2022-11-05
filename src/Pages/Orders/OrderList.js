import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';


const OrderList = ({ order, handleDelete, handleUpdateStatus }) => {
    const { _id, serviceName, customer, price, email, message, serviceId, status } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [serviceId])


    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'><AiFillDelete className='text-2xl text-red-500'></AiFillDelete></button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">Price ${price}</span>
            </td>
            <td>{email}</td>
            <th>
                <button onClick={() => handleUpdateStatus(_id)} className="btn btn-outline btn-success btn-sm">{status ? status : "Pending"}</button>
            </th>
        </tr>
    );
};

export default OrderList;