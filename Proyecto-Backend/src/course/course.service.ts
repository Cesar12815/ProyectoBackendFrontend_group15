import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaClient) {}

  // Método POST: Crear un nuevo curso
async create(createCourseDto: CreateCourseDto) {
    const { categoryId, ...courseData } = createCourseDto;

    return this.prisma.course.create({
      data: {
        ...courseData,
        category: categoryId
          ? {
              connect: { id: categoryId }, // Conecta el curso a la categoría si se proporciona `categoryId`
            }
          : undefined, // No conecta nada si `categoryId` no está definido
      },
      include: {
        category: true, // Incluye la información de la categoría en la respuesta
      },
    });
  }

  // Método GET: Obtener todos los cursos
  async findAll() {
    return this.prisma.course.findMany({
      include: {
        notes: true, // Incluye las notas relacionadas
        category: true, // Incluye la categoría relacionada
      },
    });
  }

  // Método GET: Obtener un curso por ID
  async findOne(id: string) {
    return this.prisma.course.findUnique({
      where: { id },
      include: {
        notes: true, // Incluye las notas relacionadas
        category: true, // Incluye la categoría relacionada
      },
    });
  }

  // Método PUT: Actualizar un curso por ID
  async update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  // Método DELETE: Eliminar un curso por ID
  async remove(id: string) {
    return this.prisma.course.delete({
      where: { id },
    });
  }

  // Método para asociar notas a un curso
  async associateNotes(courseId: string, noteIds: string[]) {
    return this.prisma.course.update({
      where: { id: courseId },
      data: {
        notes: {
          connect: noteIds.map((id) => ({ id })), // Conecta las notas al curso
        },
      },
      include: {
        notes: true, // Incluye las notas relacionadas en la respuesta
      },
    });
  }
}