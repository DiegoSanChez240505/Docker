import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { TodoService } from './todo.service'; // Usando el mismo servicio para simplicidad
import { Gusto, Pelicula } from './entity/gusto-pelicula.entity';

@Resolver(() => Gusto)
export class GustoPeliculaResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Gusto], { name: 'gustos' })
  findAllGustos(): Gusto[] {
    return this.todoService.findAllGustos();
  }

  @Query(() => Gusto, { name: 'gusto' })
  findOneGusto(@Args('id', { type: () => Int }) id: number): Gusto {
    return this.todoService.findOneGusto(id);
  }

  @Query(() => [Pelicula], { name: 'peliculas' })
  findAllPeliculas(): Pelicula[] {
    return this.todoService.findAllPeliculas();
  }

  @Query(() => Pelicula, { name: 'pelicula' })
  findOnePelicula(@Args('id', { type: () => Int }) id: number): Pelicula {
    return this.todoService.findOnePelicula(id);
  }

}