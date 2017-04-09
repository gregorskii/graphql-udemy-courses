import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import API from 'src/api';
import LyricCreateForm from 'components/lyric-create-form';
import LyricList from 'components/lyric-list';

const { fetchSongQuery } = API;

class SongDetail extends Component {
  static propTypes = {
    data: React.PropTypes.shape(),
    params: React.PropTypes.shape().isRequired
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
        <p>No song found...</p>
      </div>
    );
  }

  render() {
    const { data } = this.props;

    if (data.loading) return SongDetail.renderLoading();
    if (!data.song) return SongDetail.renderEmpty();

    return (
      <section>
        <h3>{data.song.title}</h3>
        <LyricList lyrics={data.song.lyrics} loading={data.loading} />
        <LyricCreateForm params={this.props.params} />
        <Link to="/" className="waves-effect waves-light btn yellow darken-3">Back</Link>
      </section>
    );
  }
}

// Second param is options, which are used to get props when calling the query
export default graphql(fetchSongQuery, {
  options: (props) => { return { variables: { id: props.params.id } }; }
})(SongDetail);
