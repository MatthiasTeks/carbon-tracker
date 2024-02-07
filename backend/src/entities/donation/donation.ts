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
export default class Donations extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field()
  createdAt: Timestamp;

  @Column()
  @Field()
  amount: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
