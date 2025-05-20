import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateArchiveDto } from './dto/create-archive.dto';
import { UpdateArchiveDto } from './dto/update-archive.dto';

@Injectable()
export class ArchiveService {
  constructor(private readonly prisma: PrismaClient) {}

  // Método POST: Crear un nuevo archivo
  async create(createArchiveDto: CreateArchiveDto) {
    return this.prisma.archive.create({
      data: createArchiveDto,
    });
  }

  // Método GET: Obtener todos los archivos
  async findAll() {
    return this.prisma.archive.findMany({
      include: {
        user: true, // Incluye información del usuario relacionado
        note: true, // Incluye información de la nota relacionada
      },
    });
  }

  // Método GET: Obtener un archivo por ID
  async findOne(id: string) {
    return this.prisma.archive.findUnique({
      where: { id },
      include: {
        user: true, // Incluye información del usuario relacionado
        note: true, // Incluye información de la nota relacionada
      },
    });
  }

  // Método PUT: Actualizar un archivo por ID
  async update(id: string, updateArchiveDto: UpdateArchiveDto) {
    return this.prisma.archive.update({
      where: { id },
      data: updateArchiveDto,
    });
  }

  // Método DELETE: Eliminar un archivo por ID
  async remove(id: string) {
    return this.prisma.archive.delete({
      where: { id },
    });
  }
}