import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./create-user.dto";
import { UpdateUserDto } from "./update-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  getAllUsers() {
    console.log("GET USERS");
    return this.usersService.getAllUsers();
  }

  @Get(":id")
  userById(@Param("id") id: string) {
    console.log("GET USER:", id);
    return this.usersService.userById(+id);
  }

  @Patch(":id")
  updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log("UPDATE USER:", id);
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    console.log("DELETE USER:", id);
    return this.usersService.delete(+id);
  }
}
