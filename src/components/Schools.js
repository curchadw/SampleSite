import React, {Component} from 'react'
import School from './School'


export default class Schools extends Component{
    
    render(){
        const {education} = this.props
        return(
            <div>
               {education.map(edu =><School edu={edu} key={edu.id}/>)}
            </div>
        )
    
    }
    
}