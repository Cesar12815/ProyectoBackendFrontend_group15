import { IsString, IsOptional } from "class-validator";

export class CreateCourseDto {
    @IsString()
    name: string; // Nombre del curso

    @IsString()
    code: string; // Código único del curso

    @IsOptional()
    @IsString()
    categoryId?: string; // ID de la categoría relacionada (opcional)
}