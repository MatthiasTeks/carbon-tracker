import { Field, ObjectType } from 'type-graphql';
import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Length } from 'class-validator';
import User from './user';

@ObjectType()
export default class UserWithoutPassword
  implements
    Omit<
      User,
      'password' | 'donations' | 'activityEntries' | 'posts' | 'likedPosts'
    >
{
  @Field()
  id: string;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @Column()
  @Length(2, 50)
  @Field()
  name: string;

  @Field()
  email: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  picture?: string;
}
