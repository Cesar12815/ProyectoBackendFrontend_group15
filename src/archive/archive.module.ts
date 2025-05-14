import { Module } from '@nestjs/common';
import { ArchiveService } from './archive.service';
import { ArchiveController } from './archive.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ArchiveController],
  providers: [ArchiveService, PrismaClient], // Asegúrate de que PrismaService esté en providers
})
export class ArchiveModule {}
