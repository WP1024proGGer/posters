import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Users, UsersDocument } from "./schemas/users.schema";
import { Model } from "mongoose";
import { RegisterDto } from "./dto/register.dto";
import {compare, hash} from "bcrypt";

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) {}

  async hashPassword(password: string): Promise<string> {
        const hashedPassword = await hash(password, 10);
        return hashedPassword;
  }

  async registerUser(userData: RegisterDto): Promise<Users> {
    const hashedPassword = await this.hashPassword(userData.password);
    const user = await new this.usersModel({
      ...userData,
      password: hashedPassword,
    });
    await user.save();
    return user;
  }

  async deleteUser(id: string): Promise<boolean> {
    await this.usersModel.findByIdAndDelete(id);
    return true;
  }

  async getAll(): Promise<Array<Users>> {
    const users = await this.usersModel.find();
    return users;
  }

  async findByName(name: string): Promise<Users> {
    const user = await this.usersModel.findOne({ name });
    return user;
  }

  async comparePassword(password: string, hashedPassword: string): Promise<boolean>{
    const match = await compare(password, hashedPassword);
    return match;
  }

}
