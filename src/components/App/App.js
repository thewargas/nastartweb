import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";

function App() {
  return (
    <div className={`root`}>
      <div className={`page`}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
