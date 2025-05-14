import { IsString, IsOptional, IsArray } from "class-validator";

export class CreateNoteDto {
  @IsString()
  title: string; // Título de la nota

  @IsString()
  content: string; // Texto o resumen

  @IsOptional()
  @IsString()
  fileUrl?: string; // Link al archivo subido (opcional)

  @IsString()
  courseId: string; // ID del curso relacionado

  @IsString()
  authorId: string; // ID del autor

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  archives?: string[]; // Lista de IDs de archivos relacionados (opcional)
}