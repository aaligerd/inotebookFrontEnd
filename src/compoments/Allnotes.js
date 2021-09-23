import React, { useContext, useEffect, useState, useRef } from 'react'
import noteContext from '../context/notecontext'
import authContext from '../context/authcontext'
import Note from './Note'

function Mynotes(props) {

  const n = useContext(noteContext);
  const [enote, setNote] = useState({eid:"", etitle: "htag", edescription: "htag", etag: "htag" });
  const A=useContext(authContext);
  let {userstate}=A;
  let { notes, fetchNotes,updateNoteById } = n;
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, [])

  const handleChange = (e) => {
    setNote({ ...enote, [e.target.name]: e.target.value });

  }
  const updateAndToogle = () => {
    updateNoteById(enote);
    modalbar.current.click();
  }
  const handleEdite = (id) => {
    let i = 0;
    for (let index = 0; index < notes.length; index++) {
      if (notes[i]._id === id) {
        break;
      }
      i++;

    } setNote({
      eid:notes[i]._id,
      etitle: notes[i].title,
      edescription: notes[i].description,
      etag: notes[i].tag
    });
  }
  const modalbar = useRef(null)
  return (
    <div>
      <div class="modal fade" id="exampleModal" ref={modalbar} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="mb-3">
                  <input type="text" onChange={handleChange} className="form-control " id="etitle" value={enote.etitle} name="etitle" placeholder="My Note Title" required />
                </div>
                <div className="mb-3">
                  <textarea type="text" onChange={handleChange} className="form-control" value={enote.edescription} id="edescription" name="edescription" placeholder="My Note Description" required style={{ height: "150px", overflow: "-moz-hidden-unscrollable" }} />
                </div>
                <div className="mb-3">
                  <input type="text" onChange={handleChange} className="form-control" id="etag" value={enote.etag} name="etag" placeholder="My Note Tag" required />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={updateAndToogle}>Save</button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="d-flex my-2" style={{ fontSize: "30px", fontWeight: "600" }}> My Notes </h2>
      <div className="row">

        {notes.length ? notes.map((note) => {
          return <div key={note._id} className="col-sm-12 col-md-6  col-lg-4 col-xl-3 my-2">
            <Note editHandle={handleEdite} id={note._id} title={note.title} description={note.description} date={new Date(note.date).toLocaleString()} tag={note.tag} />

          </div>
        }) : "No Notes"}



      </div>


    </div>
  )
}

export default Mynotes
