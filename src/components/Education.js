import React, {Component} from 'react'
import Schools from './Schools'
export default class Education extends Component{
    
    render(){
        const education = [{name: `The Flatiron School`,
                      program: `Online Software Engineering`,
                      years: `2020 - 2021`}]
        return(
            <div>
                <Schools education={education} /> 
            </div>
        )
    
    }
    
}