// const fs = require("fs");

//?FS sincronico

//!Escribir o sobreescribir un archivo
// fs.writeFileSync("miArchivo.txt","Hola mundo sincronico");
// console.log("Archivo creado");

//!Obtener el contenido de un archivo
// function miContenido() = () => {
//     let contenidoArchivo = fs.readFileSync("./archivos/2.txt", "utf-8");
//     return contenidoArchivo;
// }

// console.log(miContenido())

//!existSync

const archivoExistente = fs.existsSync("./archivos/2.txt");

if (archivoExistente) {
    console.log("El archivo existe")
} else {
    console.log("El archivo no existe");
}

//? Agregar contenido a un archivo
const contenido = "\n Hola soy un nuvo contenido";
fs.appendFileSync("./archivos/2.txt", contenido);
console.log("Contenido agregado");

//? Eliminar un archivo
fs.unlinkSync("./archivos/2.txt");

//? Crear una carpeta
fs.mkdirSync("./archivos/2.txt");