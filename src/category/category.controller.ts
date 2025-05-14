import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto); // Método POST para crear una categoría
  }

  @Get()
  findAll() {
    return this.categoryService.findAll(); // Método GET para obtener todas las categorías
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id); // Método GET para obtener una categoría por ID
  }
}