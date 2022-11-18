import React from 'react'
import workes from '../data/works'
import { Link } from 'react-router-dom'
import { nanoid } from "nanoid"; 

import "../styles/About.css"

export default function About() {
  const renderedWorks = workes.map(work => {
    return <div key={nanoid()} className="work--container">
      <img src={work.banner} alt=" " className="work--banner" />
      <div className="work--infos">
        <h2 className='works--heading'>{work.title}</h2>
        <p><span className="date">{work.year}</span> <span className="category">{work.category}</span></p>
        <p className="short-desc">{work.desc}</p>
      </div>
    </div>
  })
  return (
    <>

      <section className="top--section">
        <img src="https://cdn.discordapp.com/attachments/965026766462795786/1042814112419299499/image.png" alt="profile-picture" className="profile--img" />
        <div className="personal--infos">
          <h1 className="hello-section">Hi, I am John,<br />
            Creative Technologist</h1>
          <p className="short-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <button className="download--btn">Download Resume</button>
        </div>
      </section>
      <section className="recent--posts">
        <p className="recent-post-text">Recent posts</p>
        <Link className="view-all" to="/workes">View all</Link>
        <div className="recent-post">
          <h3 className="recent-post-heading">Making a design system from scratch</h3>
          <p className="date--categorie">
            <span>12 Feb 2020</span>
            <span> | </span>
            <span>Design, Pattern</span>
          </p>
          <p className="short--summary">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className="recent-post">
          <h3 className="recent-post-heading">Creating pixel perfect icons in Figma</h3>
          <p className="date--categorie">
            <span>12 Feb 2020</span>
            <span> | </span>
            <span>Design, Pattern</span>
          </p>
          <p className="short--summary">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </section>
      <section className="featured--work">
        <p className='recent-post-text'>Featured works</p>
        {renderedWorks.splice(0,3)}
      </section>
    </>
  )
}
