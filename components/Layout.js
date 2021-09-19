import React from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import Notify from "./Notify";

export const Layout = ({ children }) => {
  return (
    <div className="sticky top-0 w-full z-20 bg-white shadow-xl" dir="rtl">
      <div className="container md:max-w-screen-xl mx-auto top-0">
        <Navbar />
        <Notify />
        {children}
        <Footer />
      </div>
    </div>
  );
};
