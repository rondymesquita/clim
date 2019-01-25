const shell = require('shelljs');

module.exports = class ShellModule {
  exec(item) {
    for (const cmd of item.cmds) {
      shell.exec(cmd);
    }
  }
};
