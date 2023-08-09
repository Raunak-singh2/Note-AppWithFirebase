import React from "react";
import NoteItems from "./NoteItems";

const Notes = ({ items }) => {
  let noteList = <h2>No note found! start Adding new notes</h2>;
  if (items.length > 0) {
    noteList = (
      <ul>
        {
          items.map((note) => (
          <NoteItems key={note.id}>{note.text}</NoteItems>
        ))
        }
      </ul>
    );
  }

let content=noteList;

  if(items.error){
    content=<button onClick={items.onFetch}>Try again</button>;
  }
  if(items.loading){
    content=<p style={{color:'darkgreen',fontSize:'bolder'}}>Fetching Notes Please wait....</p>
  }
  return (
    <section className="section">
      <div className="container">
        {content}
      </div>
    </section>
  );
};

export default Notes;
