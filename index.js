const Cli = require('./src/cli');
const Menu = require('./src/menu');

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
    {
      name: 'Sub menu',
      items: {
        name: 'Apt update',
        cmds: [
          'echo "Hello!"',
        ],
      },
    },
  ],
};

async function main() {
  try {
    const cli = new Cli();
    while (true) {
      const menu = new Menu(cli, menuFile);
      await menu.init()
      // const selectedItem = await menu.mount()
      // menu.triggerAction(selectedItem)


      // if (selectedItem.isMenu()) {
      // }

      // const menu = new Menu(cli, menuFile);
      // const selectedItem = await menu.show();
      // console.log(selectedItem);
      // menu.triggerAction(selectedItem);
    }
  } catch (err) {
    console.err(err);
  } finally {
    process.exit();
  }
}

main();
