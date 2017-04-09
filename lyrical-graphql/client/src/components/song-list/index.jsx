import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import API from 'src/api';
import styles from './song-list.scss';

const { fetchSongsQuery, deleteSongMutation } = API;

class SongList extends Component {
  static propTypes = {
    data: React.PropTypes.shape(),
    mutate: React.PropTypes.func.isRequired
  }

  static defaultProps = {
    data: {}
  }

  static renderLoading() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  static renderEmpty() {
    return (
      <div>
        <p>Create some songs by clicking the + below.</p>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick(id) {
    this.props.mutate({ variables: { id } })
      // Ignores local data, pulls fresh from server
      .then(() => this.props.data.refetch());
  }

  renderSongs(songs) {
    return songs.map(({ id, title }) => {
      return (
        <li className="collection-item" key={id}>
          <div>
            <Link to={`/songs/${id}`}>{title}</Link>
            <button
              onClick={() => this.onDeleteClick(id)}
              className={`${styles.deleteButton} secondary-content`}
            >
              <i className="material-icons red-text">delete</i>
            </button>
          </div>
        </li>
      );
    });
  }

  render() {
    const { data } = this.props;
    if (data.loading) return SongList.renderLoading();
    if (data.songs && !data.songs.length) return SongList.renderEmpty();

    return (
      <ul className="collection">
        {this.renderSongs(this.props.data.songs)}
      </ul>
    );
  }
}

export default graphql(deleteSongMutation)(
  graphql(fetchSongsQuery)(SongList)
);
