import React from "react";

// import components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
return(
    <>
    <Header />
    {children}
    <Footer />
    </>
)
};

export default Layout;