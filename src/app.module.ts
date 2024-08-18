import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { PropertiesModule } from './properties/properties.module';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    DatabaseModule,
    UsersModule,
    PropertiesModule,
    DatabaseModule,
  ],
})
export class AppModule {}
