import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <Hero />
      {/* <Features /> */}
    </div>
  );
};

export default App;
