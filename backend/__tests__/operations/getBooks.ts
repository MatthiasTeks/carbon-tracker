import gql from 'graphql-tag';

export default gql`
  query GetBooks {
    tags {
      author
      id
      title
    }
  }
`;
