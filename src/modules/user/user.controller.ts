import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/common/schemas/user.schema';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: any): Promise<User> {
    // You should define a DTO for this
    return this.userService.create(createUserDto);
  }

  @Get('all')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // You can add more endpoints here as required (e.g., login, update, delete)
}
