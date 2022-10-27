import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");
  const maxChars = 200;

  function handleChange(e) {
    if (maxChars - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  }

  function handleClick() {
    if (text.trim().length > 0) {
      handleAddNote(text);
      setText("");
    }
  }

  return (
    <div className="add-note">
      <textarea
        cols="30"
        rows="1"
        placeholder="Type to add a note.."
        value={text}
        onChange={handleChange}
      ></textarea>

      <div className="note-btm">
        <p className="char"> {maxChars - text.length} remaining</p>
        <button onClick={handleClick} type="submit" className="save-btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
