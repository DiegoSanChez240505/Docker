import { Module } from '@nestjs/common';
import { GustoPeliculaResolver } from './gusto-pelicula.resolver';
import { TodoService } from './todo.service';

@Module({
  providers: [GustoPeliculaResolver, TodoService],
})
export class GustoPeliculaModule {}
