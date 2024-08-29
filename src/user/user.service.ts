import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return this.userRepository.save(user);
  }
  
  findOneByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { username } });
  }

  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, user: User): Promise<void> {
    await this.userRepository.update(id, user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
  
}

