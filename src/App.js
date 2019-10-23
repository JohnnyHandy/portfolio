import React,{useState} from 'react';
import Logo from './components/Logos'
import './App.css';

function App() {
  const[upperChange,setUpperChange] = useState('')
  const[lowerChange,setLowerChange] = useState('')
  const[middleChange,setMiddleChange]= useState('')
  const[borderExpansion,setBorderExpansion] = useState('')
  const[hoverEffect,setHoverEffect] = useState('')
  const[buttonFade,setButtonFade] = useState('')
  const[logoMove,setLogoMove] = useState('')
  const[techLogos,showTechLogos]=useState(false)

  function startMode(){
    setBorderExpansion('startAction')
    setButtonFade('buttonFade')
    setMiddleChange('middleExpansion')
    setUpperChange('upperShrink')
    setLowerChange('lowerShrink')
    setLogoMove('logoMove')
    showTechLogos(true)
  }

  function mouseOnStart(){
    setHoverEffect('hoverEffect')
  }
  function mouseOffStart(){
    setHoverEffect('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className={'upper '+upperChange}></div>
        <div className={'middle '+middleChange}>
          <div className={'column-1 '+borderExpansion}>
            <div className={'buttonContainer '+buttonFade}>
              <button className={'startButton '+hoverEffect}
               onMouseEnter={()=>mouseOnStart()} 
               onMouseLeave={()=>mouseOffStart()} 
               onClick={()=>{startMode()}}>START</button>
            </div>
            {/* {techLogos ? <Logo/> : null} */}
          </div>
          <div className={'column-2 '+logoMove}>
            <div className={'logoContainer ' }>
              <img className='logo' src='https://i.imgur.com/9ip0F5Y.png' alt='logo'/>
              <p>Web development done right</p>
            </div>
          </div>
          <div className={'column-3 '+borderExpansion}>
            <div className={'buttonContainer '+buttonFade}>
              <button className={'startButton '+hoverEffect}
               onMouseEnter={()=>mouseOnStart()} 
               onMouseLeave={()=>mouseOffStart()} 
               onClick={()=>{startMode()}}>START</button>
            </div>
          </div>
        </div>
        <div className={'lower '+lowerChange}></div>
      </header>
    </div>
  );
}

export default App;
