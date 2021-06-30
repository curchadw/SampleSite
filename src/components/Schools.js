import React, {Component} from 'react'
import School from './School'


export default class Schools extends Component{
    
    render(){
        const { schools } = this.props
    
        return(
            <div className='school_container'>
               {schools.map(school => <School school={school} key={school.id} /> )}
            </div>
        )
    
    }
    
}