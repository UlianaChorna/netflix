import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { useEffect } from "react";
import { deleteUser, getUsers } from "../../context/userContext/apiCalls";

export default function UserList() {
 
  const {users, dispatch} = useContext(UserContext)

  useEffect(() => {
    getUsers(dispatch)
   },[dispatch])

  const handleDelete = (id) => {
   deleteUser(id,dispatch)
  };
  
  const columns = [
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilePic} alt="" />
            {params.row.username}
            
          </div>
        );
      },
    },
    { field: "_id", headerName: "ID", width: 90 },
  
    { field: "email", headerName: "Email", width: 200 },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname:"/user/" + params.row._id,user:params.row}}>
              <button className="productUserEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productUserDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={r=> r._id}
      />
    </div>
  );
}
