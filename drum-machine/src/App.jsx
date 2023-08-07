import React from 'react'
import './App.css'
import Drumpad from './Drumpad'

function App() {
  const audioData = [
    {id: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", description: "Heater 1"},
    {id: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", description: "Heater 2"},
    {id: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", description: "Heater 3"},
    {id: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", description: "Heater 4"},
    {id: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", description: "Clap"},
    {id: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", description: "Open-HH"},
    {id: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", description: "Kick-n-hat"},
    {id: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", description: "Kick"},
    {id: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", description: "Closed-HH"}
  ]


  const [description, setDescription] = React.useState("")

  const drumpads = audioData.map(pad => {
    return (<Drumpad key={pad.id} id={pad.id} src={pad.src} description={pad.description} changeDisplay={changeDisplay}/>)
  })

  function changeDisplay(newDisplay){
    setDescription(newDisplay)
  }

  return (
    <div id="drum-machine">
      <div id="pads">
        {drumpads}
      </div>
      <div id="display">
        {description}
      </div>
    </div>
  )
}

export default App
