// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YourEntity } from './entities/entity';
import { YourEntityModule } from './modules/module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'yassine', // replace with your PostgreSQL username
      password: 'example', // replace with your PostgreSQL password
      database: 'db', // replace with your PostgreSQL database name
      entities: [YourEntity],
      synchronize: true, // set to false in production
    }),
    YourEntityModule,
  ],
})
export class AppModule {}
