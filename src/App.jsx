import {useEffect, useState} from "react";
import UserData from "./components/UserData.jsx";
import TestFirebaseConnection from './components/getFarmerdata.jsx'
import {Link} from 'react-router-dom'

import OrderData from './components/gerOrderData.jsx'

const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>
        {/* <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table> */}
        <OrderData/>
        <TestFirebaseConnection/>
    </>
}

export default App;

