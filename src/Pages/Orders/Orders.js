import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderList from './OrderList';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data);
            })
            .catch(error => console.error(error))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? you want to cancel this order?')
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully')
    
                    const remain = orders.filter( odr => odr._id !== id)
                    setOrders(remain)
                }
            })
        }
    }

    const handleUpdateStatus = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = orders.filter(odr => odr._id !== id)
                const approving = orders.find(odr => odr._id === id)
                approving.status = 'Approved'

                const newOrders = [approving, ...remaining]
                setOrders(newOrders)
            }
        })
    }

    return (
        <div>
            <h2 className='text-2xl text-center my-4'>You have {orders.length} orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderList
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdateStatus={handleUpdateStatus}
                            ></OrderList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;