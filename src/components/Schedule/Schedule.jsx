import React from 'react'

const Schedule = ({events}) => {

    const h = 600

  return (
    <div className="ShudleTab">
        <div className="timer">
          {Array.from({ length: 24 }, (_, i) => (
          <div className="timer_hour" key={i} style={{height: h/24-2}}
          >{i + 1}</div>))
        }
        </div>
        <div className='Schedule'>
        {events.map((e) => (
            <div className="event" 
            style={{backgroundColor: e.color, top: e.begin*(h/60/24), height: (e.end-e.begin)*(h/60/24)}}
            key={e.id}> 
            <h1>{e.title} </h1>
            {(e.end-e.begin)*(h/60/24) > 40 ? <h2> {e.end-e.begin > 59 ? `${Math.floor((e.end-e.begin)/60)}h` : ""}  {`${e.end-e.begin - Math.floor((e.end-e.begin)/60)*60}m`}</h2> : ''}
         
            </div>
        ))}
    </div>
  )
    </div>
  )
}

export default Schedule