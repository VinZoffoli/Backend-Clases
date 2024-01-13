//! Writefile con callback
const fs = require('fs');

fs.writeFile('archivoAsincronico.txt', 'Este es mi archivo asincronico', (error) => {
    if (error) {console.log('Error al crear el archivo')} 
    else {console.log('Archivo creado')}
});

//! appendFile con callbacks
fs.appendFile("miArchivo.txt", "\n¡Esto es nuevo contenido!", (error) =>{
    if (error) {
        console.log("Error al añadir contenido al archivo:", error.message);
    } else {
        console.log("Contenido añadido con exito.");
    }
});

//! Ejemplo de readfile con callback
fs.readFile("archivoAsincronico.txt", "utf-8", (error, cotenido) => {
    if (error){
        console.log("Error al leer el archivo", error.message);
    } else {
        console.log("Conteindo del archivo:",contenido);
    }
});

