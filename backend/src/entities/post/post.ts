import { Field, Int, ObjectType } from 'type-graphql';

import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  JoinTable,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

import Like from '../like/like';
import User from '../user/user';

@Entity()
@ObjectType()
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field()
  createdAt: Timestamp;

  @UpdateDateColumn()
  @Field()
  updatedAt: Timestamp;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  content: string;

  @Column({ nullable: true })
  @Field()
  viewOnPost: boolean | null;

  @JoinTable()
  @OneToOne(() => Like, (l) => l.post, { cascade: true })
  @Field(() => [Like])
  likesOnPost: Like[];

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
