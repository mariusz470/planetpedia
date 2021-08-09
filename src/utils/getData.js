import data from '../Assets/data.json';

export const getData = () => {
    let {films, planets} = data.data;

    planets = planets.filter(planet => planet.filmConnection.films.length > 0)
    for (let film of films){
        film.planets = planets.filter(planet => planet.filmConnection.films.find(id=> id.id === film.id))
    }

    console.log(films)
    return films;

};

