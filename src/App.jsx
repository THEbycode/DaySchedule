import { useState } from 'react'
import './App.css'
import { AddEvent } from './components/eventList/AddEvent'
import EventList from './components/eventList/EventList'
import Schedule from './components/Schedule/Schedule'
import Info from './components/info/Info'

function App() {

  const [eventList, setEventList] = useState([])
  const [colorIndex, setColorIndex] = useState(0)

  function add_event(event) {
    if (colorIndex < 15) {setColorIndex(colorIndex+1)}
    else {setColorIndex(0)}
    setEventList((events) => [...events, event])
  } 

  return (
    <>
      <div className="all">
        <div className="left">
          <Schedule events={eventList}/>
        </div>
        <div className="right">
          <Info events={eventList}/>
          <EventList events = {eventList}/>
          <AddEvent add_event={add_event} colorIndex={colorIndex}/>
        </div>
      </div>
    </>
  )
}

export default App
