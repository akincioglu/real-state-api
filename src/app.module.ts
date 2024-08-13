import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { PropertiesModule } from './properties/properties.module';

@Module({
  imports: [DatabaseModule, UsersModule, PropertiesModule, DatabaseModule],
})
export class AppModule {}
