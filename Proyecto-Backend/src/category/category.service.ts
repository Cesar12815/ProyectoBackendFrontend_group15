import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaClient) {}

  // Método POST: Crear una nueva categoría
  async create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  // Método GET: Obtener todas las categorías
  async findAll() {
    return this.prisma.category.findMany({
      include: {
        courses: true, // Incluye los cursos relacionados
      },
    });
  }

  // Método GET: Obtener una categoría por ID
  async findOne(id: string) {
    return this.prisma.category.findUnique({
      where: { id },
      include: {
        courses: true, // Incluye los cursos relacionados
      },
    });
  }

  // Método PUT: Actualizar una categoría por ID
  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  // Método DELETE: Eliminar una categoría por ID
  async remove(id: string) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}