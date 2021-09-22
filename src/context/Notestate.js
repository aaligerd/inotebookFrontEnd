import { useContext, useState } from 'react'
// import {authContext as UserAuth} from './authcontext'
import NoteContext from './notecontext'

const NoteState = (props) => {
    const mainurl="http://localhost:2020/api/note";
    const initialnotes = [];
    const [notes, setNotes] = useState(initialnotes);
    // const useauthcontext=useContext(UserAuth);

    // let {userstate}=useauthcontext;

    

    //fetch notes from db athenticate by token
    const fetchNotes = async () => {
        updateNoteState();

    }
    
    //add notes in db 
    const addNote = async (addingnote) => {
        let noteObject = {
            "title": addingnote.title,
            "description": addingnote.description,
            "tag": addingnote.tag
        };
        const url = `${mainurl}/newnote`;
        const sendnote = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MjM3ZDI0ZTJkYTljZTcwZjlhNzYxIn0sImlhdCI6MTYzMTgyMzk1NH0.XvIZz6OW4xoMO2O-mjcX5O4fVe4MWwUpRCeVzuBTQoY"

            },
            body: JSON.stringify(noteObject)
        });
        updateNoteState();
    }
    const updateNoteState = async () => {
        const url = `${mainurl}/fetchnote`;
        const noteFechedRaw = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MjM3ZDI0ZTJkYTljZTcwZjlhNzYxIn0sImlhdCI6MTYzMTgyMzk1NH0.XvIZz6OW4xoMO2O-mjcX5O4fVe4MWwUpRCeVzuBTQoY"
            }
        });
        if (!noteFechedRaw) {
            console.log(await noteFechedRaw.json())
        } else {
            const noteFetch = await noteFechedRaw.json();

            setNotes(noteFetch)
        }
    }

    //delete note from db
    const noteDelete = async (id) => {
        const url = `${mainurl}/delete/${id}`
        const deleteresponse = await fetch(url, {
            method: "DELETE",
            headers: {
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MjM3ZDI0ZTJkYTljZTcwZjlhNzYxIn0sImlhdCI6MTYzMTgyMzk1NH0.XvIZz6OW4xoMO2O-mjcX5O4fVe4MWwUpRCeVzuBTQoY"
            }
        });
        updateNoteState();
    }
    //update existing note in db
    const updateNoteById = async (enote) => {
        const { etitle, edescription, etag, eid } = enote;
        let eNoteObjects = {
            "title": etitle,
            "description": edescription,
            "tag": etag
        };
        const url = `${mainurl}/updatenote/${eid}`;
        const updateCurrentNote = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MjM3ZDI0ZTJkYTljZTcwZjlhNzYxIn0sImlhdCI6MTYzMTgyMzk1NH0.XvIZz6OW4xoMO2O-mjcX5O4fVe4MWwUpRCeVzuBTQoY",
            },
            body: JSON.stringify(eNoteObjects)
        });
        updateNoteState();

    }
    return (
        <NoteContext.Provider value={{ notes, fetchNotes, addNote, noteDelete, updateNoteById }}>
            {props.children}
        </NoteContext.Provider>)

}
export default NoteState;