import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>
                    <div className="d-flex">
                    <button style={{display:"contents"}}>
                        <span ><i className="fa fa-sun-o mx-2" style={{display:'flex'}}></i></span>
                        <span ><i className="fa fa-moon-o mx-2" style={{display:'flex'}}></i></span>               
                </button>
                </div>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar