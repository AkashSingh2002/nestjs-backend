import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string; // store hashed passwords

  @Column()
  email: string;
}
