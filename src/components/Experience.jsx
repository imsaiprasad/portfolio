import React from 'react'
import { useState } from 'react'

const Experience = () => {
  const [experience, SetExperience] = useState([
    {
      from: 'Dec 2022',
      to: 'Apr 2023',
      companyName: 'OSOS Private Limited',
      role: 'Full Stack Developer Intern',
      responsibilities:
        "Redesigned UI of the Website (Spaarks).Created reusable components using ReactJS. Created API's using Nodejs , expressjs , Mongodb.Responsible for CRM maintenance and development.",
      skills: [
        'React Js',
        'Node Js',
        'Express Js',
        'MongoDB',
        'Bootstrap',
        'TypeScript',
      ],
    }
  ])

  return (
    <div>

<div className='experienceHeader'>
  Experience : 
</div>


      {experience?.map((exp, index) => {
        return (
          <div
            key={index}
                style={{ margin:"20px 0px"}}
                className='experience'

          >
            <div className="row">

              <div
                className="leftExp col-lg-4 text-white-50"
              >
                     <p style={{margin:"10px"}}>{exp.from} - {exp.to}</p>
              </div>

              <div
                className="col-lg-8 rightExp"
              >
<div style={{padding:"10px"}} >

                <div className='experienceHead'>
                  <p style={{fontSize:"larger"}}>{exp.role} - {exp.companyName}</p>
                </div>
                
                <p  className='rightExpInner text-white-50'>{exp.responsibilities}</p>
                <div style={{display:"flex"}} className='row'>
                {
                  exp.skills.map((skill,idx)=>{
                    return (
                    <div key={idx} className='skill col-lg-1'>
                      {skill}
                    </div>)
                  })
                }
                </div>
</div>


              </div>

            </div>

          </div>
        )
      })}


    </div>
  )
}

export default Experience
