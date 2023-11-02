import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from 'nestjs-firebase';

@Module({
  imports: [
    FirebaseModule.forRoot({
      // Your Firebase configuration
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
