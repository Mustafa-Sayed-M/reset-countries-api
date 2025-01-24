import React from "react";
import { Route, Routes } from "react-router-dom";
import { getThemeLocalStorage } from "./Utils/helpers";

// Pages:
import Home from "./Pages/Home";
import Country from "./Pages/Country";
// Components:
import Header from "./Components/Header/Header";

function App() {

  return (
    <div className={`App min-h-screen ${getThemeLocalStorage()} bg-bg-light-color-2 dark:bg-bg-dark-color-1 dark:text-white transition-colors`}>
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;