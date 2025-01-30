const { readFile } = require("node:fs");
const { promisify } = require("node:util");

// Se usara la forma asincronica

// Usando promisify
const readFilepromese = promisify(readFile);

// Se usara Promise

const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (data) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

// getText("./data/first.txt")
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .then(() => getText("./data/second.txt"))
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

// async await
async function read() {
  try {
    // throw new Error("Sirve para crear errores");
    const result = await readFilepromese("./data/first.txt", "utf-8");
    const result2 = await readFilepromese("./data/second.txt", "utf-8");
    const result3 = await readFilepromese("./data/third.txt", "utf-8");

    console.log(result);
    console.log(result2);
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}

read();
