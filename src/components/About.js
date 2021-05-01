import React, {Component} from 'react'
import '../images/gym.jpg'
import '../styles/about.css'

export default class About extends Component{
    
    
    render(){
        const img = require('../images/gym.jpg')
        
        return(
        <div id='about_me' className='about_box'>
           <div className='img_left'>
            <img src={img} alt='a_gym' height='400' width='385'/>
           </div>
           <div className='para_right'>
            <h3 className='greet'>Greetings</h3>
            <p>Experience in Ruby on Rails, JavaScript, and React/Redux and a background in customer service. My perpetual curiosity
to understand how things work led me to software development. With empathy and strong communication skills, I'm able
to build relationships and work with both internal and external stakeholders. My positivity, work ethic and drive helps push
through any challenge presented to me.
</p>
           </div>
        </div>
        )
    }
}