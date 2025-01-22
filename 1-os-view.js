const os = require("node:os");

console.log(
  "\n--------------------------------------------------------------------------------------------------"
);
console.log(
  `| Welcome ${os.hostname()} to your laptop, here you can see the specific components of your laptop |`
);

console.log(
  "--------------------------------------------------------------------------------------------------\n"
);

console.log("----------------------");
console.log("| Architecture: ", os.arch(), "|");
console.log("----------------------------------");
console.log(
  "| Free memory (MegaBytes): ",
  (os.freemem() / 1024 / 1024).toFixed(),
  "|"
);
console.log("------------------------------------");
console.log(
  "| Total memory (MegaBytes): ",
  (os.totalmem() / 1024 / 1024).toFixed(),
  "|"
);
console.log("--------------------------------------------");
console.log("| User directory: ", os.homedir(), "|");
console.log("--------------------------------------------");
console.log("| Name laptop: ", os.hostname(), "|");
console.log("--------------------------------");
console.log("| Platform: ", os.platform(), "|");
console.log("---------------------------");
console.log("| Usage time (Hours): ", (os.uptime() / 60 / 60).toFixed(), "|");
console.log("-----------------------------");
console.log("| Version: ", os.version(), "|");
console.log("-----------------------------");
