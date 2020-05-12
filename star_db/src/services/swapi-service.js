class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  _imageBase = 'https://apxuapi.herokuapp.com/assets/img/';

  getResource = async url => {
    const rest = await fetch(this._apiBase + url);
    if (!rest.ok) {
      throw new Error(`Could not fetch ${url}, received ${rest.status}`);
    }
    const body = await rest.json();
    return body;
  };

  getAllPeople = async () => {
    const persons = await this.getResource('/people/');
    return persons.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  }

  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet.url),
      climate: planet.climate,
      diameter: planet.diameter,
      gravity: planet.gravity,
      name: planet.name,
      orbitalPeriod: planet.orbital_period,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      surfaceWater: planet.surface_water,
      terrain: planet.terrain,
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person.url),
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      gender: person.gender,
      hairColor: person.hair_color,
      height: person.height,
      homeworld: person.homeworld,
      mass: person.mass,
      name: person.name,
      skinColor: person.skin_color,
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship.url),
      cargoCapacity: starship.cargo_capacity,
      costInCredits: starship.cost_in_credits,
      crew: starship.crew,
      length: starship.length,
      manufacturer: starship.manufacturer,
      maxAtmospheringSpeed: starship.max_atmosphering_speed,
      model: starship.model,
      name: starship.name,
      passengers: starship.passengers,
      consumables: starship.consumables,
      hyperdriveRating: starship.hyperdrive_rating,
      MGLT: starship.MGLT,
      starshipClass: starship.starship_class,
    }
  }

  _extractId = (url) => {
    const idRegExp = /.*\/(\d+)\/$/;
    return url.match(idRegExp)[1];
  }
}

export default SwapiService;