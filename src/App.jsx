import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TestFirebaseConnection from './components/getFarmerdata.jsx';
import OrderData from './components/gerOrderData.jsx';

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
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/orderDetails" element={<OrderData />} />
                    <Route path="/farmerDetails" element={<TestFirebaseConnection />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
