import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from 'nestjs-firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDVqqF--63wNpyA4qzq1k4LnadlBCmNaHk',
  authDomain: 'tea-first-store.firebaseapp.com',
  projectId: 'tea-first-store',
  storageBucket: 'tea-first-store.appspot.com',
  messagingSenderId: '578742752749',
  appId: '1:578742752749:web:3f2f9ea585937d1487c3e4',
};
@Module({
  imports: [FirebaseModule.forRoot(firebaseConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
