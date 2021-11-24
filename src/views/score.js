import React from "react"
import { useParams } from "react-router"

export default function Score(props){
    const { score } = useParams()
    return <>
        <h2>您的成績</h2>
        <p>{score}</p>
    </>
}