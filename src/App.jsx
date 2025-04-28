import React from "react";
import Navbar from "./components/Navbar";
import AuthModalContainer from "./components/auth/AuthModalContainer";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import RecentEdits from "./components/RecentEdits/RecentEdits";
import FeaturedTemplates from "./components/FeaturedTemplates/FeaturedTemplates";

function App() {
  return (
    <Layout>
      <AuthModalContainer />
      <Hero />
      <RecentEdits />
      <FeaturedTemplates />
    </Layout>
  );
}

export default App;
