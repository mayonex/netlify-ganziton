// import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <article className={`w-screen min-h-screen flex flex-col `}>
      <Header></Header>
      <article className={`px-[10%] py-20`}>
        <Outlet></Outlet>
      </article>
      <Footer />
    </article>
  );
};

export default Layout;
