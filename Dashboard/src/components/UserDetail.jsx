import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import TopBar from './TopBar';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function UserDetail({user, setDisplay, display}) {
  const { idUser } = useParams();
  console.log(idUser);
  const [userDet, setUserDet] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {

        const response = await axios.get(`http://localhost:3010/api/users/${idUser}`);
        console.log(response.data);
        setUserDet(response.data)

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [])

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
      <TopBar user ={user} setDisplay={setDisplay} display={display}/>
      {isLoading && <p>Loading...</p>}

      {!isLoading &&
        <Link to="/users">Volver a Usuarios</Link>
      }

      <h2>{userDet.first_name || <Skeleton />} {userDet.last_name || <Skeleton />}</h2>
      <img
            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
            src={userDet.image}
            alt={userDet.first_name}
            style={{ width: '50%', objectFit: 'cover' }}
          />
      <p>Email: {userDet.email || <Skeleton count={2} />}</p>
      <p>Dirección: {userDet.address || <Skeleton count={3} />}</p> 

      
    </div>
    </div>
    </>
  )
}

export default UserDetail;