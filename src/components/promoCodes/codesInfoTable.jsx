import React from 'react';

const ProcodesTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Claim</th>
          <th>Order Value</th>
          <th>Promo Code</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.user?.name || 'N/A'}</td>
            <td>{item.user?.phone || 'N/A'}</td>
            <td>{item.claimed ? 'Yes' : 'No'}</td>
            <td>{item.orderValue}</td>
            <td>{item.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProcodesTable;
