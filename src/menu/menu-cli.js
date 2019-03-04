const ShellModule = require('@/modules/shell.module.js');

module.exports = class MenuCli {
  constructor(cli) {
    this.term = cli.term;
    this.cli = cli;

    this.options = {
      leftPadding: '  ',
      selectedLeftPadding: '> ',
      submittedLeftPadding: '* ',
    };

    this.EXIT_ITEM = '0. Back/Exit';

    this._init();
    this.shellModule = new ShellModule();
  }

  _init() {
    this.cli.reset();
  }

  async show(menu) {
    const itemsToMount = menu.children.map((item, index) => `${index + 1}. ${item.name}`);
    itemsToMount.push(this.EXIT_ITEM);

    const item = await this.term.singleColumnMenu(itemsToMount, this.options).promise;
    const { selectedIndex, selectedText } = item;

    if (selectedText === this.EXIT_ITEM) {
      if (menu.parent) {
        await this.show(menu.parent);
      } else {
        this.cli.terminate();
      }
    } else {
      const selectedMenu = menu.getChild(selectedIndex);

      if (selectedMenu.hasChildren()) {
        await this.show(selectedMenu);
      } else {
        this.open(selectedMenu);
        await this.show(selectedMenu.parent);
      }
    }
  }

  open(menu) {
    this.shellModule.exec(menu);
  }
};
