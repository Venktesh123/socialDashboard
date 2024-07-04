import React from "react";
import './table.css'; // Import your CSS file here

const UserTable = ({ users }) => {
  return (
    <table className="custom-table"> {/* Add a className for styling */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Block</th>
          <th>Years of Experience</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.mobile}</td>
            <td>{user.block}</td>
            <td>{user.yoe}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
