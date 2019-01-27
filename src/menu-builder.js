const Menu = require('./menu');

module.exports = class MenuBuilder {
  constructor(n) {
    this.count = 0;
    const tree = this.parse(n);
    return tree;
  }

  parse(n) {
    const menu = new Menu({ name: n.name, module: n.module });
    if (n.items && n.items.length > 0) {
      for (const child of n.items) {
        menu.addChild(this.parse(child));
      }
    }
    return menu;
  }
};
