import React from 'react'
import { project1, project2, project3, project4, project5, project6, project7, project8 } from './image'

import './projects.css'

const Projects = () => {
  return (
    <div className="kec__projects section__padding">
      <div className="kec__projects-container gradient__bg section__padding">
        <h3 className='p__header'>Our Recent Projects</h3>

        <div className="kec__projects-container_box gradient__box section__padding">

          <div className="kec__box1">
            <p className='p__para'>Project: Residential building( Exterior & Interior Design and Supervision)</p>
            <p className='p__para'>Client: Mrs. Pitamber Dhungana</p>
            <p className='p__para'>Location: Oil Nigam, Biratnagar-3</p>
          </div>

          <div className="kec__box2">
            <img src={project1} alt="project" />
            <img src={project2} alt="project" />
            <img src={project3} alt="project" />
            <img src={project4} alt="project" />
            <img src={project5} alt="project" />
            <img src={project6} alt="project" />
            <img src={project7} alt="project" />
            <img src={project8} alt="project" />

          </div>

        </div>

      </div>
    </div>
  )
}

export default Projects
