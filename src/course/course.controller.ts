import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }
  
  @Post(':id/notes')
  async associateNotes(
    @Param('id') courseId: string,
    @Body('noteIds') noteIds: string[],
  ) {
    return this.courseService.associateNotes(courseId, noteIds);
  }

  // Obtener todos los cursos
  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  // Obtener un curso por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(id);
  }
}