const Cli = require('./src/cli');
const MenuCli = require('./src/menu-cli');
// const MenuBuilder = require('./src/menu-builder.js');

const rootMenu = {
  "name": "root",
  "items": [
    {
      "name": "MENU1",
      "module": {
        "name": "shell",
        "cmds": [
          "echo Hello!"
        ]
      }
    },
    {
      "name": "MENU2 COM SUBMENU",
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
    const menuCli = new MenuCli(cli, rootMenu);
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

process.on('uncaughtException', function (err) {
  console.log(err);
})

try {
  main();
} catch (err) {
  console.err(err)
}
