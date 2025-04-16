import React from "react";
import NavBar from "../NavBar/Navbar";
import { Outlet } from "react-router";
import styles from "./Layout.module.css";
import Canvas from "../Canvas/Canvas";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
    <NavBar/>
    <div className={styles.container}>
      <Canvas/>
    </div>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default Layout;