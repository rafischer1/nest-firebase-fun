import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  constructor() {}

  // async connect() {
  //   await this.firebase.connect();
  // }
  getHello() {
    return { hi: "hello" };
  }
}
