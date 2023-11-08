import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { UpdateUserDto } from "./update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    console.log("Create User initiated with:", createUserDto);
    return await this.userRepository.save(createUserDto);
  }

  async getAllUsers() {
    return await this.userRepository.find();
  }

  async userById(id: number) {
    console.log("getOne:", id);
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    console.log("Update User initiated with:", updateUserDto, "id:", id);
    const toUpdate = await this.userRepository.findOne({ where: { id } });

    const updated = Object.assign(toUpdate, updateUserDto);

    return await this.userRepository.save(updated);
  }

  async delete(id: number) {
    console.log("Delete id:", id);
    return await this.userRepository.delete(id);
  }
}
