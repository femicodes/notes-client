import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Content.scss';
import Slab from '../Slab/Slab';
import NoteCard from '../NoteCard/NoteCard';
import { getNotes } from '../../utils/request';

export class Content extends Component {
  state = {
    noteCount: '',
    notes: []
  }

  logOut() {
    localStorage.removeItem('user_token');
    this.props.history.push('/');
  }

  componentDidMount() {
    const token = localStorage.getItem('user_token');

    if (!token) {
      this.props.history.push('/');
    }

    getNotes(token).then(res => {
      this.setState({ noteCount: res.data.count });
      this.setState({ notes: res.data.data });
    })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="content">
        <div className="content-header">
          <div className="items">

            <div className="first">
              <button onClick={() => this.logOut(this)}>Log out</button>
            </div>
          </div>
        </div>
        <div>
          <Slab count={this.state.noteCount} />
          {this.state.notes.map(item => {
            return <NoteCard key={item.id} id={item.id} title={item.title} body={item.body} />
          })}
        </div>
      </div>
    )
  }
}

export default withRouter(Content);

