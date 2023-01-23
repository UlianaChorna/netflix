import { createListFailure, createListStart, createListSuccess,  createUserFailure,  createUserStart,  createUserSuccess,  deleteListFailure, deleteListStart, deleteListSuccess,  deleteUserFailure,  deleteUserStart,  deleteUserSuccess,  getListsFailure, getListsStart, getListsSuccess, getUsersFailure, getUsersStart, getUsersSuccess, } from "./UserAction"
import axios from "axios"


//get
export const getUsers = async( dispatch) => {
    dispatch(getUsersStart())
try{
    const res = await axios.get("/user", {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            ,
        }
    })
    dispatch(getUsersSuccess(res.data))
}catch(err){
   dispatch( getUsersFailure())
}
} 
// //create
  export const createUser = async (user, dispatch) => {
  
      dispatch(createUserStart());
      try {
        const res = await axios.post("/auth/register", user, {
          headers: {
            token: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzUzZTE4NjAxZThlNzIzZDM3ZDg0ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Mzg3NTAyNywiZXhwIjoxNjc0MzA3MDI3fQ.qk3Q67f7QG_CW7WkpI1qLhY-En4CypAgrL9_w5DuQ3Q",
          },
        });
        dispatch(createUserSuccess(res.data));
      } catch (err) {
        dispatch(createUserFailure());
      }
    };

// // delete
export const deleteUser = async( id,dispatch) => {
    dispatch(deleteUserStart())
try{
    await axios.delete("/user/"+ id, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            ,
        }
    })
    dispatch(deleteUserSuccess(id))
}catch(err){
   dispatch( deleteUserFailure())
}
} 