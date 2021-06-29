import React from 'react'
import '../styles/school.css'



export default function School(props){
    return(
        <div>
        <h3>{props.name}</h3>
        <p>{props.program}</p>
        <p>{props.years}</p>
        </div>
    )
}