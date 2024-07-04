// EmployeeRegistrationForm.js
import React, { useState } from 'react';
import { useFirebase } from '../components/Context/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../FarmerRegistration/index.css';

const EmployeeRegistrationForm = () => {
  const { db } = useFirebase();
  const [employeeData, setEmployeeData] = useState({
    name: '',
    mobileNumber: '',
    block: '',
    yearOfExperience: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate data before submission
    if (  !employeeData.name || !employeeData.mobileNumber || !employeeData.block || !employeeData.yearOfExperience || !employeeData.email) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'employee'), {
        name: employeeData.name,
        mobileNumber: employeeData.mobileNumber,
        block: employeeData.block,
        yearOfExperience: employeeData.yearOfExperience,
        email: employeeData.email
      });
      alert('Employee registered successfully!');
      // Reset form after successful submission
      setEmployeeData({
        name: '',
        mobileNumber: '',
        block: '',
        yearOfExperience: '',
        email: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error adding document.');
    }
  };

  return (
    <div className='field'>
      
      <form onSubmit={handleSubmit}>
      <h1>Employee Registation Form</h1>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={employeeData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Mobile Number:
            <input
              type="text"
              name="mobileNumber"
              value={employeeData.mobileNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Block:
            <input
              type="text"
              name="block"
              value={employeeData.block}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Year of Experience:
            <input
              type="text"
              name="yearOfExperience"
              value={employeeData.yearOfExperience}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={employeeData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Register Employee</button>
      </form>
    </div>
  );
};

export default EmployeeRegistrationForm;
