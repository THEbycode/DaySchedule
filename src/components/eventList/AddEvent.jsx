import React, { useState , useEffect} from 'react'

export const AddEvent = ({add_event, colorIndex}) => {

    const [title, setTitle] = useState("")

    const [beginHour, setBeginHour] = useState(0)
    const [beginMinute, setBeginMinute] = useState(0)
    const [endHour, setEndHour] = useState(0)
    const [endMinute, setEndMinute] = useState(0)

    const colors = [
  "#FF0000",
  "#FF8800",
  "#FFFF00",
  "#88FF00",
  "#00FF00",
  "#00FF44",
  "#00FF88",
  "#00FFBB",
  "#00FFFF",
  "#0088FF",
  "#0000FF",
  "#8800FF",
  "#FF00FF",
  "#FF00BB",
  "#FF0088",
  "#FF0044"];
    
  const [color, setColor] = useState(colors[colorIndex])

        function adding_event(){
            add_event({
                id: crypto.randomUUID(),
                title: title,
                color: color,
                begin: beginHour*60 + beginMinute,
                end: endHour*60 + endMinute
            })

            setTitle("")
            setBeginHour(0)
            setBeginMinute(0)
            setEndHour(0)
            setEndMinute(0)
            setColor(colors[colorIndex])
        }

    useEffect(() => {
    setColor(colors[colorIndex])
    }, [colorIndex])

  return (
    <div className='new_event'>
        <div className="colors">
            {colors.map((e, index) => (
                <div className="color" style={{backgroundColor: `${e}`, border: `${e == color ? 1 : 0}px solid black`}} key={index} onClick={(f) => setColor(e)}></div>
            ))}
        </div>
        <span>Title: </span>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <br />
        <span>Begin</span>
        <input type="text" value={beginHour < 10 ? `0${beginHour}` : beginHour} onChange={(e) => {var num = Number(e.target.value); num < 25 && num >= 0 ? setBeginHour(num) : ''}}/>
        <span>:</span>
        <input type="text" value={beginMinute < 10 ? `0${beginMinute}` : beginMinute} onChange={(e) => {var num = Number(e.target.value); num < 60 && num >= 0 ? setBeginMinute(num) : ''}}/>
        <br />
        <span>End</span>
        <input type="text" value={endHour < 10 ? `0${endHour}` : endHour} onChange={(e) => {var num = Number(e.target.value); num < 25 && num >= 0 ? setEndHour(num) : ''}}/>
        <span>:</span>
        <input type="text" value={endMinute < 10 ? `0${endMinute}` : endMinute} onChange={(e) => {var num = Number(e.target.value); num < 60 && num >= 0 ? setEndMinute(num) : ''}}/>
        <br />
        <button onClick={(e) => adding_event()}>Add Event</button>
    </div>
  )
}
