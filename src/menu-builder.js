const Menu = require('./menu');
module.exports = class MenuBuilder {
  constructor(items) {
    let m;
    this._parse(menuFile)


    return m;
  }

  _parse(menuItems) {
    for (const item of menuItems) {
      if (menuItems.items) {
        this.items.push(new Menu(menuItems.items));
      } else {
        this.items.push(item);
      }
    }
  }
};
