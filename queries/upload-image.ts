import { gql } from '@apollo/client';

const CREATE_IMAGE = gql`
  mutation createImage($file: Upload!) {
    createImage(createImageInput: { image: $file }) {
      image
    }
  }
`;

export default CREATE_IMAGE;
