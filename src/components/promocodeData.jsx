import React, { useEffect, useState } from 'react';
import { useFirebase } from './Context/Firebase'; // Adjust the import path accordingly
import { collection, getDocs } from 'firebase/firestore';
import ProcodesTable from '../components/promoCodes/codesInfoTable';

const GetProcodesData = () => {
  const { db } = useFirebase();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const procodesSnapshot = await getDocs(collection(db, 'promoCodes'));
        const usersSnapshot = await getDocs(collection(db, 'users'));

        const users = usersSnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }));

        const combinedData = procodesSnapshot.docs.map(doc => {
          const procode = { id: doc.id, ...doc.data() };
          const user = users.find(user => user.uid === procode.uid);
          return { ...procode, user };
        });

        setData(combinedData);
        console.log(combinedData,"combinedData");
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
      <h1>Procodes Data</h1>
      <ProcodesTable data={data} />
    </div>
  );
};

export default GetProcodesData;
