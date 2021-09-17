import React, { useContext } from 'react'
import noteContext from '../context/notecontext';

function Note(props) {
    const a=useContext(noteContext);
    let {noteDelete} = a ;

    const handleDelete = () => {
        console.log(props.id);
        noteDelete(props.id);
    }
    const handleEdit = () => {
        console.log(props.id);
    }

    const buttonStyle = {
        display: "contents"
    };


    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    {props.title}
                </div>
                <div className="card-body">
                    <p className="card-text text-start" style={{ fontSize: '19px' }}>{props.description}</p>
                    <div className="d-flex">
                        <button style={buttonStyle} onClick={props.updateExistingNote(a)}><i className="fa fa-pencil-square mx-2" aria-hidden="true"></i></button>
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
