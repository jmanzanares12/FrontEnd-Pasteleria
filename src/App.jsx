import React from "react";
import Navbar from "./Components/Navbar";
import './Components/Style.css'
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero/>
            <Footer/>
        </>
    );
}