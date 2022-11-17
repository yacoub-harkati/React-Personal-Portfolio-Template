import React from 'react'
import { useParams } from 'react-router-dom'

export default function Workes() {
    const { id } = useParams()
    return (<>
        <div>Workes {id}</div>
    </>)
}
