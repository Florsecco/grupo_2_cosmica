import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function UserDetail() {
  const { idUser } = useParams();
  console.log(idUser);
  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {

        const response = await axios.get(`http://localhost:3010/api/users/${idUser}`);
        console.log(response.data);
        setUser(response.data)

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [])

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {!isLoading &&
        <Link to="/users">Volver a Usuarios</Link>
      }

      <h2>{user.first_name || <Skeleton />} {user.last_name || <Skeleton />}</h2>
      <img
            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
            src={user.image}
            alt={user.first_name}
            style={{ width: '90%', height: '400px', objectFit: 'cover' }}
          />
      <p>Email: {user.email || <Skeleton count={2} />}</p>
      <p>Dirección: {user.address || <Skeleton count={3} />}</p> 

      
    </div>
  )
}

export default UserDetail;