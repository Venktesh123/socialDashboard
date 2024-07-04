import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { useFirebase } from '../components/Context/Firebase';

const PromoCodeForm = () => {
  const { db } = useFirebase();
  const [promoCodeData, setPromoCodeData] = useState({
    id: '',
    claimed: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPromoCodeData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate data before submission
    if (!promoCodeData.id) {
      alert('Please fill in the promo code.');
      return;
    }

    try {
      await setDoc(doc(db, 'promoCodes', promoCodeData.id), {
        claimed: promoCodeData.claimed
      });
      alert('Promo code created successfully!');
      // Reset form after successful submission
      setPromoCodeData({
        id: '',
        claimed: false
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error adding document.');
    }
  };

  return (
    <div className="field">
      <form onSubmit={handleSubmit}>
        <h1>Promo Code Creation Form</h1>
        <div>
          <label>
            Promo Code:
            <input
              type="text"
              name="id"
              value={promoCodeData.id}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Create Promo Code</button>
      </form>
    </div>
  );
};

export default PromoCodeForm;
