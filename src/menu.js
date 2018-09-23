const shell = require('shelljs');

class Menu {
  constructor(cli, menu) {
    this.term = cli.term;
    this.menu = menu;

    this.options = {
      leftPadding: '  ',
      selectedLeftPadding: '> ',
      submittedLeftPadding: '* ',
    };
  }

  async init() {
    const selectedItem = await this.mount();
    const { selectedIndex } = selectedItem;
    this.triggerAction(selectedItem);
  }

  async mount() {
    const itemsToMount = this.menu.items.map((item, index) => `${index + 1}. ${item.name}`);
    return this.term.singleColumnMenu(itemsToMount, this.options).promise;
  }

  triggerAction(selectedItem) {
    const { selectedIndex } = selectedItem;
    const item = this.menu.items[selectedIndex];
    if (item.cmds.length > 0){
      for (const cmd of item.cmds) {
        shell.exec(cmd);
      }
    } else {
      console.log('this is a submenu')
    }
  }
}
module.exports = Menu;
