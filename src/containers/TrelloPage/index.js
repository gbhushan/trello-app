import React, { Component } from "react";
import ColumnComponent from "../../components/ColumnComponent/";
import './styles.scss';
// const NOTES_URL = '../../mock-data/notes.json';
// const data = import('../../mock-data/notes.json').then((res) => {console.log(res); return res.json();}).then((data) => data);

class TrelloPage extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
  async componentDidMount() {
    fetch("/notes.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }
  render() {
    const { data } = this.state;
    return (
      <section>
        {data && data.columns.map(column => <ColumnComponent key={column.id} column={column} />)}
      </section>
    );
  }
}

export default TrelloPage;
