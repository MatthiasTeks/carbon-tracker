import { Field, Int, ObjectType } from 'type-graphql';

import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';

import User from '../user/user';

@Entity()
@ObjectType()
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  content: string;

  @Column({ nullable: true })
  @Field()
  viewOnPost?: number;

  @ManyToMany(() => User, (user) => user.likedPosts)
  @JoinTable()
  @Field(() => [User])
  likers: User[];

  @Field(() => [User])
  @ManyToOne(() => User, (user) => user.posts, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: User;
}
