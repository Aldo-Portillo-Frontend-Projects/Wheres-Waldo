import React from "react";
import Header from "./components/Header";

function App() {
  

  function location(e){
    console.log(`offset X: ${e.pageX} offsetY: ${e.pageY}`)
  }
  return(
    <>

      <Header />
      <img src={require("./media/garden.jpeg")} alt="" onClick={location}></img>
    
    </>
  )
}

export default App;
