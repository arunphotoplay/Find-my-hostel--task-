import React from "react";
import Login from "./components/Login";
import Useracces from "./components/Useracces";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/user" element={<Useracces/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
