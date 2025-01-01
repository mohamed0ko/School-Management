import React from "react";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Header from "../components/Header";

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
