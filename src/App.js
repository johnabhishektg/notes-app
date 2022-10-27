import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import NoteList from "./components/NoteList";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 2061025,
      text: "This is my first note",
      date: "22/7/2022",
    },
    {
      id: 2061026,
      text: "Bhavesh is a twat",
      date: "23/7/2022",
    },
  ]);

  const [darkTheme, setDarkTheme] = useState(false);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // adding note
  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: Math.round(Math.random() * 10000),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // delete note
  const DeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={darkTheme ? "dark-theme App" : "App"}>
      <Header handleToggleSwitch={setDarkTheme} />
      <Search handleSearchField={setSearchField} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchField)
        )}
        handleAddNote={AddNote}
        handleDeleteNote={DeleteNote}
      />
    </div>
  );
}

export default App;
