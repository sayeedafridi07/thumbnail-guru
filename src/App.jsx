import React from "react";
import Navbar from "./components/Navbar";
import AuthModalContainer from "./components/auth/AuthModalContainer";

function App() {
  return (
    <div>
      <Navbar />
      <AuthModalContainer />
    </div>
  );
}

export default App;
