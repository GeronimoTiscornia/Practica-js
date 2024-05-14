//Ejercicio 1//
let misDatos = {
    nombre: "Geronimo",
    apellido: "Tiscornia",
    dni: 46753184,
    comidasFavoritas: ["Asado", "Pasta", "Sushi"]
};

console.log(misDatos.nombre)
console.log(misDatos.apellido)
console.log(misDatos.dni)
console.log(misDatos.comidasFavoritas)

//Ejercicio 2//
let misdatos = {
    nombre: "Geronimo",
    apellido: "Tiscornia",
    edad: 18,
    dni: 46753184,
    comidasFavoritas: ["Asado", "Pasta", "Sushi"],
    saludar: function() {
        return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años." + " Mi primer comida favorita es " + this.comidasFavorita; //no se como hacer para que elija una de las comidas//
    }
};
console.log(misdatos.saludar())

//Ejercicio 3//
let auto = {
    marca: "Volkswagen",
    modelo: "Golf",
    anio: 2019,
    color: "gris oscuro",
    posicion: 0,
    avanzar: function(n) {
        if (n > 0) {
            this.posicion += n;
        }
    },
    retroceder: function(n) {
        if (n > 0) {
            this.posicion -= n;
        }
    }
};

auto.avanzar(10);
auto.retroceder(5);
auto.avanzar(15);

console.log('La posición final del auto es: ' + auto.posicion);

//Ejercicio 4//
let nuevoAuto = {
    marcA: "Volkswagen",
    modelO: "Golf",
    aniO: 2019,
    colOr: "gris oscuro",
    posiciOn: 0,
    moverse: function(n) {
        if (n => 0) {
            this.posiciOn += n;
        }
        else {
            this.posiciOn -= n;
        }
    }
};
nuevoAuto.moverse(10)
nuevoAuto.moverse(-40)
nuevoAuto.moverse(50)

console.log("La posicion final del auto es: " + nuevoAuto.posiciOn);

//Ejericio 5//
let ironMan = {
    Nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "lanzar misiles", "Disparar lasers"],
    energia: 100,
    getPoder: function(y) {
        if (y <= this.poderes.length) {
         this.energia -= 10;
         return "poder elegido de" + Nombre + ":" +  poderes + ". " +  "energia restante: " + energia + "."
        } else {
            return "¡El número de poder elegido es inválido!";
        }
    }
};
console.log(ironMan.getPoder(1)); // Volar
console.log(ironMan.getPoder(2)); // Lanzar misiles
console.log(ironMan.getPoder(3)); // Disparar láser