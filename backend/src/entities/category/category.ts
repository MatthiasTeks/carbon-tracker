import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
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
  createdAt: Timestamp;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => ActivityEntry, (activityEntry) => activityEntry.category)
  activityEntries: ActivityEntry[];
}
