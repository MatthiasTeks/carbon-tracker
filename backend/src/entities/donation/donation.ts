import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
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
  createdAt: Timestamp;

  @Column()
  @Field()
  amount: number;

  @ManyToOne(() => User, (user) => user.donations)
  user: User;
}
