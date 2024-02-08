import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import * as argon2 from 'argon2';
import Cookies from 'cookies';
import { SignJWT } from 'jose';
import db from '../../db';
import User from '../../entities/user/user';
import InputRegister from '../../entities/user/input-register';
import UserWithoutPassword from '../../entities/user/user-without-password';
import Message from '../../entities/user/message';
import InputLogin from '../../entities/user/input-login';
import { MyContext } from '../..';
import UserService from '../../services/user-service';

@Resolver(User)
export default class UserResolver {
  @Authorized()
  @Query(() => [User])
  async users() {
    const userRepository = db.getRepository(User);
    return userRepository.find();
  }

  @Query(() => User, { nullable: true })
  async userByEmail(@Arg('email') email: string) {
    return UserService.readByMail(email);
  }

  @Query(() => Message)
  async login(@Arg('infos') infos: InputLogin, @Ctx() ctx: MyContext) {
    const user = await UserService.readByMail(infos.email);

    if (!user) {
      throw new Error('Verify your informations');
    }

    const isPasswordValid = await argon2.verify(user.password, infos.password);
    const m = new Message();
    if (isPasswordValid) {
      const token = await new SignJWT({ email: user.email })
        .setProtectedHeader({ alg: 'HS256', typ: 'jwt' })
        .setExpirationTime('2h')
        .sign(new TextEncoder().encode(`${process.env.SECRET_KEY}`));

      const cookies = new Cookies(ctx.req, ctx.res);
      cookies.set('token', token, { httpOnly: true });

      m.message = 'Welcome!';
      m.success = true;
    } else {
      m.message = 'Verify your information';
      m.success = false;
    }
    return m;
  }

  @Query(() => Message)
  async logout(@Ctx() ctx: MyContext) {
    if (ctx.user) {
      const cookies = new Cookies(ctx.req, ctx.res);
      cookies.set('token');
    }
    const m = new Message();
    m.message = 'You have been disconnected';
    m.success = true;

    return m;
  }

  @Mutation(() => UserWithoutPassword)
  async register(@Arg('infos') infos: InputRegister) {
    const existingUser = await UserService.readByMail(infos.email);

    if (existingUser) {
      throw new Error('User with this mail already exist');
    }

    const newUser = await UserService.create({
      email: infos.email,
      password: infos.password,
    });

    return newUser;
  }
}
