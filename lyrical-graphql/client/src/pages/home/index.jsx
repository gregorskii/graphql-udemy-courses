import React from 'react';
import { Link } from 'react-router';

import SongList from 'components/song-list';

const Home = () => {
  return (
    <section>
      <h3>Song List</h3>
      <p>Here are the songs you have created:</p>
      <SongList />
      <div className="right-align">
        <Link
          to="/songs/new"
          className="btn-floating btn-large waves-effect waves-light green"
        ><i className="material-icons">add</i></Link>
      </div>
    </section>
  );
};

export default Home;
