import { useState } from 'react'
import './App.css'

function App() {
  const [isYes, setIsYes] = useState(false)
  const [isNo, setIsNo] = useState(false)

  return (
    <div style={{overflow: 'hidden', display:'flex', flexDirection: 'column'}}>
      <span>
      {isYes ? <Yes /> : 
      isNo ? <No setIsYes={setIsYes} /> :
      
      <>
      <img src="https://storage.prompt-hunt.workers.dev/clfki0eos0001le08txkrrlbu_1" width="300px"/>
      <h1>hey cutie</h1>
      <h2>will you be my valentine?</h2>
      
      <span>

      <button onClick={() => {
        setIsNo(true)
        setIsYes(false)
      }}>no</button> <button onClick={() => {
        setIsYes(true)
      }}>yes</button> 
      

      </span>
      </> }
      </span>

      <span style={{marginTop: '60px'}}>
        <Footer setIsYes={setIsYes} setIsNo={setIsNo}/>
      </span>
    </div>
  )
}

const Yes = () => {
  return <>
    <img src="https://i2.wp.com/cdn.dribbble.com/users/605899/screenshots/3858779/animation_by_nikitin891.gif" width="300px"/>
    <h2>WOOOOOOOOOOOOOOO SEEE U THEN 😘</h2>
  </>
}
//@ts-ignore
const No = ({setIsYes}) => {
  const [xoffset, setXoffset] = useState(0)
  const [yoffset, setYoffset] = useState(0)
  
  return <>
    <img src="https://i.imgflip.com/4o2iy4.jpg?a473736" width="300px" />
    <h2>the no button is just for show</h2>
    <button style={{
      position: 'relative',
      left: `${xoffset}px`,
      top: `${yoffset}px`
    }} onClick={() => {
      setXoffset(Math.random() * (100 - - 100) - 100)
      setYoffset(Math.random() * (100 - - 100) - 100)
      // console.log(xoffset, yoffset)
    }}>no</button> <button onClick={() => {
        setIsYes(true)
      }}>yes</button>
  </>
}
//@ts-ignore
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
