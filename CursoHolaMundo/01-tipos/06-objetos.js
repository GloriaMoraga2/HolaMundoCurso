//Personje de tv

let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personje = {
  nombre: "Tanjiero",
  anime: "Demon slayer",
  edad: 16,
};

console.log(personje);
console.log(personje.nombre);
console.log(personje["anime"]);

personje.edad = 13;

let llave = "edad";
personje[llave] = 16;

delete personje.anime;
console.log(personje);
