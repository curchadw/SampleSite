import React, {Component} from 'react'
import Schools from './Schools'
import '../styles/main.css'

export default class Education extends Component{
    
    render(){
        const schools = [{name: `The Flatiron School`,
                      program: `Online Software Engineering`,
                      years: `2020 - 2021`}]
        return(
            <div className='container'>
                <Schools schools={schools} /> 
            </div>
        )
    
    }
    
}