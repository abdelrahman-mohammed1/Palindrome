import { useEffect } from "react"
import { useState } from "react"

export default function App() {

  const [time, setTime] = useState(1500)
  const [interval, setInterval] = useState(true)
  const [counter, setCounter] = useState(false)
  const [isActive, setIsActive] = useState(true);
  function selectWorkTime() {
    setTime(1500)
    setInterval(true)
    setCounter(false)
    setIsActive(true)
  }
  function selectBreakTime() {
    setTime(300)
    setInterval(false)
    setCounter(false)
    setIsActive(false)
  }

  if (time === 0) return <Message setCounter={setCounter} setIsActive={setIsActive} setTime={setTime}></Message>
  return (
    <div className="app">
      <h1 >Pomodoro Timer</h1>
      <div className="btn">
        <ButtonWork selectWorkTime={selectWorkTime} isActive={isActive} >Pomodoro</ButtonWork>
        <ButtonBreak selectBreakTime={selectBreakTime} isActive={isActive}  >Short Break</ButtonBreak>
      </div>
      <Timer >
        <Time time={time} setTime={setTime} counter={counter} />
      </Timer>
      <Footer counter={counter} interval={interval} setInterval={setInterval} setTime={setTime} setCounter={setCounter} />
    </div>
  )
}

function ButtonWork({ children, selectWorkTime, isActive }) {
  return <button onClick={selectWorkTime} className={isActive ? 'active' : ''} >
    {children}
  </button>
}
function ButtonBreak({ children, selectBreakTime, isActive }) {
  return <button onClick={selectBreakTime} className={!isActive ? 'active' : ''}>
    {children}
  </button>
}
function Timer({ children }) {
  return (
    <div className="timer">
      {children}
    </div>
  )
}
function Time({ time, setTime, counter }) {
  useEffect(function () {
    if (!counter) return;
    const id = setInterval(() => {
      setTime(time - 1)
    }, 1000)
    return () => clearInterval(id)
  }, [time, setTime, counter])
  const Min = Math.floor(time / 60)
  const Sec = time % 60;
  return (
    <div className="card">

      <div className="time">

        <h2>
          {Min < 9 ? `0${Min}` : Min}:{Sec < 9 ? `0${Sec}` : Sec}
        </h2>
      </div>
    </div>
  )
}

function Footer({ setCounter, setTime, interval }) {
  return <footer>
    <div title="Play" className="container" onClick={() => setCounter(true)}>
      <i className="fa-regular fa-circle-play"></i>
    </div>
    <div title="Pause" className="container" onClick={() => setCounter(false)}>
      <i className="fa-solid fa-pause"></i>

    </div>
    <div title="Reset" className="container" onClick={() => interval ? setTime(1500) : setTime(300)}>

      <i className="fa-solid fa-rotate-right"></i>
    </div>
  </footer>
}

function Message({ setTime, setIsActive, setCounter }) {
  function handelClick() {
    setIsActive(true); setTime(1500); setCounter(false)

  }

  return <div className="message">
    <h2>✊🏻 time is End</h2>
    <div className="btn-back">
      <button className="back" onClick={() => handelClick()}>👈 Back</button>
    </div>
  </div>
}