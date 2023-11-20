import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import App from "./App";
import Flights from "../Page/Flights/Flights";
import Hotels from "../Page/Hotels/Hotels";
function Routing(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/navbar" element={<Navbar/>}/>
            <Route path="/flights" element={<Flights/>}/>
            <Route path="/hotels" element={<Hotels/>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Routing;