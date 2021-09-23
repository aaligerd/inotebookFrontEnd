import {React,useState,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import authContext from '../context/authcontext'

function Signup() {
    const authreader= useContext(authContext);
    let {createUser}= authreader;
    const [userDetails, setcredentials] = useState({fullname:"",email:"",password:""});

    const credentialChanges=(e)=>{
        setcredentials({...userDetails,[e.target.name]:e.target.value});
    }
    let history=useHistory();
    const formSubmit=async(e)=>{
        e.preventDefault();
        await createUser(userDetails);
        history.push("/");
    }
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <form onSubmit={formSubmit}>
                    <div className="mb-3">
                            <label htmlFor="fullname" className="form-label">Name</label>
                            <input type="text" name="fullname" className="form-control" onChange={credentialChanges}  id="fullname" aria-describedby="emailHelp" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" onChange={credentialChanges}  id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" onChange={credentialChanges}  id="exampleInputPassword1" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
