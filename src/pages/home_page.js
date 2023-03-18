import React from "react";
import About from "../components/about";
import Clients from "../components/clients";
import Home from "../components/home";
import Solutions from "../components/solutions";

const HomePage = () => {
    return(
        <>
            <Home/>
            <About/>
            <Solutions/>
            <Clients/>
        </>
    )
}

export default HomePage;