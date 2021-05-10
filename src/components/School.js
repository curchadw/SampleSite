import React from 'react'
import '../styles/school.css'



export default function School(){
    return(
        <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.program}</p>
        <p>{this.props.years}</p>
        </div>
    )
}