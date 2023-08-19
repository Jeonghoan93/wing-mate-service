import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from 'src/modules/auth/auth.service';
import { UserService } from 'src/modules/user/user.service';

export interface JwtPayload {
  username: string;
  sub: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    // Here, you can validate any claims in your JWT, fetch related user info from the database, etc.
    // I'm just checking if we have a username in the payload and then fetching user data based on that.

    const user = await this.userService.findByEmail(payload.username);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user; // This becomes the `req.user` payload.
  }
}
