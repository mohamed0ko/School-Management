import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "../components/Content";

function Layout() {
    return (
        <>
            <Header />
            <div>
                <Content /> <br />
                <Footer />
            </div>
        </>
    );
}
export default Layout;
