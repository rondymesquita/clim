const ShellModule = require('./modules/shell.module.js');
// const Menu = require('./menu');

module.exports = class MenuCli {
  constructor(cli) {
    this.term = cli.term;
    this.cli = cli;

    this.options = {
      leftPadding: '  ',
      selectedLeftPadding: '> ',
      submittedLeftPadding: '* ',
    };
  }

  // async init() {
  //   const selectedMenu = await this.show();
  //   console.log('test', selectedMenu.hasChildren());

  //   if (selectedMenu.hasChildren()){
  //     await this.show(selectedMenu);
  //   }
  //   this.open(selectedMenu);
  // }

  async show(menu) {
    this.cli.reset();
    const itemsToMount = menu.children.map((item, index) => `${index + 1}. ${item.name}`);
    itemsToMount.push('0. Back/Exit');
    const item = await this.term.singleColumnMenu(itemsToMount, this.options).promise;
    const { selectedIndex, selectedText } = item;
    if (selectedText === '0. Back/Exit') {
      await this.show(menu.getParent());
    } else {
      const selectedMenu = menu.getChild(selectedIndex);

      if (selectedMenu.hasChildren()) {
        await this.show(selectedMenu);
      } else {
        this.open(selectedMenu);
      }
    }
  }

  open(menu) {
    if (menu.module.name === 'shell') {
      const shellModule = new ShellModule();
      shellModule.exec(menu.module);
    } else {
      console.log('this is a submenu', menu);
    }
  }
}
