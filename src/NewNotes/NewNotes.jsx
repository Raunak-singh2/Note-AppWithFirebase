import React, { useState } from "react";
import Section from "../UI/Section";
import NewFrom from "./NewFrom";

const NewNote = (props) => {
  const [error, setErroe] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const enterNoteHandler=async(noteText)=>{
    setErroe(null);
    setisLoading(true);
    try {
      const response =await fetch(
        "https://noteapp-36083-default-rtdb.europe-west1.firebasedatabase.app/notes.json",
        {
          method: "POST",
          body: JSON.stringify({ text: noteText }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //    error constructor
      if (!response.ok) {
        throw new Error("Somthingd happend there guys....");
      }
      //    error constructor

      const data = await response.json();
      const generateId=data.name;
      console.log(generateId)

      const createNotes={
        id:generateId,
        text:noteText
      }

      console.log(createNotes);
      props.onAddNotes(createNotes);

    } catch (error) {
      
      setErroe(error.message || 'Sothing happend there guys please try again!');
    } finally {
      setisLoading(false);
    }
  };
  return (
    <Section>
      <NewFrom onEnterNote={enterNoteHandler} loading={isLoading}/>
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewNote;
