import React from 'react'

function EventList({events}) {

  function str_time(m){
    var hour = Math.floor(m/60)
    var minute = m - Math.floor(m/60)*60
    return `${hour < 10? "0" : ""}${hour}:${minute < 10 ? "0" : ""}${minute}`
  }

  return (
    <>
      {events.map((e) => (
        <div className="event_info" key={e.id} style={{backgroundColor: `${e.color}`}}>
          <span> {e.title} </span>
          <span> {str_time(e.begin)} - {str_time(e.end)}</span>
        </div>
      ))}
    </>
  )
}

export default EventList