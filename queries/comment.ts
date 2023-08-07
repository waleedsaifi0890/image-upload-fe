import { gql } from '@apollo/client';

const CREATE_COMMENT = gql`
  mutation createComment($image: Int!, $comment: String!) {
    createComment(createCommentInput: { image: $image, comment: $comment }) {
      id
      comment
    }
  }
`;

export default CREATE_COMMENT;
