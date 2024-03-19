import React, { useState, useEffect } from "react";
import axios from "axios";
import TopBar from './TopBar';


import UserCard from "./UserCard";
import CardSkeleton from "./CardSkeleton";

function UserList({user, setDisplay, display}) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3010/api/users`
      );
      console.log(response);
      setUsers(response.data.users);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (

    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
      <TopBar user ={user} setDisplay={setDisplay} display={display}/>
    <div className="container-fluid">
      <h5>Usuarios</h5>
      <div className="row">
        {isLoading && <CardSkeleton cards={8} />}
        {users.length > 0 &&
          users.map((user) => {
            return <UserCard {...user} key={user.id} />;
          })}
      </div>
    </div>
    </div>
    </div>
  );
}

export default UserList;