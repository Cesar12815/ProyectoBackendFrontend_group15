import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NoteService {
  constructor(private readonly prisma: PrismaClient) {}

  // Método POST: Crear una nueva nota
  async create(createNoteDto: CreateNoteDto) {
    const { archives, ...noteData } = createNoteDto;

    return this.prisma.note.create({
      data: {
        ...noteData,
        archives: archives?.length
          ? {
              connect: archives.map((id) => ({ id })), // Conecta los archivos relacionados
            }
          : undefined, // No conecta nada si `archives` está vacío o no definido
      },
    });
  }

  // Método PUT: Actualizar una nota por ID
  async update(id: string, updateNoteDto: UpdateNoteDto) {
    const { archives, ...noteData } = updateNoteDto;

    return this.prisma.note.update({
      where: { id },
      data: {
        ...noteData,
        archives: archives?.length
          ? {
              set: archives.map((id) => ({ id })), // Actualiza los archivos relacionados
            }
          : undefined, // No actualiza nada si `archives` está vacío o no definido
      },
    });
  }

  // Método GET: Obtener todas las notas
  async findAll() {
    return this.prisma.note.findMany({
      include: {
        course: true, // Incluye información del curso relacionado
        author: true, // Incluye información del autor
        archives: true, // Incluye los archivos relacionados
      },
    });
  }

  // Método GET: Obtener una nota por ID
  async findOne(id: string) {
    return this.prisma.note.findUnique({
      where: { id },
      include: {
        course: true,
        author: true,
        archives: true,
      },
    });
  }

  // Método DELETE: Eliminar una nota por ID
  async remove(id: string) {
    return this.prisma.note.delete({
      where: { id },
    });
  }
}