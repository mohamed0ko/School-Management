import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Correct import
import App from "./App.jsx";
import { Toaster } from "@/components/ui/sonner";
ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <Toaster />
    </React.StrictMode>
);
