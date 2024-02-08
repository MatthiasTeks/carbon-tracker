import db from '../db';
import InputRegister from '../entities/user/input-register';
import User from '../entities/user/user';

export default class UserService {
  static async readByMail(email: string): Promise<User | null> {
    const userRepository = db.getRepository(User);
    const user = await userRepository.findOne({ where: { email } });
    return user;
  }

  static async create(infos: InputRegister): Promise<User> {
    const existingUser = await this.readByMail(infos.email);

    if (existingUser) {
      throw new Error('User with this mail already exist');
    }

    const userRepository = db.getRepository(User);
    const newUser = userRepository.create({
      email: infos.email,
      password: infos.password,
    });

    await userRepository.save(newUser);

    return newUser;
  }
}
