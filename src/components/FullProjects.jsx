import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import {motion} from 'framer-motion'



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const FullProjects = () => {

  const location = useLocation()
  const navigate=useNavigate()
  const [projects,setProjects]=useState(location?.state?.projects||[])

  const [mousePos,setMousePos]=useState({
    x:0,
    y:0
  })

  const goBackHelper=()=>{
    navigate("/")
  }
  

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


  let variants={
    default:{
      x:mousePos.x-0,
      y:mousePos.y-0
    }
  }
    

  return (
    <div className='fullProjectBody'>

<motion.div className='cursor' 

      variants={variants}
      animate="default"
      
      />

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}  >
            <div className='mt-5' style={{width: "80%"}}>

              <div style={{display:"flex"}} className='textColor addMouseEffect' onClick={goBackHelper}>
                
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>

<p >Potla Sai Prasad</p>

              </div>

            <p style={{fontSize:"50px"}}>All Projects</p>

         <div>
        <TableContainer  >
      <Table sx={{ width: "100%", display: "table", tableLayout: "fixed" }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell style={{color:"white"}}>Year</TableCell>
            <TableCell align="left"  style={{color:"white"}}>Project</TableCell>
            <TableCell align="left" style={{color:"white"}}>Built With&nbsp;</TableCell>
            <TableCell align="left" style={{color:"white"}}>Link&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{color:"white"}} >
                {row.year}
              </TableCell>
              <TableCell align="left" style={{color:"white"}}>{row.title}</TableCell>
              <TableCell align="left" style={{color:"white"}}>

              <div style={{display:"flex"}} className='row'>

{
  row?.skillsUsed?.map((skill,idx)=>{
    return(

      <div key={idx} className='skill2 col-lg-1' >

     {skill}

    </div>

    )
  })
}

</div>



              </TableCell>
              <TableCell align="left" style={{color:"white"}}>
                
                <div className='fullProjectLink'>
                <a href={row.ProjectLink}  >Visit Project</a>
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
               
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>
        </div>

    </div>

        </div>

    </div>
  )
}

export default FullProjects