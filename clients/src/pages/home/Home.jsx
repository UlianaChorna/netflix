
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Featured from '../../component/featured/Featured'
import List from '../../component/list/List'
import NavBar from '../../component/navbar/NavBar'
import  './home.scss'
import axios from 'axios'

function Home({type}) {
  const [lists,setLists] = useState([]);
  const [genre,setGenre] = useState(null);


  useEffect(()=>{
    const getRandomLists = async () => {
      try{
        const token = JSON.parse(localStorage.getItem("user")).accessToken
        console.log(token)
        const url = `list${type ? "?type=" + type : ""}${genre ? "&genre="+ genre : ""}`
        
        const res = await axios.get(
              url,{
            headers:{
              token: "Bearer " + token,
            },

          });
          console.log(res.data);
          setLists(res.data)
        }catch(err){
        console.log(err);
      }
    }
    getRandomLists();
  },[type,genre])

  return (
    <div className='home'>
    <NavBar/>
   <Featured type={type} setGenre={setGenre}/>
   {lists.map((list) => (
    <List list={list}  />
   ))}
   
  
    </div>
  )
}

export default Home