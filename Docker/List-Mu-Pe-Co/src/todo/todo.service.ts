import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoInput, UpdateTodoInput } from './dto/inputs';
import { Todo } from './entity/todo.entity';
import { StatusArgs } from './dto/args/status.args';
import { ID } from '@nestjs/graphql';
import { Gusto } from './entity/gusto-pelicula.entity';
import { Pelicula } from './entity/gusto-pelicula.entity';

interface Comidas {
    id: number;
    description: string;
    done: boolean;
}

interface Peliculas {
    id: number;
    description: string;
    done: boolean;
}
interface Musica {
    id: number;
    description: string;
    done: boolean;
}
@Injectable()
export class TodoService {

    private musicas: Musica[] = [
        { id: 1, description: 'La Vida No La Tienes Comprada', done: false },
        { id: 2, description: 'Por Tu Amor', done: true },
        { id: 3, description: 'Thunder', done: false },
        { id: 4, description: 'Numb', done: false },
        { id: 5, description: 'Mama Me Dijo Un Dia', done: true },
        { id: 6, description: 'Bohemian Rhapsody', done: false },
        { id: 7, description: 'Shape of You', done: false },
        { id: 8, description: 'Someone Like You', done: true },
        { id: 9, description: 'Imagine', done: false },
        { id: 10, description: 'Billie Jean', done: true },
        { id: 11, description: 'Hotel California', done: false },
        { id: 12, description: 'Yesterday', done: false },
        { id: 13, description: 'Despacito', done: true },
        { id: 14, description: 'Smells Like Teen Spirit', done: false },
        { id: 15, description: 'Sweet Child O Mine', done: false },
        { id: 16, description: 'Stairway to Heaven', done: true },
        { id: 17, description: 'Rolling in the Deep', done: false },
        { id: 18, description: 'Creep', done: false },
        { id: 19, description: 'Hallelujah', done: true },
        { id: 20, description: 'Let It Be', done: false },
        { id: 21, description: 'Waka Waka (This Time for Africa)', done: false },
        { id: 22, description: 'Uptown Funk', done: true },
        { id: 23, description: 'Radioactive', done: false },
        { id: 24, description: 'Shape of You', done: false },
        { id: 25, description: 'Closer', done: true },
        { id: 26, description: 'Dancing Queen', done: false },
        { id: 27, description: 'Take Me to Church', done: false },
        { id: 28, description: 'We Will Rock You', done: true },
        { id: 29, description: 'Firework', done: false },
        { id: 30, description: 'Yellow', done: false }
    ];
    private gustos: Comidas[] = [
        { id: 1, description: 'Poc Chuc', done: true },
        { id: 2, description: 'Cochinita Pibil', done: true },
        { id: 3, description: 'Salbutes', done: true },
        { id: 4, description: 'Panuchos', done: true },
        { id: 5, description: 'Sopa de Lima', done: true },
        { id: 6, description: 'Relleno Negro', done: true },
        { id: 7, description: 'Queso Relleno', done: true },
        { id: 8, description: 'Romeritos', done: true },
        { id: 9, description: 'Caballeros Pobres', done: true },
        { id: 10, description: 'Marquesitas', done: true },
        { id: 11, description: 'Empanadas de Queso', done: true },
        { id: 12, description: 'Sopa de Pavo', done: true },
        { id: 13, description: 'Chilmole', done: true },
        { id: 14, description: 'Pavo en Relleno Negro', done: true },
        { id: 15, description: 'Joroches', done: true },
        { id: 16, description: 'Papadzules', done: true },
        { id: 17, description: 'Cochinita en Pepita', done: true },
        { id: 18, description: 'Ceviche de Sierra', done: true },
        { id: 19, description: 'Salpicón de Venado', done: true },
        { id: 20, description: 'Puchero de Tres Carnes', done: true },
        { id: 21, description: 'Frijol con Puerco', done: true },
        { id: 22, description: 'Kibis', done: true },
        { id: 23, description: 'Pan de Cazón', done: true },
        { id: 24, description: 'Mucbipollo', done: true },
        { id: 25, description: 'Tamales de Elote', done: true },
        { id: 26, description: 'Tzic de Venado', done: true },
        { id: 27, description: 'Pollo Pibil', done: true },
        { id: 38, description: 'Brazo de Reina', done: true }

    ];
    private peliculas: Peliculas[] =
        [
            { id: 1, description: 'La vida es bella', done: false },
            { id: 2, description: 'Titanic', done: true },
            { id: 3, description: 'El señor de los anillos', done: true },
            { id: 4, description: 'Avatar', done: false },
            { id: 5, description: 'Pulp Fiction', done: true },
            { id: 6, description: 'Forrest Gump', done: false },
            { id: 7, description: 'Interstellar', done: true },
            { id: 8, description: 'El padrino', done: false },
            { id: 9, description: 'Star Wars: Una nueva esperanza', done: true },
            { id: 10, description: 'El rey león', done: false },
            { id: 11, description: 'Matrix', done: true },
            { id: 12, description: 'Gladiador', done: false },
            { id: 13, description: 'Ciudad de Dios', done: true },
            { id: 14, description: 'El club de la pelea', done: false },
            { id: 15, description: 'El gran dictador', done: true },
            { id: 16, description: 'Volver al futuro', done: false },
            { id: 17, description: 'Mujer bonita', done: true },
            { id: 18, description: 'Jurassic Park', done: false },
            { id: 19, description: 'ET, el extraterrestre', done: true },
            { id: 20, description: 'Los increíbles', done: false },
            { id: 21, description: 'El laberinto del fauno', done: true },
            { id: 22, description: 'La lista de Schindler', done: false },
            { id: 23, description: 'El sexto sentido', done: true },
            { id: 24, description: 'Cadena perpetua', done: false },
            { id: 25, description: 'El club de los cinco', done: true },
            { id: 26, description: 'El planeta de los simios', done: false },
            { id: 27, description: 'Bajo el sol de la Toscana', done: true },
            { id: 28, description: 'El sexto día', done: false },
            { id: 29, description: 'Aladdín', done: true },
            { id: 30, description: 'Los juegos del hambre', done: false }
        ];

    get totalTodos() {
        return this.musicas.length;
    }

    get pendingTodos() {
        return this.musicas.filter(todo => todo.done === false).length;
    }

    get completedTodos() {
        return this.musicas.filter(todo => todo.done === true).length;
    }



    findAll(statusArgs: StatusArgs): Todo[] {

        const { status } = statusArgs;
        if (status !== undefined) return this.musicas.filter(todo => todo.done === status);

        return this.musicas;
    }

    findOne(id: number): Todo {

        const todo = this.musicas.find(todo => todo.id === id);

        if (!todo) throw new NotFoundException(`Todo with id ${id} not found`);

        return todo;
    }

    create(createTodoInput: CreateTodoInput): Todo {

        const todo = new Todo();
        todo.description = createTodoInput.description;
        todo.id = Math.max(...this.musicas.map(todo => todo.id), 0) + 1

        this.musicas.push(todo);

        return todo;
    }


    update(id: number, updateTodoInput: UpdateTodoInput) {
        const { description, done } = updateTodoInput;
        const todoToUpdate = this.findOne(id);

        if (description) todoToUpdate.description = description;
        if (done !== undefined) todoToUpdate.done = done;

        this.musicas = this.musicas.map(todo => {
            return (todo.id === id) ? todoToUpdate : todo;
        });

        return todoToUpdate;

    }

    delete(id: number): Boolean {
        const todo = this.findOne(id);

        this.musicas = this.musicas.filter(todo => todo.id !== id);

        return true;
    }


    // Métodos para obtener gustos y peliculas
    findAllGustos(): Comidas[] {
        return this.gustos;
    }

    findOneGusto(id: number): Comidas {
        const gusto = this.gustos.find(gusto => gusto.id === id);
        if (!gusto) throw new NotFoundException(`Gusto with id ${id} not found`);
        return gusto;
    }

    findAllPeliculas(): Peliculas[] {
        return this.peliculas;
    }

    findOnePelicula(id: number): Peliculas {
        const pelicula = this.peliculas.find(pelicula => pelicula.id === id);
        if (!pelicula) throw new NotFoundException(`Pelicula with id ${id} not found`);
        return pelicula;
    }

}
