const ShellModule = require('./modules/shell.module.js');

module.exports = class Menu {
  constructor(items) {
    this.items = [];
  }

  hasChild() {
    return this.items.items.length > 0;
  }

  isSubmenu() {
    throw new Error('not yet implemented');
  }

  // getByIndex(index) {
  //   return this.items[index];
  // }

  open() {
    console.log('opening', this);
    if (this.module === 'shell') {
      console.log('shell module');
      const shellModule = new ShellModule();
      shellModule.exec(this);
    } else {
      console.log('this is a submenu');
    }
  }
  
};
