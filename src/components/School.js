import React from 'react'
import '../styles/school.css'



export default function School(props){
    return(
        <div>
        <h3>{props.school.name}</h3>
        <p>{props.school.program}</p>
        <p>{props.school.years}</p>
        
        </div>
    )
}