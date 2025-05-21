import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaClient) {}

  // Método POST: Crear un nuevo curso
  async create(createCourseDto: CreateCourseDto) {
    const { categoryId, ...courseData } = createCourseDto;

    // Validar si categoryId fue proporcionado
    if (categoryId) {
      const categoryExists = await this.prisma.category.findUnique({
        where: { id: categoryId },
      });

      if (!categoryExists) {
        throw new NotFoundException(`Category with id ${categoryId} not found`);
      }
    }

    return this.prisma.course.create({
      data: {
        ...courseData,
        category: categoryId
          ? {
              connect: { id: categoryId },
            }
          : undefined,
      },
      include: {
        category: true,
      },
    });
  }

  // Método GET: Obtener todos los cursos
  async findAll() {
    return this.prisma.course.findMany({
      include: {
        notes: true,
        category: true,
      },
    });
  }

  // Método GET: Obtener un curso por ID
  async findOne(id: string) {
    return this.prisma.course.findUnique({
      where: { id },
      include: {
        notes: true,
        category: true,
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
          connect: noteIds.map((id) => ({ id })),
        },
      },
      include: {
        notes: true,
      },
    });
  }
}
