const { log } = require("node:console");
const fs = require("node:fs");

// // Esto sirve para poder leer archivos
// const first = fs.readFileSync("./data/first.txt", "utf-8");
// console.log(first);

// // Se le pude quitar lo de utf-8
// const second = fs.readFileSync("./data/second.txt");

// // Y aqui se le puede convertir de esta forma
// console.log(second.toString());

// // Esto sirve para poder crear archivos

// const text = " Este sera el texto del documento nuevo";
// const createFile = fs.writeFileSync("./data/third.txt", text, {
//   // Sirve para anadir mas texto
//   flag: "a",
// });

// // const third = fs.readFileSync("./file/third.txt", "utf-8");
// // console.log();

// Ahora lo se hara asincronico

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
