import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MapView from "./Components/MapView";
import Footer from "./Components/Footer";
import './Components/Style.css'


export default function App() {
    return (
        <>
            <Navbar />
            <Hero/>
            <MapView/>
            <Footer/>
        </>
    );
}