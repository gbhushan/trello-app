import React, {Component} from 'react';
import './styles.scss';

class NoteComponent extends Component {
  render() {
    const {note} = this.props;
    return (
      <div className="note">
        <header>Labels</header>
        <section>{note.content}</section>
        <footer>
        <div className="attachment">attachment</div>
        <div className="initials">{note.owner}</div>
        </footer>
      </div>
    )
  }
}

export default NoteComponent;