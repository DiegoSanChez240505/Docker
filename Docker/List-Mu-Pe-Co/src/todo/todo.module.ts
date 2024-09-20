import { Module } from '@nestjs/common';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';
import { Gusto } from './entity/gusto-pelicula.entity';
import { Pelicula } from './entity/gusto-pelicula.entity';

@Module({
  providers: [TodoResolver, TodoService]
})
export class TodoModule {}

@Module({
  providers: [GustoPeliculaModule, TodoService],
})
export class GustoPeliculaModule {}