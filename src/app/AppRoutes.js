import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    Menu
} from "../components/index";

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Menu />} />
            </Routes>
        </div>

    );
}

export default AppRoutes;
