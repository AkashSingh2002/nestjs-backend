import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { UserService } from '../services/user.service'; // Adjust path as necessary
import { JwtPayload } from './jwt-payload.interface'; // Define this interface

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_jwt_secret', // Replace with your actual secret
    } as StrategyOptions);
  }

  async validate(payload: JwtPayload) {
    // Here, you can perform any additional checks or data retrieval
    const user = await this.userService.findById(payload.sub);
    return user;
  }
}
