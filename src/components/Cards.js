import React from 'react'
import {useLocation} from 'react-router-dom'
export default function Cards() {
    let match=useLocation()
    return (

            <h1 >{match.pathname}</h1>

    )
}
