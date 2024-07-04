import React, { createContext, useContext, useState, useEffect } from 'react';
import { db, auth } from '../Firebase'; // Adjust the import path accordingly

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [firebase, setFirebase] = useState({ db, auth });

  useEffect(() => {
    setFirebase({ db, auth });
  }, []);

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};
