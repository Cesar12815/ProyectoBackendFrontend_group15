import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [CourseController],
  providers: [CourseService, PrismaClient], // Asegúrate de que PrismaService esté en providers
})
export class CourseModule {}
