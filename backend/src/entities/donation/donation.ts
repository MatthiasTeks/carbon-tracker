import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from '../user/user';

@Entity()
@ObjectType()
export default class Donation extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @Column()
  @Field()
  amount: number;

  @Field(() => [User])
  @ManyToOne(() => User, (user) => user.donations)
  user: User;
}
