// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TestFirebaseConnection from './components/getFarmerdata.jsx';
import OrderData from './components/gerOrderData.jsx';
import FarmerRegistration from './FarmerRegistration/FarmerRegistration.jsx';
import Promocode from '../src/components/promocodeData.jsx'
import './App.css'; // Import the CSS file

const Home = () => (
    <div>
        <h1>Home Page</h1>
        {/* Your Home Page Content */}
    </div>
);

const App = () => {
    return (
        <Router>
            <div>
                <div className='navbar'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/orderDetails">Order Details</Link>
                            </li>
                            <li>
                                <Link to="/farmerDetails">Farmer Details</Link>
                            </li>
                            <li>
                                <Link to="/promocodeDetails">Promocode Details</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" element={<FarmerRegistration />} />
                    <Route path="/orderDetails" element={<OrderData />} />
                    <Route path="/farmerDetails" element={<TestFirebaseConnection />} />
                    <Route path="/promocodeDetails" element={<Promocode/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
