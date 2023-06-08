import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {API_KEY, imageUrl} from '../../constants/constants'

function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [urlid,seturlid]=useState('')
    useEffect(()=>{
      axios.get(props.url).then((response)=>{
        console.log(response.data)
         setMovies(response.data.results)
      })
    })

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
  const handleMovie=(id)=>{
      console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data)
        if(response.data.results.length!==0){
          seturlid(response.data.results[0])
        }else{
          console.log('trailer not available')
        }
      })
  }

  const CloseYoutube =()=>{
    seturlid(null)
}

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">

          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? "smallposter":"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="card in row" />  
          )}           
        </div>

      <div className='closeButton'>
        {urlid && <button className='closebutton' onClick={CloseYoutube} >Close</button>}
      </div>

        {urlid && <Youtube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}

export default RowPost
