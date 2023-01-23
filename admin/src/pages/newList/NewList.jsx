import { useContext, useState } from "react";
import stor from "../../fbase.js";
import {ListContext} from "../../context/listContext/ListContext";
import {createMovie } from '../../context/movieContex/apiCalls'
import "./newList.css";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../../context/movieContex/MovieContext.js";
import { useEffect } from "react";
import { getMovies } from "../../context/movieContex/apiCalls.js";
import { createList } from "../../context/listContext/apiCalls.js";

export default function NewList() {
  const [list, setList] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

useEffect(() => {
getMovies(dispatchMovie)
},[])

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value })
  };

 const handleSelect = (e) => {
  let value = Array.from(e.target.selectedOptions, (option ) => option.value)
  setList({...list, [e.target.name]: value})
 }
console.log(list);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push("/list")
  }
 

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">         
        <div className="addProductItem">
          <label>Title</label>
          <input
           type="text" 
           placeholder="Popular Movie" 
           name="title"
            onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="type" onChange={handleChange}>
          <option >Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input 
          type="text" 
          placeholder="genre" 
          name="genre" 
          onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Content </label>
          <select
              multiple
              name="context"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
        </div>
       
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
       
      
        
      </form>
    </div>
  );
}
