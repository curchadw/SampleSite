import React, {Component} from 'react'
import '../styles/header.css'

class Topbar extends Component{
  
  
  render(){
   
    return(
      <div>
        <header className='main_header'>
        <div className='name'>
          <p>Curtis Chadwell</p>
        </div>
        </header>
      </div>
    )
  }
}

export default Topbar;