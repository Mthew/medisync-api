import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.services';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  // Default strategy name is 'local'
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // Tell passport-local to use 'email' field
  }

  // Passport automatically calls this with credentials from the request body
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user; // Passport attaches this to request.user for the login route handler
  }
}
