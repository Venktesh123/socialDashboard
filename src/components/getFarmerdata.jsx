import React, { useEffect, useState } from 'react';
import { useFirebase } from './Context/Firebase'; // Adjust the import path accordingly
import { collection, getDocs } from 'firebase/firestore';

const GetFarmerData = () => {
  const { db } = useFirebase();
  const [data, setData] = useState([]);
  console.log(data,"data");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db
            , 'orders'));
        const dataArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [db]);

  return (
    <div>
      <h1>Farmers Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetFarmerData;
