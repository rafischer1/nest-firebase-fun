import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const orm_config: TypeOrmModuleOptions = {
  type: "postgres",
  port: 5432,
  host: "127.0.0.1",
  database: "applesauce",
  synchronize: true,
  entities: ["dist/**/*.entity{.ts,.js}"], // * or [Users, Roles, Permissions, etc...]
  username: "applesauce",
  password: "root",
};
