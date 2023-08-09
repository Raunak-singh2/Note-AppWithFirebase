import React from "react";
import NewNote from "./NewNotes/NewNotes";
import Notes from "./Notes/Notes";
import { useState,useEffect } from "react";



const  App=()=>{


  useEffect(()=>{
    fetchNote();
   },[]);

  const [isLoading,setIsLoading]=useState(false);
  const [isError,setIsError]=useState(false);
  const [note, setNote]=useState([]);
  

const fetchNote =async ()=>{
  setIsError(null);
  setIsLoading(true);
  try{
    const response =await fetch("https://noteapp-36083-default-rtdb.europe-west1.firebasedatabase.app/notes.json");

    if (!response.ok) {
      throw new Error("Somthingd happend there guys....");
    }
    const data=await response.json();

    const loadedNotes = [];
    for (const result in data) {
      loadedNotes.push({
        id: result,
        text: data[result].text,
      });

      setNote(loadedNotes);
      setIsError(null);
           
    }
  }catch(error){
      setIsError(error.messages ||"somthinfs happend try later!");
  }finally{
    setIsLoading(false);
  }
}


const addNewNotesHandler = (noteData) => {
  setNote(prve=>prve.concat(noteData));
};


  return (
    <>
      <NewNote onAddNotes={addNewNotesHandler} />
      <Notes items={note} loading={isLoading} error={isError}
       onFetch={fetchNote}/>
    </>
  );
}

export default App;
