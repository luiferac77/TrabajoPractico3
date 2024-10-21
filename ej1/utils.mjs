import fs from 'fs';
import { json } from 'stream/consumers';
class SuperHeroe {
    constructor(
        id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, 
        debilidad, poder, habilidadEspecial, aliado, enemigo
            ){
                this.id = id; 
                this.nombreSuperheroe = nombreSuperheroe; 
                this.nombreReal = nombreReal; 
                this.nombreSociedad = nombreSociedad; 
                this.edad = edad; 
                this.planetaOrigen = planetaOrigen;  
                this.debilidad = debilidad; 
                this.poder = poder; 
                this.habilidadEspecial = habilidadEspecial; 
                this.aliado = aliado; 
                this.enemigo = enemigo;
                
            }
}

export function leerSuperHeroes(ruta){
    //leo de forma asíncrona el archivo superheroes.txt
    const datos = fs.readFileSync(ruta, 'utf8');

    //parseo el contenido del archivo en formato json para convertirlo en array de javascript
    const superHeroesArray = JSON.parse(datos);

    //uso el mètodo map en el array
    const superheroes = superHeroesArray.map(
        hero => new SuperHeroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, 
        hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado,
        hero.enemigo   
        )
    );

    superheroes.sort((a,b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
    return superheroes;
    
}

//función agregada para el ejercicio 2

//nueva función para le ej2
export function agregarSuperheroes(rutaOriginal, rutaNuevos){
    
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    const instanciasNuevos = nuevosSuperheroes.map(
        hero => new SuperHeroe(
            hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, 
            hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado,
            hero.enemigo   
        )
    );

    const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];

    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2),'utf8');

    console.log('lista de superheroes actualizada');

}