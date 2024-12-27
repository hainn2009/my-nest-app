import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([Task]), AuthModule],
    controllers: [TasksController],
    // providers: [TasksService],
    providers: [TasksService, TaskRepository],
    exports: [TasksService, TaskRepository],
})
export class TasksModule {}
