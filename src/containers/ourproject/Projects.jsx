import React from 'react'
import { project1, project2, project3, project4, project5, project6, project7, project8, project9, project10, project11, project12, project13 } from './image'

import './projects.css'

const Projects = () => {
  return (
    <div className="kec__projects section__padding" id='projects'>
      <div className="kec__projects-container gradient__bg section__padding">
        <h3 className='h__headtext'>Our Projects</h3>
        <p className="p__para">Our projects are like sculptures in the making, each one a testament to our craftsmanship and creativity. With every chip of the chisel, every curve and contour, we shape our projects into works of art that leave a lasting impression on all who behold them. </p>

        <div className="kec__projects-container_box gradient__box section__padding">

          <div className="kec__box1">
            <p className='p__para'>Project: Residential building( Exterior & Interior Design and Supervision)</p>
            <p className='p__para'>Client: Mrs. Pitamber Dhungana</p>
            <p className='p__para'>Location: Oil Nigam, Biratnagar-3</p>
          </div>

          <div className="kec__box2">
            <img src={project1} alt="project" />
            <img src={project5} alt="project" />
            <img src={project3} alt="project" />
            <img src={project4} alt="project" />
            <img src={project6} alt="project" />
            <img src={project2} alt="project" />
            <img src={project7} alt="project" />
            <img src={project8} alt="project" />

          </div>

        </div>

        <div className="kec__projects-container_box gradient__box section__padding">

          <div className="kec__box1">
            <p className='p__para'>Project: INTERIOR DESIGN OF URBAN SPORTS(SHOP).</p>
            <p className='p__para'>Client: MR. SAGAR DHUNGANA</p>
            <p className='p__para'>Location: BRT-10(OPPOSITE OF SHIKSHADEEP COLLEGE)</p>
          </div>

          <div className="kec__box2">
            <img src={project9} alt="project" />
            <img src={project10} alt="project" />
            <img src={project11} alt="project" />
            <img src={project12} alt="project" />
            <img src={project13} alt="project" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Projects
