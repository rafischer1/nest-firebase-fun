import { Injectable, Module } from '@nestjs/common';
import { FirebaseModule } from 'nestjs-firebase';

@Injectable()
export class AppService {
  constructor(private readonly firebase: FirebaseService) {}

  async connect() {
    await this.firebase.connect();
  }
}
