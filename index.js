const path = require('node:path');
const fs = require('node:fs');

const estudiante = process.argv[2] || 'Estudiante invitado';

const videojuego = {
  titulo: 'Horizonte de Titanio',
  estudio: 'Bruma Norte Studio',
  anio: 2024,
  plataformas: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
  multijugador: true,
};

const plataformasTexto = videojuego.plataformas.join(', ');
const multijugadorTexto = videojuego.multijugador ? 'Sí' : 'No';

const ficha = `FICHA DE VIDEOJUEGO
===================
Estudiante: ${estudiante}
Node.js: ${process.version}
Plataforma del sistema: ${process.platform}

Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasTexto}
¿Es multijugador?: ${multijugadorTexto}
`;

const carpetaSalida = path.join(__dirname, 'salida');
const rutaArchivo = path.join(carpetaSalida, 'ficha-videojuego.txt');

fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(rutaArchivo, ficha, 'utf8');

console.log(ficha);
console.log(`Archivo generado en: ${rutaArchivo}`);
