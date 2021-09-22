import React,{useContext,useState} from 'react'
import noteContext from '../context/notecontext';

function AddNote() {
    const a=useContext(noteContext);
    const [note, setNote] = useState({title:"",description:"",tag:""})
    const handleChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
        
    }
    let {addNote} = a;
    const noteSubmit=()=>{
        addNote(note);
        document.getElementById('title').value="";
        document.getElementById('description').value="";
        document.getElementById('tag').value="";
        setNote({
            title:"",
            description:"",
            tag:""
        });
    }
    return (
        <div className="my-2">
            <h2 className="d-flex my-2" style={{fontSize:"30px",fontWeight:"600"}}> Add Note </h2>
            <form onSubmit={noteSubmit}>
                <div className="mb-3">                    
                    <input type="text" onChange={handleChange} className="form-control " id="title" name="title" placeholder="My Note Title" required />
                </div>
                <div className="mb-3">                    
                    <textarea type="text" onChange={handleChange} className="form-control" id="description" name="description" placeholder="My Note Description" required style={{height:"150px",overflow:"-moz-hidden-unscrollable"}} />
                </div>
                <div className="mb-3">                    
                    <input type="text" onChange={handleChange} className="form-control" id="tag" name="tag" placeholder="My Note Tag" required />
                </div>
                <span type="submit" className="btn btn-dark" onClick={noteSubmit}>Add</span>
            </form>
        </div>
    )
}

export default AddNote
