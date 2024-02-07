import { AuthChecker } from 'type-graphql';
import { MyContext } from '..';

const customAuthChecker: AuthChecker<MyContext> = ({ context }) => {
  if (context.user) {
    return true;
  }
  return false;
};

export default customAuthChecker;
