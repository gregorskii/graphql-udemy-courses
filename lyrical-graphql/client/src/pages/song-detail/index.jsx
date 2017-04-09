import React from 'react';

import SongDetailComponent from 'components/song-detail';

const SongDetail = (props) => {
  return (
    <div>
      <SongDetailComponent {...props} />
    </div>
  );
};

export default SongDetail;
