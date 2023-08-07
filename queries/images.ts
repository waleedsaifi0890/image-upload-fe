import { gql } from '@apollo/client';

const GET_POSTS = gql`
  query images {
    images {
      id
      image
      comments {
        id
        comment
      }
    }
  }
`;

export default GET_POSTS;
