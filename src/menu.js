const term = require('terminal-kit').terminal;

class Menu {
  constructor(menu) {
    this.menu = menu;
  }

  async show() {
    return this.mountMenu();
  }

  async mountMenu() {
    const itemsToMount = this.menu.items.map(item => item.name);
    return term.singleColumnMenu(itemsToMount).promise;
  }
}
module.exports = Menu;
