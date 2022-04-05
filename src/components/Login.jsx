import React, { useState } from "react";
import "./Login.css"
import { Link } from 'react-router-dom';
import Api from "../services/Api";
import { useAlert } from 'react-alert'
const Login = props => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState(); 
    const alert = useAlert();

    const loginUser =(e,email,password)=>{
        e.preventDefault();
        Api.post('/auth/login',{email,password})
        .then(({data})=>{
            window.sessionStorage.setItem('data', JSON.stringify(data))
            alert.success("Login efetuado com sucesso!")})
            .catch(err=>{
                alert.error("Falha no login")   
            })
    } 


    return (
        <div className="login container d-grid gap-sm-0">
          
            <div className="row">
                <div className="col-6 col-sm-6 p-0 picture">
                    
                </div>
                <form  className="form col-6" id="form-login" onSubmit={e=>loginUser(e,email,password)}>
                    <div className="title text-center">
                        <h1>Login</h1>
                    </div>
                    <div className="content">
                       
                       
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" onChange={e=> setEmail(e.target.value)} />
                        </div>
                        <div className="input-group mb-3 ">
                            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" onChange={e=> setPassword(e.target.value)}/>
                        </div>
                        <button className="btn btn-primary m-4" type="submit">Login</button>
                    </div>
                        <Link to="/register">
                            <p>Sing up</p>
                        </Link>
                    
                </form>

            </div>
        </div>

    );
}

export default Login;