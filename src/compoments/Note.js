import React, { useContext } from 'react'
import noteContext from '../context/notecontext';


function Note(props) {
    const a = useContext(noteContext);
    let { noteDelete } = a;
    let {title,description,id,updateExistingNote,editHandle}=props;

    const handleDelete = () => {
        noteDelete(props.id);
    }
    

    const buttonStyle = {
        display: "contents"
    };


    return (
        <div>
            {/* <Editnote id={props.id} /> */}
            <div className="card text-center">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    <p className="card-text text-start" style={{ fontSize: '19px' }}>{description}</p>
                    <div className="d-flex">
                        {/*update method*/}
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" style={buttonStyle} onClick={()=>{editHandle(id)}}><i className="fa fa-pencil-square mx-2" aria-hidden="true"></i></button>
                        <button style={buttonStyle} onClick={handleDelete}><i className="fa fa-trash mx-2" aria-hidden="true"></i></button>
                        
                    </div>
                </div>
                <div className="card-footer text-muted">
                    {props.date}
                </div>
            </div>
        </div>
    )
}

export default Note
