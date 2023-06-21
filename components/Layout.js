import React from "react";

// import components
import Footer from "./Footer";

const Layout = ({children,}) => {
return(
        <>
        {children}
        <Footer />
        </>
)
};

export default Layout;