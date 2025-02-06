
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => (
  <div>
    <Navbar />
    {/* <Home /> */}

    {/*  <Register />*/}
    <Login />

    <Footer />
  </div>
);

export default App;
