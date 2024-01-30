import { gql } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    tags {
      author
      id
      title
    }
  }
`;

export default GET_BOOKS;
