import React from 'react'
import "./Portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpg'
import IMG10 from '../../assets/portfolio10.jpg'
import { useState } from 'react'


const data = [
  {
    id: 10,
    image: IMG10,
    title:'refreshyourhouse.ro',
    github: "https://github.com/Dillassh/house-refresh",
    demo: "https://refreshyourhouse.ro/"
  },
  {
    id: 1,
    image: IMG1,
    title:'Refresh Your House',
    github: "https://github.com/Dillassh/refreshouse",
    demo: "https://refreshouse.netlify.com"
  },
  {
    id: 2,
    image: IMG2,
    title:'Dillash Store',
    github: "https://github.com/Dillassh/Dillash-store",
    demo: "http://dillash-store.netlify.com"
  },
  {
    id: 3,
    image: IMG3,
    title:'Blog',
    github: "https://github.com/Dillassh/Blog_react",
    demo: "https://fancy-cucurucho-664ecd.netlify.app"
  },
  {
    id: 4,
    image: IMG4,
    title:'E-commerce',
    github: "https://github.com/Dillassh/emag-try",
    demo: "http://emag-tryout.netlify.app"
  },
  {
    id: 5,
    image: IMG5,
    title:'Portfolio',
    github: "https://github.com/Dillassh/Portfolio-Vic",
    demo: "https://working-hard.netlify.app"
  },
  {
    id: 6,
    image: IMG6,
    title:'Trydo',
    github: "https://github.com/Dillassh/trydo-website",
    demo: "https://trydo-template.netlify.app/"
  },
  {
    id: 7,
    image: IMG7,
    title:'To Do List',
    github: "https://github.com/Dillassh/to-do-list",
    demo: "https://to-do-list-vic.netlify.app/"
  },
  {
    id: 8,
    image: IMG8,
    title:'Rock Paper Scissors',
    github: "https://github.com/Dillassh/rock-paper-scissors",
    demo: "https://trydo-template.netlify.app/"
  },
  {
    id: 9,
    image: IMG9,
    title:'Guess The Number',
    github: "https://github.com/Dillassh/number-guess",
    demo: "https://nr-guess.netlify.app/"
  }
  
]

const Portfolio = () => {

  const counterSize = 6;
	const [postCounter, setPostCounter] = useState(counterSize);



  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
        
      <div className="container portfolio__container">
        {
          data.slice(0, postCounter).map(({id, image, title, github, demo}) => {
            return (
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta"> 
           <a href={github} className='btn' >Github</a>
           <a href={demo} className='btn btn-primary' >Live Demo</a></div>
        </article>
        )
          })
        }
        
        
        </div> 
        <button
						className='show-btn btn btn-primary'
						style={{ width: "200px" }}
						onClick={() => {
							setPostCounter(postCounter + counterSize);
						}}>
						Show more!
					</button>
    </section>
  )
}

export default Portfolio