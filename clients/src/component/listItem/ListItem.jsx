import { AddCircleOutlineOutlined, ExpandCircleDownOutlined, PlayCircleOutlined, RecommendOutlined } from '@mui/icons-material'
import { useEffect } from 'react';
import { useState } from 'react';
import './listItem.scss';
import axios from "axios"
import { Link } from 'react-router-dom';



function ListItem({ index, item }) {
  const [isHover, setIsHover] = useState(false);
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data)

      } catch (err) {
        console.log(err)
      }
    };
    getMovie()
  }, [item])
  console.log(movie);

  return (
    <Link to={{pathname:"/watch" , movie : movie}} >
    <div className='listItem'
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={movie?.imgTitle} alt="" />

      {isHover && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />



          <div className="info">
            <div className="icons">
              <PlayCircleOutlined className='icon' />
              <AddCircleOutlineOutlined className='icon' />
              <RecommendOutlined className='icon' />
              <ExpandCircleDownOutlined className='icon' />
            </div>
            <div className="itemInfo">
              <span>{movie.time}</span>
              <span className='limit'>{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="description">
              <span>{movie.desc}</span>
            </div>
            <div className="genre">
              <span>{movie.genre}</span>
            </div>

          </div>
        </>
      )}
    </div>
    </Link>
  );
}

export default ListItem