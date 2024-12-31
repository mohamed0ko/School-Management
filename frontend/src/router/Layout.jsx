import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "../components/Content";

function Layout() {
    return (
        <div>
            <Header />
            <div>
                <div style={{ height: "100vh" }}>
                    <Content />
                </div>
                <Footer />
            </div>
        </div>
    );
}
export default Layout;
