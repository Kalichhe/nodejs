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

console.table({
  Architecture: os.arch(),
  "Free memory (MegaBytes)": (os.freemem() / 1024 / 1024).toFixed(),
  "Total memory (MegaBytes)": (os.totalmem() / 1024 / 1024).toFixed(),
  "User directory": os.homedir(),
  "Name laptop": os.hostname(),
  Platform: os.platform(),
  "Usage time (Hours)": (os.uptime() / 60 / 60).toFixed(),
  Version: os.version(),
});
