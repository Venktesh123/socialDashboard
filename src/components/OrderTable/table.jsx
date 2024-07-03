import React from "react";
import './table.css'; // Import your CSS file here

const UserTable = ({ orders }) => {
    console.log(orders,"orders");
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Small Goats</th>
          <th>Large Goats</th>
          <th>Order Value</th>
          <th>User Phone</th>
          <th>Email</th>
          <th>Time of Order</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.orderId}>
            <td>{order.orderId}</td>
            <td>{getGoatQuantity(order.cartItems, 'Small Goat')}</td>
            <td>{getGoatQuantity(order.cartItems, 'Large Goat')}</td>
            <td>{order.orderValue}</td>
            <td>{order.selectedFarmer.mobile}</td>
            <td>{order.uid}</td> {/* Assuming UID is used as email */}
            <td>{formatDate(order.date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Helper function to get quantity of a specific type of goat
const getGoatQuantity = (cartItems, goatType) => {
  const goat = cartItems.find(item => item.title === goatType);
  return goat ? goat.quantity : 0;
};

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

export default UserTable;
