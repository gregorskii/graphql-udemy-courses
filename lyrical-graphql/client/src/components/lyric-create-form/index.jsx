import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import API from 'src/api';

const { addLyricMutation, fetchSongQuery } = API;

class LyricCreateForm extends Component {
  static propTypes = {
    mutate: React.PropTypes.func.isRequired,
    params: React.PropTypes.shape().isRequired
  }

  constructor(props) {
    super(props);

    this.state = { lyric: '' };
    this.onLyricChange = this.onLyricChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onLyricChange(event) {
    this.setState({
      lyric: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        songId: this.props.params.id,
        content: this.state.lyric
      }// ,
      // Using http://dev.apollodata.com/react/cache-updates.html
      // refetchQueries: [{
      //   query: fetchSongQuery,
      //   variables: {
      //     id: this.props.params.id
      //   }
      // }]
    });

    this.setState({
      lyric: ''
    });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onFormSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="lyric"
                type="text"
                value={this.state.lyric}
                onChange={this.onLyricChange}
              />
              <label htmlFor="lyric">Add a Lyric</label>
            </div>
          </div>
          <div>
            <button type="submit" className="waves-effect waves-light btn">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default graphql(addLyricMutation)(LyricCreateForm);
