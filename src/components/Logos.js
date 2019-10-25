import React from 'react'
import ReactLogo from '../assets/logo-react-blue.svg'
import ReduxLogo from '../assets/redux.svg'
import HTMLCSS from '../assets/html+css.svg'
import gitHub from '../assets/github.svg'
import nodeJS from '../assets/Nodejs.svg'
import expressJS from '../assets/expressjs.svg'
import mongoDB from '../assets/mongodb.svg'
import firebase from '../assets/firebase.svg'

const Logos = (props)=>{

    let logo = props.column==='1' ? 
    <div className='logoDiv'>
    <img src={ReactLogo} alt='react'/>
    <img src={ReduxLogo} alt='redux'/>
    <img src={HTMLCSS} alt='html+css'/>
    <img src={gitHub} alt='github'/></div>  :
    props.column === '3' ? 
    <div className='logoDiv'>
    <img src={nodeJS} alt='nodejs'/>
    <img src={expressJS} alt='express'/>
    <img src={mongoDB} alt='mongoDB'/>
    <img src={firebase} alt='firebase'/></div> :
    null
    
    return(
    <>       
    {logo}
    </>
    )
}

export default Logos