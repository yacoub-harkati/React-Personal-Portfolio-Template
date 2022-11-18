import React from 'react'
import workes from '../data/works'
import { nanoid } from 'nanoid'

export default function Workes() {
    console.log(workes)
    const renderedWorks = workes.map( work => {
        return <div key={nanoid()} className="work--container">
          <img src={work.banner} alt=" " className="work--banner" />
          <div className="work--infos">
            <h2 className='works--heading'>{work.title}</h2>
            <p><span className="date">{work.year}</span> <span className="category">{work.category}</span></p>
            <p className="short-desc">{work.desc}</p>
          </div>
        </div>
    })
    console.log(renderedWorks)
    return (<>
        <section className="featured--work">
        {renderedWorks}
      </section>
    </>)
}
