import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Post from '../post/post';
import User from '../user/user';

@Entity()
@ObjectType()
export default class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Post)
  @JoinColumn()
  post: Post;
}
