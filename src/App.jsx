import { useState ,useEffect,useRef} from 'react'
import './App.css'
import ScrollIntoView from 'react-scroll-into-view'
import Experience from "./components/Experience"
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import {motion,MotionConfig} from 'framer-motion'

function App() {

  const about=useRef(null)
  const experience=useRef(null)
  const projects=useRef(null)
  const contact=useRef(null)



  const [activeSection, setActiveSection] = useState(null);

  const sectionRefs = {
    about: useRef(null),
    experience:useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7, // Adjust this threshold as needed
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Entry is in the viewport
          
          setActiveSection(entry.target.id);
          
          if(entry.target.id==="about")
          {
            if(about)
            {
              classAdder(about)

            }
          }
          else if(entry.target.id==="experience")
          {
            if(experience)
            {
              classAdder(experience)

            }
          }
          else if(entry.target.id==="projects")
          {
            if(projects)
            {
              classAdder(projects)

            }
          }
          else if(entry.target.id==="contact")
          {
            if(contact)
            {
              classAdder(contact)

            }
          }

          // console.log("idx",entry)
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observe the section elements
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, []);


  const [mousePos,setMousePos]=useState({
    x:0,
    y:0
  })



  useEffect(()=>{

    const mouseMove=(e)=>{

      e.preventDefault()

      setMousePos({
        x:e.clientX,
        y:e.clientY
      })

    }

    window.addEventListener('mousemove',mouseMove)


    return ()=>{
      window.removeEventListener('mousemove',mouseMove)
    }

  },[])


 

  function classAdder(whichSection)
  {
    about.current.classList.remove("active")
    experience.current.classList.remove("active")

    projects.current.classList.remove("active")

    contact.current.classList.remove("active")

    whichSection.current.classList.add("active")

  }


let variants={
  default:{
    x:mousePos.x-0,
    y:mousePos.y-0
  }
}

function socialMediaNavigate(to)
{
  if(to==="facebook")
  {
    window.open("https://www.facebook.com/profile.php?id=100047043943039"); 

  }
  else if(to==="linkedin")
  {
    window.open("https://www.linkedin.com/in/potla-sai-prasad-b3165b21a"); 
    
  }
  else if(to==="github")
  {
    window.open("https://github.com/imsaiprasad"); 

  }
}




  return (
    <div className="Main row display-flex justify-content-center" >

     

<MotionConfig transition={{ duration: 0 }}>
<motion.div className='cursor' 

variants={variants}
animate="default"

/>
  </MotionConfig>

      <div
        className="MainLeft col-lg-5"
        style={{ minHeight: '200px',textAlign: "justify"}}
      >



  
        <div className='sticky-lg-top leftMainResp'  >

                <div>
               <div className='name'>
               Potla Sai Prasad
                </div>

                <p>Full Stack developer</p>

              
                <div className='controllers'>

                  <div className='item my-lg-4 active addMouseEffect' onClick={()=>{classAdder(about)}} ref={about}>
                 
                 <ScrollIntoView selector="#about" >
                   <div >ABOUT</div>
                 </ScrollIntoView>

                  </div>

                  <div className='item my-lg-4 addMouseEffect' ref={experience} onClick={()=>{classAdder(experience)}}>


                  <ScrollIntoView selector="#experience">
                  <div>EXPERIENCE</div>

                 </ScrollIntoView>
                    
                  </div>

                  <div className='item my-lg-4 addMouseEffect' ref={projects} onClick={()=>{classAdder(projects)}}>
                  <ScrollIntoView selector="#projects">
                  <div>PROJECTS</div>

                 </ScrollIntoView>
                    
                  </div >

                  <div className='item my-lg-4 addMouseEffect' ref={contact} onClick={()=>{classAdder(contact)}}>
                  <ScrollIntoView selector="#contact">
                  <div>CONTACT</div>

                 </ScrollIntoView>
                    
                  </div >

                </div>


   
                <div style={{display:"flex"}} className='iconsX iconResp'>


<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-github addMouseEffect" viewBox="0 0 16 16" onClick={()=>{socialMediaNavigate("github")}}>
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-linkedin addMouseEffect" viewBox="0 0 16 16" onClick={()=>{socialMediaNavigate("linkedin")}}>
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-facebook addMouseEffect" viewBox="0 0 16 16" onClick={()=>{socialMediaNavigate("facebook")}}>
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>

                 </div>


                </div>


                


        </div>


      </div>


      <div className="MainRight col-lg-6" style={{ padding:"0px" ,textAlign: "justify"}}>

      <div style={{ textAlign: "justify" }} id="about" className='para' ref={sectionRefs.about} >
           <About/>
      </div>

        <div style={{ textAlign: "justify" }} id="experience" className='para' ref={sectionRefs.experience} >

          <Experience />

        </div>

        <div  id="projects" className='para' ref={sectionRefs.projects} >
          <Projects/>
        </div>

        <div style={{ border: '2px solid rgb(100, 225, 225)' ,textAlign: "justify"}}  id="contact" className='para' ref={sectionRefs.contact}>
          <Contact />
          

        </div>

        <div className='para text-white-50'>
        The design inspiration for this project was drawn from the remarkable portfolio of <span style={{color:"white"}}>Brittany Chiang</span>, whose work continues to be a source of creativity and inspiration in the web development community. 
        </div>


      </div>

    </div>
  )
}

export default App
