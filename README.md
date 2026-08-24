# Trabajo práctico 01

## Descripción

Este proyecto reúne dos ejercicios de fundamentos de Node.js. `index.js` construye la ficha de un videojuego original usando datos del runtime y la guarda en un archivo de texto. `orden-event-loop.js` muestra el orden en que se ejecuta el código principal y una tarea programada con `setTimeout`.

El proyecto utiliza únicamente módulos nativos de Node.js y no requiere instalar paquetes de NPM.

## Cómo ejecutar

Se necesita tener Node.js instalado. Desde la carpeta raíz del proyecto, ejecutar:

```bash
node index.js
```

También se puede indicar el nombre del estudiante como argumento:

```bash
node index.js Camila
```

Para observar el orden del event loop:

```bash
node orden-event-loop.js
```

La salida esperada de este último programa respeta este orden:

1. Comienza el programa
2. Termina el código principal
3. Se ejecuta la tarea programada

## Archivo generado

Al ejecutar `index.js`, el programa crea automáticamente la carpeta `salida` si todavía no existe y escribe la ficha en:

```text
salida/ficha-videojuego.txt
```

La misma ficha se muestra en la terminal y se guarda en el archivo con codificación UTF-8. Se puede ejecutar el programa varias veces sin errores porque la carpeta se crea usando `{ recursive: true }` y el archivo se sobrescribe con la información actual.

## Conceptos

### 1. Diferencia entre JavaScript, V8 y el runtime de Node.js

JavaScript es el lenguaje de programación: define su sintaxis y sus reglas. V8 es el motor desarrollado por Google que interpreta y ejecuta JavaScript. Node.js es un runtime que incorpora V8 y agrega herramientas para ejecutar JavaScript fuera del navegador, como acceso al sistema de archivos, procesos y módulos nativos.

### 2. Por qué `setTimeout(..., 0)` se ejecuta después del código principal

El cero de `setTimeout` no significa que el callback se ejecute inmediatamente. Indica el tiempo mínimo antes de que la tarea pueda entrar en la cola correspondiente. Node.js termina primero de ejecutar el código síncrono actual y luego, cuando el event loop tiene la oportunidad, toma el callback pendiente.

### 3. Diferencia general entre I/O bloqueante y no bloqueante

En una operación de I/O bloqueante, el programa queda esperando a que termine la lectura o escritura antes de continuar con la siguiente instrucción. En una operación no bloqueante, Node.js puede continuar atendiendo otro trabajo mientras espera el resultado, que luego se informa mediante un callback u otro mecanismo asincrónico.

### 4. Responsabilidades de `node:path` y `node:fs` en `index.js`

`node:path` ofrece utilidades independientes del sistema operativo para construir rutas; en este caso, `path.join` combina la ubicación del proyecto con `salida` y el nombre del archivo. `node:fs` permite trabajar con el sistema de archivos: `fs.mkdirSync` crea la carpeta y `fs.writeFileSync` escribe la ficha en `ficha-videojuego.txt` usando UTF-8.
