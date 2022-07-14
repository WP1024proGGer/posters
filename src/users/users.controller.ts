import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async registerUser(@Body() userData: RegisterDto) {
    const user = await this.usersService.registerUser(userData);
    return user;
  }

  @Get()
  async getAll() {
    const users = await this.usersService.getAll();
    return users;
  }
  @Delete(':id')
  async deleteuser(@Param('id') id: string) {
    const user = await this.usersService.deleteUser(id);
    return true;
  }

  @Post('auth')
  async loginUser(@Body() loginData: LoginDto) {
    const user = await this.usersService.findByName(loginData.name);
    if (!user)
      throw new HttpException('Такого аккаунта нет!', HttpStatus.UNAUTHORIZED);
    const match = await this.usersService.comparePassword(loginData.password, user.password);
    if (!match)
      throw new HttpException('Пароль введен неверно!', HttpStatus.UNAUTHORIZED);
    return user;
  }
}
