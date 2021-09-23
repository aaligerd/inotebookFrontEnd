import userEvent from '@testing-library/user-event';
import {React,useContext} from 'react';
import { Link,useHistory} from 'react-router-dom';
import authContext from '../context/authcontext';


function Navbar() {
    const actxt=useContext(authContext);
    let history=useHistory();
    let {userstate,userLogout}=actxt;
    const handleLogout=async()=>{
        await userLogout();
        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>
                </div>
                {userstate.login?
                <div>
                <button className="btn btn-primary mx-1" onClick={handleLogout}>Logout</button>
                
            </div>:
                <div>
                    <Link className="btn btn-primary mx-1" to="/login">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup">Signup</Link>
                </div>}
                
                
                
                
            </div>
        </nav>
    )
}

export default Navbar
