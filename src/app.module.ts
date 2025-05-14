import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { CourseModule } from './course/course.module';
import { CategoryModule } from './category/category.module';
import { ArchiveModule } from './archive/archive.module';


@Module({
  imports: [UserModule, NoteModule, CourseModule, CategoryModule, ArchiveModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
