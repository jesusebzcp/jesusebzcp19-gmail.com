import React, {useState} from 'react';
import 'firebase/auth';



import { useFirebaseApp, useUser } from 'reactfire';
import { Link } from 'react-router-dom';





export default (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword]  = useState('');

    const firebase = useFirebaseApp();

    const user = useUser();



    const crearUsuario = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    }
    const login = async ()=> {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    }
    
    
    const logout = async () => {
    await firebase.auth().signOut();
    }


    return (
<div>

 

  
  {!user &&
    <div className="formulario">
    <div className="form-group">
      <label htmlFor="Email">Email address</label>
        <input 
        onChange={(e)=> setEmail(e.target.value)}
          type="email" className="form-control" id="Email" aria-describedby="email"/>
      <small id="emailSmall" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div className="form-group">
    <label htmlFor="Password">Password</label>
    <input
    onChange={(e)=> setPassword(e.target.value)}
    type="password" className="form-control" id="Password"/>
    </div> 
    <div className="TyC">
    
      <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Si, Acepto <Link className="alert-link" to={'TyC'}> Terminos y condiciones</Link> aplican</label>
  </div>
    </div>



<button
onClick={crearUsuario}
type="submit" className="btn btn-outline-primary btn-block">
  Resgistrarme
</button>
{!user && <button onClick={login} className="btn btn-danger btn-block">iniciar sesion</button>}



</div>
  
  }
   {user && <button onClick={logout} className="btn btn-danger btn-block">salir</button>}                       

 
  







     
   
    
    

    </div>
    )
}