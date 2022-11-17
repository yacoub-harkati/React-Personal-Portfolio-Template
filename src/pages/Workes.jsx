import React from 'react'
import { useParams } from 'react-router-dom'

export default function Workes() {
    const { id } = useParams()
    return (<>
        <section className="featured--work">
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
    </>)
}
