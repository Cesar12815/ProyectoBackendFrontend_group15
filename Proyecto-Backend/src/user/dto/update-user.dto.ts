import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsBase64, IsBoolean } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsBoolean()
    active : boolean;

}
