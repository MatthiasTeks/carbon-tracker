import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

import Category from '../category/category';
import User from '../user/user';

@Entity()
@ObjectType()
export default class ActivityEntry extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field()
  createdAt: Timestamp;

  @UpdateDateColumn()
  @Field()
  updatedAt: Timestamp;

  @Column({ nullable: true, type: 'text' })
  @Field()
  name: string | null;

  @Column({ nullable: true, type: 'text' })
  @Field()
  input: string | null;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Category, (cat) => cat.id)
  category: Category;
}
