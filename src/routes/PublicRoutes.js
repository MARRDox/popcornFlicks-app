import { Routes, Route } from "react-router-dom";

import Auth from '../pages/Auth';
import Home from '../pages/Home';

export default function PublicRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Auth type='login' />} />
            <Route path="/register" element={<Auth type='register' />} />
            <Route path="/" element={<Home/>} />
        </Routes>
    );
}