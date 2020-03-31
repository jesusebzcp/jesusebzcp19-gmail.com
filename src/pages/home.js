import React from 'react';
import Auth from '../Auth.js';
import { useUser } from 'reactfire';





const Home = () => {
const user = useUser();
 
    return (
      <div className="container">
       { user && <h2>bienvenido : {user.email}</h2> }
        <Auth/>
        
      </div>
 
  
    );
}
 
export default Home;