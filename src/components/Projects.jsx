import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import hostelmanagementpic from '../assets/hostelmanagement.png'
import permissionprojectpic from '../assets/permission.png'


const Projects = () => {
  const [projects, setProjects] = useState([
    {
      imgURL: hostelmanagementpic,
      ProjectLink: 'https://youtu.be/afGcn-QVrN4',
      title: 'Hostel Management System',
      about:
        'Users can know the availability of rooms in the hostel online.Admin can manage users data and hostel data through our website.',
      skillsUsed: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      year:"2022"
    },
    {
      imgURL: permissionprojectpic,
      ProjectLink: ' https://youtu.be/HKYpRYmZ2Do',
      title: 'College Permission System',
      about:
        'Students can take permission from Department staff through our website. Students can download the permission receipts. Department staff can grant or decline permissions online.',
      skillsUsed: ['HTML', 'CSS', 'MySql', 'PHP', 'Bootstrap'],
      year:"2022"

    },
  ])

  return (
    <div className="projects">

<div className='projectsHeader'>
  Projects : 
</div>

      {projects?.map((project, index) => {
        return (
          <div className="row project" key={index} >

            <div className="projectLeft col-md-4" style={{display:"flex"}}>
              <img
                src={project.imgURL}
                alt="Girl in a jacket"
                width="200"
                height="100"
              />
            </div>

            <div className="projectRight col-md-7" >

              <div style={{display:"flex"}} className='projectTitle' >

                <a href={project.ProjectLink}  target='/blank'>
                  <p className='makesmall'> {project.title} </p>
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                  style={{margin:"5px"}}
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>


              </div>

              <p className='text-white-50'>{project.about}</p>

              <div style={{display:"flex"}} className='row'>

              {
                project?.skillsUsed?.map((skill,idx)=>{
                  return(

                    <div key={idx} className='skill col-lg-1' >

                   {skill}

                  </div>

                  )
                })
              }

              </div>

            </div>
          </div>
        )
      })}

      <div className='ViewAllProjects mt-5 mb-5'>
        <Link to='/projects' state={{projects:projects}}> 
           View Full Project Archive
        </Link>



        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16" style={{marginLeft:"10px"}} >
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
      </div>
    </div>
  )
}

export default Projects
