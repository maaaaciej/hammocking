import React from "react";

import Header from "./components/header/header.component";

import Post from "./components/post/post.component"

import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* Header */}
      <Header />
    <Post/>
      {/* Post */}
  
    </div>
  );
};

export default App;
