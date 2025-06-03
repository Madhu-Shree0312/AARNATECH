// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//  import './App.css'
import React ,{useState} from 'react'
import axios from 'axios'
function App() {
  
  const [movie,setMovie]=useState([])

  const fetchMovie =()=>{
    axios.get("https://www.omdbapi.com/?s=kabhi&apikey=57a3af3e")
    .then((response)=>{

      console.log(response);
      setMovie(response.data.Search)
    })
  }
  return (
    <>

 <button onClick={fetchMovie}>Fetch Movie</button>
{
  movie.map((value,index)=>{
  return(
      <h3 key={index}>{value.Title}</h3>
  );
  })
  
 }

 </>

 
  )
}

export default App