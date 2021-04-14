import React, {Component} from 'react'


class Menu extends Component{
  
  
  render(){
    return(
      <div className='menu'>
        
          
          <p>Hi {this.props.name}!</p>
         
       
      </div>
    )
  }
}

export default Menu;