import React from "react";
import About from "../components/about";
import Clients from "../components/clients";
import Home from "../components/home";

const HomePage = () => {
    return(
        <>
            <Home/>
            <About/>
            <Clients/>
        </>
    )
}

export default HomePage;