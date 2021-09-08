import React from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import Notify from "./Notify";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Notify />
      {children}
      <Footer />
    </div>
  );
};
