import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ServiceAccount } from 'firebase-admin';
// Import firebase-admin
import * as admin from 'firebase-admin';
import { ConfigService } from 'nestjs-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  // Set the config options
  const adminConfig: ServiceAccount = {
    projectId: configService.get('FIREBASE_PROJECT_ID'),
    privateKey: configService.get('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
    clientEmail: configService.get('FIREBASE_CLIENT_EMAIL'),
  };
  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: 'https://xxxxx.firebaseio.com',
  });

  app.enableCors();

  await app.listen(configService.get('API_PORT') || 4000);
}
bootstrap();
