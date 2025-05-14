import { IsString, IsBoolean, IsOptional } from "class-validator";

export class CreateArchiveDto {
    @IsString()
    userId: string; // ID del usuario relacionado

    @IsString()
    noteId: string; // ID de la nota relacionada

    @IsOptional()
    @IsBoolean()
    isStarred?: boolean; // Opcional: marcar como favorito
}