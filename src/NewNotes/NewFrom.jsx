import React from "react";
import { useRef } from "react";

const NewFrom = (props) => {
  const noteInputRef = useRef();

  const subbmitHandler = (e) => {
    e.preventDefault();
    const enteredValue = noteInputRef.current.value;
    if (enteredValue.trim().length > 0) {
      props.onEnterNote(enteredValue);
      noteInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={subbmitHandler} className="forms">
      <input type="text" ref={noteInputRef} placeholder="Add your notes..." />
      <button>{props.loading ? 'Adding..... ':'Add Note'}</button>
    </form>
  );
};

export default NewFrom;
