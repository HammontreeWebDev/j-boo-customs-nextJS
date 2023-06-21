import React from "react";

// import components
import Header from "./Header";

const Layout = ({children}) => {
return(
    <>
    <Header />
    {children}
    // import Footer
    </>
)
};

export default Layout;