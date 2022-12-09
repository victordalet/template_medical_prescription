import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Ordo from "./pages/ordonances";
import History from "./pages/histoy";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="*" element={<Home />}></Route>
                    <Route path="/ordonances" element={<Ordo />}></Route>
                    <Route path="/histoyry" element={<History />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;

