// superheroesService.mjs

import SuperheroesRepository from '../repository/superheroesRepository.mjs';
const repository = new SuperheroesRepository();

export function obtenerSuperheroePorId(id) {
    const superheroes = repository.obtenerTodos();
    return superheroes.find(superheroe => superheroe.id === id);
}

//El siguiente código falla si el valor de un atributo buscado es un array
// export function buscarSuperheroesPorAtributo(atributo, valor) {
//     const superheroes = repository.obtenerTodos();
//     return superheroes.filter(superheroe =>
//         superheroe[atributo].toLowerCase().includes(valor.toLowerCase())
//     );
// }

export function buscarSuperheroesPorAtributo(atributo, valor) {
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(superheroe => {
        const atributoValor = superheroe[atributo];
        if (typeof atributoValor === 'string' && typeof valor === 'string') {
            const incluyeValor = atributoValor.toLowerCase().includes(valor.toLowerCase());
            return incluyeValor;
        } else if (Array.isArray(atributoValor)) {
            const incluyeValorEnArray = atributoValor.some(elemento =>
                typeof elemento === 'string' && elemento.toLowerCase().includes(valor.toLowerCase())
            );
            return incluyeValorEnArray;
        } else {
            return false;
        }
    });
}

export function obtenerSuperheroesMayoresDe30() {
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(superheroe =>
        superheroe.edad > 30 &&
        superheroe.planetaOrigen === 'Tierra' &&
        superheroe.poder.length >= 2
    );
}