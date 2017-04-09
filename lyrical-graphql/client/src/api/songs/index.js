import gql from 'graphql-tag';

export const fetchSongsQuery = gql`
  {
    songs {
      title
      id
    }
  }
`;

export const addSongMutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id,
      title
    }
  }
`;

export const deleteSongMutation = gql`
mutation DeleteSong($id: ID) {
  deleteSong(id: $id) {
    id
  }
}
`;

export const fetchSongQuery = gql`
  query GetSong($id: ID!) {
    song(id: $id) {
      id,
      title,
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
