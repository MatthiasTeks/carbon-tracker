import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { Length, IsEmail } from 'class-validator';
import { ObjectType, Field } from 'type-graphql';
import * as argon2 from 'argon2';

@Entity()
@ObjectType()
export default class User {
  @BeforeInsert()
  protected async hashPassword() {
    this.password = await argon2.hash(this.password);
  }

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  @Field({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn()
  @Field({ nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  @Length(2, 50)
  @Field({ nullable: true })
  name: string;

  @Column({
    unique: true,
    transformer: {
      from(value: string) {
        return value.toLowerCase();
      },
      to(value: string) {
        return value.toLowerCase();
      },
    },
  })
  @IsEmail()
  @Field()
  email: string;

  @Field()
  @Column()
  password: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  picture?: string;
}
