import React, { Component } from "react";
import NoteComponent from "../NoteComponent/";
import "./styles.scss";

class ColumnComponent extends Component {
  render() {
    const { column } = this.props;
    return (
      <div className="column">
        <div>{column.title}</div>
        <ul>
          {column.notes &&
            column.notes.map(note => (
              <li key={note.id}>
                <NoteComponent note={note} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default ColumnComponent;
