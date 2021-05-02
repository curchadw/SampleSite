import React from 'react'
import '../styles/school.css'



export default function School(){
    return(
        <div>
        <h3>{props.edu.name}</h3>
        <p>{props.edu.program}</p>
        <p>{props.edu.years}</p>
        </div>
    )
}