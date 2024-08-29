import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // your PostgreSQL username
      password: 'password', // your PostgreSQL password
      database: 'sde_intern_backend', // your database name
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
