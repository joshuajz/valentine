import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isYes, setIsYes] = useState(false)
  const [isNo, setIsNo] = useState(false)

  return (
    <>
      {isYes ? <Yes /> : 
      isNo ? <No setIsYes={setIsYes} /> :
      
      <>
      <img src="https://storage.prompt-hunt.workers.dev/clfki0eos0001le08txkrrlbu_1" width="400px"/>
      <h1>hey cutie</h1>
      <h2>will you be my valentine?</h2>
      
      <button onClick={() => {
        setIsNo(true)
        setIsYes(false)
      }}>no</button> <button onClick={() => {
        setIsYes(true)
      }}>yes</button> </>} 
      {/* <Yes /> */}
      <span style={{position: 'absolute', left: 0, bottom: '10px', right: 0}}>
        <Footer setIsYes={setIsYes} setIsNo={setIsNo}/>
      </span>
    </>
  )
}

const Yes = () => {
  return <>
    <img src="https://i2.wp.com/cdn.dribbble.com/users/605899/screenshots/3858779/animation_by_nikitin891.gif" width="400px"/>
    <h2>WOOOOOOOOOOOOOOO SEEE U THEN 😘</h2>
  </>
}

const No = ({setIsYes}) => {
  const [xoffset, setXoffset] = useState(0)
  const [yoffset, setYoffset] = useState(0)
  
  return <>
    <img src="https://i.imgflip.com/4o2iy4.jpg?a473736" width="400px" />
    <h2>the no button is just for show</h2>
    <button style={{
      position: 'relative',
      left: `${xoffset}px`,
      top: `${yoffset}px`
    }} onClick={() => {
      setXoffset(Math.random() * (350 - - 350) - 350)
      setYoffset(Math.random() * (350 - - 350) - 350)
      // console.log(xoffset, yoffset)
    }}>no</button> <button onClick={() => {
        setIsYes(true)
      }}>yes</button>
  </>
}

const Footer = (props) => {
  return (
  <>
    <button onClick={() => {
      props.setIsYes(false)
      props.setIsNo(false)
    }}>reset</button>
  </>)
}

export default App
