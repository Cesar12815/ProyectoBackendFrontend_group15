import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [NoteController],
  providers: [NoteService, PrismaClient],
})
export class NoteModule {}
