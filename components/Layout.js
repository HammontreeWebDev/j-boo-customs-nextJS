import React from "react";

// import components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, headerProps}) => {
return(
        <>
        <Header {...headerProps}/>
        {children}
        <Footer />
        </>
)
};

export default Layout;