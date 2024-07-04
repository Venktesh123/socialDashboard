import React from 'react';

const OrderTable = ({ orders }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>User Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Small Goats</th>
          <th>Large Goats</th>
          <th>Order Value</th>
          <th>Order Time</th>
          <th>Items</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => {
          const smallGoats = order.cartItems.filter(item => item.title === 'Small Goat').reduce((sum, item) => sum + item.quantity, 0);
          const largeGoats = order.cartItems.filter(item => item.title === 'Large Goat').reduce((sum, item) => sum + item.quantity, 0);

          return (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user?.name}</td>
              <td>{order.user?.phone}</td>
              <td>{order.user?.email}</td>
              <td>{smallGoats}</td>
              <td>{largeGoats}</td>
              <td>{order.orderValue}</td>
              <td>{new Date(order.date).toLocaleString()}</td>
              <td>
                <ul>
                  {order.cartItems.map(item => (
                    <li key={item.id}>
                      {item.title} - {item.quantity} x {item.price}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default OrderTable;
