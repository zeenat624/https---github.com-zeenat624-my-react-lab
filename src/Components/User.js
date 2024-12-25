import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { username } = useParams();
  return <h1> Profile of user: {username}</h1>;
}

export default User;
