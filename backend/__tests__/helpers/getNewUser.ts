import User from '../../src/entities/user/user';
import db from '../../src/db';

export default async function getNewUser() {
  const userRepository = db.getRepository(User);
  const existingUser = await userRepository.findOne({
    where: { email: 'user-test@mail.com' },
  });

  if (existingUser) {
    throw new Error('User with this mail already exist');
  }

  const newUser = userRepository.create({
    email: 'user-test@mail.com',
    password: 'monmdptest',
  });

  const user = await userRepository.save(newUser);

  return { user };
}
