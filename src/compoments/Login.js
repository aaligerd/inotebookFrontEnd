import {React,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import authContext from '../context/authcontext'

function Login() {
    const authreader= useContext(authContext);
    let {userLogin}= authreader;
    let history=useHistory();
    const formSubmit=(e)=>{
        e.preventDefault();
        userLogin();
        history.push("/");
    }
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login
