import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaClient) {}

  // Crear un nuevo usuario
  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  // Obtener todos los usuarios
  async findAll() {
    return this.prisma.user.findMany({
      include: {
        notes: true, // Incluye las notas relacionadas
        archives: true, // Incluye los archivos relacionados
      },
    });
  }

  // Obtener un usuario por ID
  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        notes: true,
        archives: true,
      },
    });
  }

  // Actualizar un usuario por ID
  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  // Eliminar un usuario por ID
  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}