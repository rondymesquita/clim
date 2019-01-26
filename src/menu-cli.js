const ShellModule = require('./modules/shell.module.js');
// const Menu = require('./menu');
const MenuBuilder = require('./menu-builder');

module.exports = class MenuCli {
  constructor(cli, menuFile) {
    this.term = cli.term;
    // console.log('>', menuFile);
    this.menu = new MenuBuilder(menuFile);
    console.log('>', this.menu);
    // console.log(this.menu, this.menu instanceof Menu);

    this.options = {
      leftPadding: '  ',
      selectedLeftPadding: '> ',
      submittedLeftPadding: '* ',
    };
  }

  async show() {
    const itemsToMount = this.menu.children.map((item, index) => `${index + 1}. ${item.name}`);
    console.log('menu', itemsToMount);
    const item = await this.term.singleColumnMenu(itemsToMount, this.options).promise;
    const { selectedIndex } = item;
    console.log('menu', selectedIndex);
    const selectedMenu = this.menu.getChild(selectedIndex);
    console.log('menu', selectedMenu);
    return selectedMenu;
  }

  open(item) {
    if (item.module === 'shell') {
      console.log('shell module');
      const shellModule = new ShellModule();
      shellModule.exec(item);
    } else {
      console.log('this is a submenu');
    }
  }
}
