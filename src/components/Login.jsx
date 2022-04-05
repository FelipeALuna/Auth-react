import React from "react";
import "./Login.css"
import { Link } from 'react-router-dom';
const Login = props => {
    return (
        <div className="login container d-grid gap-sm-0">
          
            <div className="row">
                <div className="col-6 col-sm-6 p-0 picture">
                    
                </div>
                <form action="" className="form col-6" id="form-login">
                    <div className="title text-center">
                        <h1>Login</h1>
                    </div>
                    <div className="content">
                       
                       
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" />
                        </div>
                        <div className="input-group mb-3 ">
                            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                        </div>
                        <button className="btn btn-primary m-4" type="button">Login</button>
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