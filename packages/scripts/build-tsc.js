const { spawn } = require("child_process");
const path = require("path");

const command = spawn(path.resolve(__dirname, "node_modules/.bin/tsc"), {
  cwd: process.cwd(),
});

command.stdout.pipe(process.stdout);
command.stderr.pipe(process.stderr);
