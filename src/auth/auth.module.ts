import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service'; // Adjust path as necessary

@Module({
  imports: [
    JwtModule.register({
      secret: 'your_jwt_secret', // Replace with your actual secret
      signOptions: { expiresIn: '60m' }, // Adjust expiration as needed
    }),
    TypeOrmModule.forFeature([User]), // Import the User entity here
  ],
  providers: [JwtStrategy, UserService],
  exports: [JwtStrategy, UserService],
})
export class AuthModule {}
