class Futbolista {
    nombre
    estatura
    edad
    pais
    dorsal

    constructor(nombre, estatura, edad, pais, dorsal) {
        this.nombre = nombre;
        this.estatura = estatura;
        this.edad = edad;
        this.pais = pais;
        this.dorsal = dorsal;
    }

    // Métodos - funciones
    cabecear(cabezazo) {
        console.log(`Cabecea con nivel de ${cabezazo}`);
    }

    patearConLaDerecha(derecha) {
        console.log(`Patea con la derecha con nivel de ${derecha}`);
    }

    patearConLaIzquierda(izquierda) {
        console.log(`Patea con la izquierda con nivel de ${izquierda}`);
    }

    correr(velocidad) {
        console.log(`Corre con la velocidad de nivel de ${velocidad}`);
    }
}

const lio = new Futbolista('Lio', 1.71, 36, 'Argentina', 10);
const cristiano = new Futbolista('Cristiano', 1.84, 39, 'Portugal', 7);
