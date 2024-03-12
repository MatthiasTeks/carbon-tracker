import { gql } from '@apollo/client';

const REGISTER = gql`
  mutation Register($infos: InputRegister!) {
    register(infos: $infos) {
      id
      email
    }
  }
`;

export default REGISTER;
