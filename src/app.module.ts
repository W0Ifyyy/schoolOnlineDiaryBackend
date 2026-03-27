import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Announcement } from './typeorm/entities/Announcement';
import { Attendance } from './typeorm/entities/Attendance';
import { Class } from './typeorm/entities/Class';
import { Grade } from './typeorm/entities/Grade';
import { Lesson } from './typeorm/entities/Lesson';
import { Message } from './typeorm/entities/Message';
import { Note } from './typeorm/entities/Note';
import { Parent } from './typeorm/entities/Parent';
import { Student } from './typeorm/entities/Student';
import { Teacher } from './typeorm/entities/Teacher';
import { User } from './typeorm/entities/User';
import { Subject } from './typeorm/entities/Subject';
import { Admin } from './typeorm/entities/Admin';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), 
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get<string>('DB_HOST'),
      password: configService.get<string>('DB_PASSWORD'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USERNAME'),
      database: configService.get<string>('DB_NAME'),
      entities: [Admin, Announcement, Attendance, Class, Grade, Lesson, Message, Note, Parent, Student, Subject, Teacher, User],
      synchronize: configService.get<string>('NODE_ENV') !== 'production'
    })
  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
