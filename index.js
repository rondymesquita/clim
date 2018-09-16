const term = require('terminal-kit').terminal;
const shell = require('shelljs');

const Menu = require('./src/menu');

function terminate() {
  term.grabInput(false);
  setTimeout(() => { process.exit(); }, 100);
}

term.on('key', (name) => {
  if (name === 'CTRL_C') { terminate(); }
});

term.eraseDisplay();
term.cyan('Cli Menu Alpha\n');

const menuFile = {
  items: [
    {
      name: 'Apt update',
      cmds: [
        'echo "Hello!"',
      ],
    },
    {
      name: 'Apt update',
      cmds: [
        'echo "Hello!"',
        'dir',
        'dir',
        'dir',
      ],
    },
  ],
};
(async () => {
  try {
    const menu = new Menu(menuFile);
    const selectedItem = await menu.show();
    const { selectedIndex } = selectedItem;
    const { cmds } = menuFile.items[selectedIndex];
    for (const cmd of cmds) {
      shell.exec(cmd);
    }
  } catch (err) {
    console.err(err);
  } finally {
    process.exit();
  }
})();
