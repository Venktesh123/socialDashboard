import React, { useEffect, useState } from 'react';
import { useFirebase } from './Context/Firebase'; // Adjust the import path accordingly
import { collection, getDocs } from 'firebase/firestore';
import OrderTable from '../components/OrderTable/table.jsx';

const GetFarmerData = () => {
  const { db } = useFirebase();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersSnapshot = await getDocs(collection(db, 'orders'));
        const usersSnapshot = await getDocs(collection(db, 'users'));

        const users = usersSnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }));

        const ordersWithUserInfo = ordersSnapshot.docs.map(doc => {
          const order = { id: doc.id, ...doc.data() };
          const user = users.find(user => user.uid === order.uid);
          return { ...order, user };
        });

        setOrders(ordersWithUserInfo);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    if (db) {
      fetchData();
    }
  }, [db]);

  return (
    <div>
      <h1>Orders Data</h1>
      <OrderTable orders={orders} />
    </div>
  );
};

export default GetFarmerData;
