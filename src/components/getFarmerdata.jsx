import React, { useEffect, useState } from 'react';
import { useFirebase } from './Context/Firebase'; // Adjust the import path accordingly
import { collection, getDocs } from 'firebase/firestore';
import FarmerTable from '../components/FarmerTable/table'

const GetFarmerData = () => {
  const { db } = useFirebase();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db
            , 'farmers'));
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
      <FarmerTable  users={data}/>
      {/* <h1>Farmers Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default GetFarmerData;
