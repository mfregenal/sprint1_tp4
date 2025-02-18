// superheroesDataSource.mjs

// Clase abstracta para la fuente de datos de superhéroes
export default class SuperheroesDataSource {
    // Método abstracto para obtener todos los superhéroes
    obtenerTodos() {
        throw new Error('Este método debe ser implementado por la subclase');
    }
}