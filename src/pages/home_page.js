import React from "react";
import About from "../components/about";
import Clients from "../components/clients";
import Contacts from "../components/contacts";
import Home from "../components/home";
import Prices from "../components/prices";
import Solutions from "../components/solutions";

const HomePage = () => {
    return(
        <>
            <Home/>
            <About/>
            <Solutions/>
            <Clients/>
            <Prices/>
            <Contacts/>
        </>
    )
}

export default HomePage;