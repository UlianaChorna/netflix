import  './watch.scss'
import React from 'react'
import { KeyboardBackspaceOutlined } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'

function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className='watch'>
      <Link to ="/">
        <div className="back">
            <KeyboardBackspaceOutlined/>
            Home
            </div>
            </Link>
            <video
        className="video"
        autoPlay
        controls
        src={movie.trailer}
      />
    </div>
  )
}

export default Watch