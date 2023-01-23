import './featured.scss'
import axios from "axios"
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import { useState } from 'react'
import { useEffect } from 'react'

function Featured({type,setGenre}) {

   const [content,setContent] = useState({})

   useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        console.log(localStorage.getItem("user"));
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
 
    <div className='featured'>
        {type &&  (
        <div className="category">
        <span>{type === "movie" ? "Movie": "TV Shows"}</span>
        <select name="genre" id="genre" onChange={e=>setGenre(e.target.value)} >
        <option value="action">Action</option>
        <option value="anime">Anime</option>
        <option value="comedy">Comedies</option>
        <option value="crime">Crime</option>
        <option value="dramas">Dramas</option>
        <option value="fantasy">Fantasy</option>
        <option value="horror">Horror</option>
        <option value="documentaries">Documentaries</option>
        <option value="holidays">Holidays</option>
        <option value="romance">Romance</option>
        <option value="sports">Sports</option>
        <option value="triller">Triller</option>
        </select></div>
    )}
        <img className='imgTitle' src={content.imgTitle} alt="" />

        <div className="info">
            <img src={content.imgSmall} alt="" />
            <span className='desc'>
               {content.desc}
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>

                <button className="more-info">
                    <InfoOutlined/>    <span> More info</span> </button>
            </div>
        </div>
    </div>
  )
}

export default Featured