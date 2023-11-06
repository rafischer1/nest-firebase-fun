import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { orm_config } from "./orm.config";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [TypeOrmModule.forRoot(orm_config), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
