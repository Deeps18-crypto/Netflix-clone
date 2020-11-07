import React,{useEffect,useState} from 'react'
import request from "../request"
import axios from "../axios"
import "./Banner.css"

function Banner() {

    const [movie,setmovies] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const requests = await axios.get(request.fetchNetflixOriginal)
             setmovies(
             requests.data.results[Math.floor(Math.random() * requests.data.results.length)]
            )
            return requests
        }
        fetchData();
    },[]
    );
    console.log(movie);
return(
   <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        
        }}>
    <div className="banner__contents">
    
     <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>

     <div className="banner__buttons">
       <button className="banner__button">Play</button>
       <button className="banner__button">My List</button>
     
     </div>
     
     <h1 className="banner__description"> {movie?.overview}</h1>
     
    
    </div>
    
    <div className="banner__fadeBotton"/>
   
   </header>
 
)

}

export default Banner;
