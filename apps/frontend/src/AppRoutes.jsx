import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PingPong from './pages/PingPong';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PingPong />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;