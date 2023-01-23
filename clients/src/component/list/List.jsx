import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import  ListItem  from '../listItem/ListItem'
import React, { useRef } from 'react'
import './list.scss'
import { useState } from 'react'

function List({list}) {
  console.log(list);
    const [ isMovie, setIsMovie] = useState(false)
    const [isNumberScroll, setIsNumberScroll] = useState(0);
        const listRef= useRef()

    const handleClick= (direction) => {
        setIsMovie(true);
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === 'left' && isNumberScroll > 0){
            setIsNumberScroll(isNumberScroll - 1 );
        listRef.current.style.transform = `translateX(${230 + distance}px)`
        
        }
        if(direction === 'right' && isNumberScroll < 5){
            setIsNumberScroll(isNumberScroll +1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
            }
    }

  return (
    <div className='list'>
     <span className="listTitle">{list.title}</span>

    <div className="wrapper">
        <ArrowBackIosNewOutlined
         className='sliderArrow left' 
        onClick={() => handleClick("left")}
        style = {{display: !isMovie && 'none'}}/>

        <div className="container" ref={listRef}>
          {list.context.map((item,index) => (
            <ListItem index={index} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")}/>
    </div>
    </div>

  )
}

export default List