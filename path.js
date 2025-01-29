const path = require("node:path");

// Sirve para poder hacer una ruta que se adacte al sistema operativo, como Windows, Mac o Linux
const filePath = path.join("/public", "dist", "/style", "style.css");

console.log(filePath);
console.log(path.basename(filePath)); // Me muestra solo lo ultimo de la ruta
console.log(path.dirname(filePath)); // Me muestra lo que no me muestra basename
console.log(path.parse(filePath)); // Esto me muestra la ruta en forma de objeto, con informacion extra
console.log(path.resolve("dist")); // Esto me muestra la ruta total desde la raiz
