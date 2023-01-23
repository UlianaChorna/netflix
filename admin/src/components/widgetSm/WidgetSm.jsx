import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers,setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async ( ) => {
      try{
        const res = await axios.get("/user?new=true",
        {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmQ1Nzg2Y2QyNjA3OTIyZWE2OTAyNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzM1MzU2MSwiZXhwIjoxNjczNzg1NTYxfQ.h1VJxvoF0g6ZULgWMHQ5ZiQwMd52pAklrbsh00dH88s",
          },
        });
        setNewUsers(res.data)
      }catch(err) {
        console.log(err);
      }
    }
    getNewUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user =>(
        <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li> 
        ) )}
      </ul>
    </div>
  );
}
