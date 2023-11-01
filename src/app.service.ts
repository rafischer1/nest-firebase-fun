import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Listening on :3200...');
    return 'Running...';
  }
}
