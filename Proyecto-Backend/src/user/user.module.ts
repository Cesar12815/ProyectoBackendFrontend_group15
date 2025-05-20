import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaClient } from '@prisma/client';
// Ensure the file exists at this path or correct the path

@Module({
  imports : [], // Aquí puedes importar otros módulos si es necesario
  controllers: [UserController],
  providers: [UserService, PrismaClient], // Asegúrate de que PrismaService esté en providers
})
export class UserModule {}
