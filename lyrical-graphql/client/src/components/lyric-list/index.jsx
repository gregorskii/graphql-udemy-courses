import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import API from 'src/api';
import styles from './lyric-list.scss';

const { likeLyricMutation } = API;


class LyricList extends Component {
  static propTypes = {
    loading: React.PropTypes.bool,
    lyrics: React.PropTypes.arrayOf(React.PropTypes.shape()),
    mutate: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    loading: false,
    lyrics: []
  };

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
        <p>Create some lyrics using the form below.</p>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.onLikeClick = this.onLikeClick.bind(this);
  }

  onLikeClick(id, likes) {
    this.props.mutate({
      variables: { id },
      // Optimistic responses update the view before the mutation comes back
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    });
  }

  renderLyrics(lyrics) {
    return lyrics.map(({ id, content, likes }) => {
      return (
        <li className="collection-item" key={id}>
          <div>
            {content}
            <button
              onClick={() => this.onLikeClick(id, likes)}
              className={`${styles.likeButton} secondary-content valign-wrapper`}
            >
              <i className="material-icons black-text">thumb_up</i>
              <span className={`valign ${styles.likeCount}`}>{likes.toString()}</span>
            </button>
          </div>
        </li>
      );
    });
  }

  render() {
    if (this.props.loading) return LyricList.renderLoading();
    if (!this.props.lyrics.length) return LyricList.renderEmpty();

    return (
      <ul className="collection">
        {this.renderLyrics(this.props.lyrics)}
      </ul>
    );
  }
}

export default graphql(likeLyricMutation)(LyricList);
