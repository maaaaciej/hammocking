import React from "react";

import Header from "./components/header/header.component";
import Feed from "./components/feed/feed.component"

import "./App.css";



const App = () => {
  return (
    <div className="App">
      
      {/* Header */}
      <Header />
      <Feed/>

      
      {/* Post */}
    </div>
  );
};

export default App;
