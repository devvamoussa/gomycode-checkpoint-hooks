import MovieList from "./component/MovieList"
import React from "react";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <MovieList/>
    </div>
  );
}

export default App;
