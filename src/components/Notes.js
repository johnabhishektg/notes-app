const Notes = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <p className="note-text">{text}</p>
      <div className="note-btm">
        <p className="date">{date}</p>
        <i
          className="fas fa-trash trash-ico"
          onClick={() => {
            handleDeleteNote(id);
          }}
        ></i>
      </div>
    </div>
  );
};

export default Notes;
