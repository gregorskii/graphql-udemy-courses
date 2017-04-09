import * as SongApi from './songs';
import * as LyricApi from './lyrics';

export default {
  ...SongApi,
  ...LyricApi
};
