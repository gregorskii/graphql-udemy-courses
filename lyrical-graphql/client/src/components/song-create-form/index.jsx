import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import API from 'src/api';

const { fetchSongsQuery, addSongMutation } = API;

class SongCreateForm extends Component {
  static propTypes = {
    mutate: React.PropTypes.func.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = { title: '' };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{
        query: fetchSongsQuery
      }]
    }).then(() => {
      this.context.router.push('/');
    });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onFormSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="title"
                type="text"
                value={this.state.title}
                onChange={this.onTitleChange}
              />
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="col s6 left-align">
              <Link to="/" className="waves-effect waves-light btn yellow darken-3">Back</Link>
            </div>
            <div className="col s6 right-align">
              <button type="submit" className="waves-effect waves-light btn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default graphql(addSongMutation)(SongCreateForm);
