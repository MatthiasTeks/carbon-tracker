import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ActivityEntry from '../activity-entry/activity-entry';

@Entity()
@ObjectType()
export default class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @Column()
  @Field()
  name: string;

  @Field(() => ActivityEntry)
  @OneToMany(() => ActivityEntry, (activityEntry) => activityEntry.category)
  activityEntries: ActivityEntry[];
}
