import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
} from "typeorm";
import { Length } from "class-validator";
import { ObjectType, Field, Int } from "type-graphql";

@Entity()
@ObjectType()
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column()
    @Length(2, 50)
    @Field()
    title: string;

    @Column()
    @Length(2, 50)
    @Field()
    author: string;
}