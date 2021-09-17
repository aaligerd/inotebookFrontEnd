import { useState } from 'react'
import NoteContext from './notecontext'

const NoteState = (props) => {
    const initialnotes = [];
    const no_notes = "No Notes";
    const [notes, setNotes] = useState(initialnotes);

    //fetch notes from db
    const fetchNotes = async () => {
        const url = "http://localhost:2020/api/note/fetchnote";
        const noteFechedRaw = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MjM3ZDI0ZTJkYTljZTcwZjlhNzYxIn0sImlhdCI6MTYzMTgyMzk1NH0.XvIZz6OW4xoMO2O-mjcX5O4fVe4MWwUpRCeVzuBTQoY"
            }
        });
        if (!noteFechedRaw) {
            console.log(await noteFechedRaw.json())
        } else {
            const noteFetch = await noteFechedRaw.json();

            setNotes(notes.concat(noteFetch))
        }

    }
    //add notes in db
    const addNote=async (addingnote)=>{
        let noteObject={
            "title":addingnote.title,
            "description":addingnote.description,
            "tag":addingnote.tag
        };
        const url = "http://localhost:2020/api/note/newnote";
        const sendnote=await fetch(url,{
            method:"POST",           
            headers:{
                "Content-type": "application/json",
                "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MjM3ZDI0ZTJkYTljZTcwZjlhNzYxIn0sImlhdCI6MTYzMTgyMzk1NH0.XvIZz6OW4xoMO2O-mjcX5O4fVe4MWwUpRCeVzuBTQoY"
                
            },
            body:JSON.stringify(noteObject)
        });
        updateNoteState(); 
    }
    const updateNoteState=async()=>{
        const url = "http://localhost:2020/api/note/fetchnote";
        const noteFechedRaw = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MjM3ZDI0ZTJkYTljZTcwZjlhNzYxIn0sImlhdCI6MTYzMTgyMzk1NH0.XvIZz6OW4xoMO2O-mjcX5O4fVe4MWwUpRCeVzuBTQoY"
            }
        });
        const noteFetchAgain = await noteFechedRaw.json();
        setNotes(noteFetchAgain);
    }

    //delete note from db
    const noteDelete=async(id)=>{
        const url=`http://localhost:2020/api/note/delete/${id}`
        const deleteresponse=await fetch(url,{
            method:"DELETE",
            headers:{
                "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MjM3ZDI0ZTJkYTljZTcwZjlhNzYxIn0sImlhdCI6MTYzMTgyMzk1NH0.XvIZz6OW4xoMO2O-mjcX5O4fVe4MWwUpRCeVzuBTQoY"
            }
        });
        updateNoteState();
    }


    return (
        <NoteContext.Provider value={{ notes,fetchNotes,addNote,noteDelete}}>
            {props.children}
        </NoteContext.Provider>)

}
export default NoteState;