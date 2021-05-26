import React, {Component} from 'react'
import '../styles/footer.css'


class Footer extends Component{
  
  
  render(){
   
    return(
      <div>
        <footer className='main_footer'>
          <p>Facebook</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
        </footer>
      </div>
    )
  }
}

export default Footer;