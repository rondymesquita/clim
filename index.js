const Cli = require('./src/cli');
const MenuCli = require('./src/menu-cli');
// const MenuBuilder = require('./src/menu-builder.js');

const menuFile = {
  items: [
    {
      name: 'Apt update',
      module: 'shell',
      cmds: [
        'echo "Hello!"',
      ],
    },
    {
      name: 'Apt update',
      module: 'shell',
      cmds: [
        'echo "Hello!"',
        'echo "Hello!"',
        'echo "Hello!"',
      ],
    },
    {
      name: 'Sub menu',
      items: [
        {
          name: 'Apt update',
          module: 'shell',
          cmds: [
            'echo "Hello!"',
          ],
        },
      ],
    },
  ],
};

async function main() {
  try {
    const cli = new Cli();
    const menuCli = new MenuCli(cli, menuFile);
    const menu = await menuCli.show();
    menu.open();

    // while (true) {
    //   selectedItem = await menu.mount();
    //   menu.open(selectedItem);
    //   // if(new Menu(cli, selectedItem)) {
    //   //   menu = selectedItem
    //   // } else {
    //   //   menu.open(selectedItem);
    //   // }
    // }
  } catch (err) {
    console.err(err);
  } finally {
    process.exit();
  }
}

try {
  main();
} catch (err) {
  console.err(err)
}
