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


  const hiddenObjects = {
    globe: { xMin: 956, xMax: 1054, yMin: 252, yMax: 328, },
    adamAndEve: {xMin: 157, xMax: 363, yMin: 622, yMax: 799,},
    manEatingBird: {xMin: 1848, xMax: 1886, yMin: 620, yMax: 668,}
  }

  function locateGlobe(e){

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    if (hiddenObjects.globe.xMin < x && x < hiddenObjects.globe.xMax && hiddenObjects.globe.yMin < y && y < hiddenObjects.globe.yMax){
      console.log('Found globe')
    } else {
      console.log('try again')
    }
  }

  function locateAdamAndEve(e){

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    if (hiddenObjects.adamAndEve.xMin < x && x < hiddenObjects.adamAndEve.xMax && hiddenObjects.adamAndEve.yMin < y && y < hiddenObjects.adamAndEve.yMax){
      console.log('Found Adam and Eve')
    } else {
      console.log('try again')
    }
  }

  function locateManEatingBird(e){

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    if (hiddenObjects.manEatingBird.xMin < x && x < hiddenObjects.manEatingBird.xMax && hiddenObjects.manEatingBird.yMin < y && y < hiddenObjects.manEatingBird.yMax){
      console.log('Found Man Eating Bird')
    } else {
      console.log('try again')
    }
  }


  return(
    <>

      <Header />
      <img src={require("./media/garden.jpeg")} alt="" onClick={locateAdamAndEve}></img>
    
    </>
  )
}

export default App;
