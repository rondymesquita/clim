const Menu = require('./menu');

module.exports = class MenuBuilder {
  static build(n) {
    const menu = new Menu({ name: n.name, cmds: n.cmds });
    if (n.items && n.items.length > 0) {
      for (const child of n.items) {
        menu.addChild(MenuBuilder.build(child));
      }
    }
    return menu;
  }
};
