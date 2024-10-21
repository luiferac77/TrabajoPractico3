import { agregarSuperheroes, leerSuperHeroes } from "./utils.mjs";

const archivoOriginal = '../superheroes.txt';
const archivoNuevo = '../agregarSuperheroes.txt';

//agregarSuperheroes(archivoOriginal, archivoNuevo);

const superheroes = leerSuperHeroes(archivoOriginal);
console.log('Superheros ordenados;');
console.log(superheroes);
