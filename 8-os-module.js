const os = require("os");

// console.log(os.freemem() / (1024 * 1024));
// console.log(os.uptime() / 3600);

const osInfo = {
  name: os.type(),
  release: os.release(),
  freeMemory: os.freemem() / (1024 * 1024),
  uptime: os.uptime() / 3600,
  version: os.version(),
};

console.log(osInfo);
