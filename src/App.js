import React from "react";
import Header from "./components/Header";

function App() {
  

  function location(e){
    //This function is only used for development
    console.log(e)
    console.log(`offset X: ${e.screenX} offsetY: ${e.screenY}`)
  }

  const globe = {
    xMin: 723,
    xMax: 796,
    yMin: 331,
    yMax: 391,
  }

  function locateTarget(e){
    if (globe.xMin < e.screenX && e.screenX < globe.xMax && globe.yMin < e.screenY && e.screenY < globe.yMax){
      console.log('Found globe')
    } else {
      console.log('try again')
    }
  }
  return(
    <>

      <Header />
      <img src={require("./media/garden.jpeg")} alt="" onClick={locateTarget}></img>
    
    </>
  )
}

export default App;


//GLobe in middle 965 < x < 1063 : 336 < y < 413