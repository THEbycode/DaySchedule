import React from 'react'

const Info = ({events}) => {
    var beasy = 0
    for (var event of events){
        beasy+= event.end - event.begin
    }

    var free_time = (60*24)-beasy
    
  return (
    <div>
        <h3>Free time: {Math.floor(free_time/60)}h {free_time-Math.floor(free_time/60)*60}m</h3>
        <h3>Events time: {Math.floor(beasy/60)}h {beasy-Math.floor(beasy/60)*60}m</h3>
    </div>
  )
}

export default Info