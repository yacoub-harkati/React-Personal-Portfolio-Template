import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/About.css"

export default function About() {
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
        <div className="work--container">
          <img src="https://cdn.discordapp.com/attachments/965026766462795786/1042814322872684564/image.png" alt=" " className="work--banner" />
          <div className="work--infos">
            <h2 className='works--heading'>Designing Dashboards</h2>
            <p><span className="date">2020</span> <span className="category">Dashboard</span></p>
            <p className="short-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        <div className="work--container">
          <img src="https://cdn.discordapp.com/attachments/965026766462795786/1042814552062042112/image.png" alt="" className="work--banner" />
          <div className="work--infos">
            <h2 className='works--heading'>Vibrant Portraits of 2020</h2>
            <p><span className="date">2018</span> <span className="category">Illustration</span></p>
            <p className="short-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        <div className="work--container">
          <img src="https://cdn.discordapp.com/attachments/965026766462795786/1042814552590516255/image.png" alt="" className="work--banner" />
          <div className="work--infos">
            <h2 className='works--heading'>36 Days of Malayalam type</h2>
            <p><span className="date">2018</span> <span className="category">Typography</span></p>
            <p className="short-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </section>
    </>
  )
}
