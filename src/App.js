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
  const[moveNav,setMoveNav] = useState('')
  const[info,setInfo] = useState('')
  const[infoContainerClass,setInfoContainerClass] = useState('')

  function startMode(){
    setBorderExpansion('startAction')
    setButtonFade('buttonFade')
    setMiddleChange('middleExpansion')
    setUpperChange('upperShrink')
    setLowerChange('lowerShrink')
    setLogoMove('logoMove')
    setMoveNav('moveNav')
    showTechLogos(true)
  }

  function mouseOnStart(){
    setHoverEffect('hoverEffect')
  }
  function mouseOffStart(){
    setHoverEffect('')
  }

  function handleInfoContainerChanges(infoType){
    if(info === ''){
      setMoveNav('moveNav2')
      setInfo(infoType)
      setInfoContainerClass('load-info')
    }else if(info === infoType){
      setMoveNav('moveNav')
      setInfo('')
      setInfoContainerClass('')
    }else if(info !== '' && info !==infoType){
      setInfo(infoType)
      setInfoContainerClass('load-info')
    }
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
            {techLogos ? <Logo column={'1'}/> : null}
          </div>
          <div className={'column-2 '+logoMove}>
            <div className={'logoContainer ' }>
              <img className='logo' src='https://i.imgur.com/9ip0F5Y.png' alt='logo'/>
              <div>Web development done right</div>
            </div>
            <div className={'navContainer '+moveNav}>
              <div 
              className={info === 'about' ? 'navItem activeItem': 'navItem'}
              onClick={()=>handleInfoContainerChanges('about')}>About</div>
              <div 
              className={info==='projects' ? 'navItem activeItem':'navItem'}
              onClick={()=>handleInfoContainerChanges('projects')}>Projects</div>
              <div 
              className={info==='contact' ? 'navItem activeItem':'navItem'}
              onClick={()=>handleInfoContainerChanges('contact')}>Contact</div>
            </div>
            {info=== '' ? null : info==='about' ? 
            <div className={'infoContainer '+infoContainerClass}>
              <div>
                <img src='https://i.imgur.com/3sKFLrS.png' alt='infoImg'/>
              </div>
              <div className='about-text'>
              Johnny Handy is an idea behind a dream.<br/>
              A dream of coding, designing and creating the best interfaces for unique users with different necessities.<br/>
              A dream of taking the best of technology and web services and bring it to benefit of  daily processes, contributing to growth and development.<br/>
              My name is Roger Peixoto, and I am behind Johnny Handy's idea. Here, I work with the development of websites and web services, with a focus on User Experience oriented design.<br/> 
              Feel free to get in touch if you feel that we can work and collaborate together!
              </div>
            </div> : info==='projects' ?
            <div className={'infoContainer '+infoContainerClass}>
              <div className='project-item'>Detalhe</div>
              <div className='project-item'>Detalhe</div>
              <div className='project-item'>Detalhe</div>
            </div> : info==='contact' ?
            <div className={'infoContainer '+infoContainerClass} >
              <div className='contact-email'>
                  Email
              </div>
              <div className='phone-number'>
                  Phone
              </div>
              <div className='social-media'>
                  Social Media
              </div>
            </div>: 
            null}
          </div>
          <div className={'column-3 '+borderExpansion}>
            <div className={'buttonContainer '+buttonFade}>
              <button className={'startButton '+hoverEffect}
               onMouseEnter={()=>mouseOnStart()} 
               onMouseLeave={()=>mouseOffStart()} 
               onClick={()=>{startMode()}}>START</button>
            </div>
            {techLogos ? <Logo column={'3'}/> : null}
          </div>
        </div>
        <div className={'lower '+lowerChange}></div>
      </header>
    </div>
  );
}

export default App;
