import React from "react";
import Header from "./components/Header";

function App() {
  

  function location(e){
    //This function is only used for development
    console.log(e)
    console.log(`offset X: ${e.pageX - e.target.offsetLeft} offsetY: ${e.pageY - e.target.offsetTop}`)
  }

  const globe = {
    xMin: 956,
    xMax: 1054,
    yMin: 252,
    yMax: 328,
  }

  function locateTarget(e){

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    if (globe.xMin < x && x < globe.xMax && globe.yMin < y && y < globe.yMax){
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