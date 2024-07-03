import React, { useEffect, useState } from 'react';
import { useFirebase } from './Context/Firebase'; // Adjust the import path accordingly
import { collection, getDocs } from 'firebase/firestore';
import OrderTable from '../components/OrderTable/table.jsx';

const GetFarmerData = () => {
  const { db } = useFirebase();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'orders'));
        const dataArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(dataArray);
        console.log(dataArray,"dataArray");
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
      <OrderTable orders={data} />
    </div>
  );
};

export default GetFarmerData;
