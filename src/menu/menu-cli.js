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

  async _showBreadcrumbs(menu) {
    this.cli.term(`${menu.breadcrumbs}`);
  }

  async show(menu) {
    this.cli.reset();
    this._showBreadcrumbs(menu);
    const { selectedIndex, selectedText } = await this._getSelectedItem(menu);

    if (selectedText === this.EXIT_ITEM) {
      await this._backOrExit(menu);
    } else {
      const childMenu = menu.getChild(selectedIndex);

      if (childMenu.hasChildren()) {
        await this.show(childMenu);
      } else {
        this._exec(childMenu);
        await this.show(childMenu.parent);
      }
    }
  }

  async _getSelectedItem(menu) {
    const itemsToMount = menu.children.map(childMenu => `${childMenu.getLabel()}`);
    itemsToMount.push(this.EXIT_ITEM);

    const selectedItem = await this.term.singleColumnMenu(itemsToMount, this.options).promise;
    return selectedItem;
  }

  _exec(menu) {
    this.shellModule.exec(menu);
  }

  async _backOrExit(menu) {
    if (menu.parent) {
      await this.show(menu.parent);
    } else {
      this.cli.terminate();
    }
  }
};
