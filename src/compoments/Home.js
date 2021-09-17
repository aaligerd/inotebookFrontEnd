import React from 'react'
import AddNote from './AddNote'
import Mynotes from './Allnotes'


function Home() {
    
    return (
        <div className="container">
            <AddNote/>            
            <Mynotes/>
        </div>

    )
}

export default Home
