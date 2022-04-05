import React, { useState } from "react";
import "./Register.css"
import { Link } from 'react-router-dom';
import Api from "../services/Api";
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom';

const Register = props => {
    
    const [ name , setName] = useState();
    const [ surname , setSurname] = useState();
    const [ password , setPassword] = useState();
    const [ email , setEmail] = useState();
    const [ data , setData] = useState();
    const alert = useAlert();
    const navigate = useNavigate()
    
    const registerUser= (e,name,surname,password,email)=>{
        e.preventDefault();
        
        Api.post("/auth/register",{name,surname,password,email})
        .then(({data})=>{
            alert.success('Registrado com sucesso !')
            navigate('/')
        })
        .catch((err)=>{alert.error('Erro no registro!')})
   }

    return (
        <div className="container d-grid gap-sm-0">
            <div className="row">
                <div className="col-6 col-sm-6 p-0 picture">
                    
                </div>
                <form onSubmit={e => registerUser(e,name,surname,password,email)} className="form col-6">
                    <div className="title text-center">
                        <h1>Register</h1>
                    </div>
                    <div className="content">
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon2" onChange={e => setName(e.target.value)} />
                            
                        </div>
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control" placeholder="Surname" aria-label="Surname" aria-describedby="basic-addon2" onChange={e => setSurname(e.target.value)} />
                                                
                        </div>
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" onChange={e => setEmail(e.target.value)}/>
                            
                        </div>
                        <div className="input-group mb-3 ">
                            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" onChange={e => setPassword(e.target.value)} />
                            
                        </div>
                        <button className="btn btn-info m-4" type="submit" >Register</button>
                    </div>
                        <Link to="/">
                            <p>Sing in</p>
                        </Link>

                </form>

            </div>
        </div>

    );
}

export default Register;