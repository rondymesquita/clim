const Cli = require('./src/cli');
const MenuCli = require('./src/menu-cli');
const MenuBuilder = require('./src/menu-builder.js');

const fileText = {
  "name": "root",
  "items": [
    {
      "name": "Say Hello",
      "module": {
        "name": "shell",
        "cmds": [
          "echo Hello!"
        ]
      }
    },
    {
      "name": "Submenu",
      "items": [
        {
          "name": "Apt update",
          "module": {
            "name": "shell",
            "cmds": [
              "echo Hello!"
            ]
          }
        }
      ]
    }
  ]
}

async function main() {
  try {
    const cli = new Cli();
    const rootMenu = new MenuBuilder(fileText);
    const menuCli = new MenuCli(cli);
    await menuCli.show(rootMenu);
    // await menuCli.init;
    // menuCli.open(menu);

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

main();
