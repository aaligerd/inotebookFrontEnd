import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notecontext'
import Editmmodal from './Editmmodal';
import Note from './Note'

function Mynotes(props) {
  const n=useContext(noteContext);
  let {notes,fetchNotes}=n;
  useEffect(() => {
    fetchNotes();
  },[1])

    return (
        <div>
            <h2 className="d-flex my-2" style={{ fontSize: "30px", fontWeight: "600" }}> My Notes </h2>
            <div className="row">
              <Editmmodal/>
              {notes.length? notes.map((note)=>{
                    return <div key={note._id} className="col-sm-12 col-md-6  col-lg-4 col-xl-3 my-2">
                                <Note updateExistingNote={props.updateExistingNote} id={note._id} title={note.title} description={note.description} date={new Date(note.date).toLocaleString()} tag={note.tag}/>
                            </div>
                }):"No Notes"}
                
                
                
            </div>
            

        </div>
    )
}

export default Mynotes
