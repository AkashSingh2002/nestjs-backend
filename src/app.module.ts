import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { AuthModule } from './auth/auth.module'; // Import AuthModule
import { UserService } from './services/user.service'; // Import UserService if used in AppModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'your_password',
      database: 'your_database',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    AuthModule, // Add AuthModule here
  ],
  controllers: [UserController],
  providers: [UserService], // Include UserService here if needed
})
export class AppModule {}
