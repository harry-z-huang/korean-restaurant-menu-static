import './App.css';
import React from "react";
import AppRoutes from "./AppRoutes";
import { Navbar } from '../components';

// Menu app designed for mobile menu viewing. No ordering functionality.

const App = () => {
  return (
    <div>
      <AppRoutes />
      {/* <Navbar class='footer'/> */}
    </div>
  );
};

export default App;
