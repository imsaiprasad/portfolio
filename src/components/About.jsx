import React from 'react'
import { useState } from 'react'

const About = () => {

  const [skills,setSkills]=useState(["HTML","CSS","Bootstrap","Javascript","React Js","Node Js","Express Js","MongoDB","C","C++","Mysql"])
  return (
    <div className='aboutMain'>


<div className='aboutRespHead'>
ABOUT : 

</div>


<div className='aboutFullPage'>
<div className='aboutIntro' style={{marginBottom:"0.5rem"}}>

      <h4>Hello, I'm Sai Prasad, a MERN Developer</h4>

</div>

      <br></br>
      <p className='text-white-50'>Welcome! I'm Sai Prasad, a dedicated Full Stack Developer with a specialization in the MERN stack.</p>

      <h5 className='text-white-50 mb-5 '>Skills : 


      <div style={{display:"flex",margin:"1rem"}} className='row mt-4'>


{
skills?.map((skill,index)=>{

  return(

    <div key={index} className='skill col-lg-1' >

   {skill}

  </div>

  )

})
}

</div>

      </h5>



<p className='text-white-50'>I'm a proud graduate of <span style={{color:"white"}}>CMR COLLEGE OF ENGINEERING AND TECHNOLOGY</span>, where I gained a solid foundation in <span style={{color:"white"}}>COMPUTER SCIENCE</span>. This academic journey ignited my passion for crafting seamless digital solutions that blend innovation and functionality.</p>
  <p className='text-white-50'>My expertise lies in creating dynamic, user-centric applications that seamlessly marry design and code. From responsive front-end interfaces to robust back-end architecture, I thrive on transforming ideas into immersive digital experiences.</p>

<p className='text-white-50'> Browse my portfolio to explore the projects that showcase my commitment to excellence in every line of code.</p>


</div>
    </div>
  )
}

export default About