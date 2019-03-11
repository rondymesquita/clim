const Menu = require('./menu');

class MenuBuilder {
  static build(menu) {
    const m = new Menu({
      name: menu.name,
      cmds: menu.cmds,
      level: MenuBuilder.currentMenuLevel,
      breadcrumbs: '',
    });
    if (menu.items && menu.items.length > 0) {
      for (const child of menu.items) {
        // const parent = m.parent ? m.parent.name : 'no parent';
        m.addChild(MenuBuilder.build(child));
      }
    }
    MenuBuilder.currentMenuLevel += 1;
    return m;
  }

  // static _buildBreadcrumbs(menu) {
  //   // const parent = menu.parent ? menu.parent.name : 'no parent';
  //   // console.log(menu.name, parent);
  //   let breadcrumbs = '';
  //   if (menu.parent) {
  //     breadcrumbs = ' / ' + MenuBuilder._buildBreadcrumbs(menu.parent).name;
  //   }
  //   return breadcrumbs;
  // }
}

MenuBuilder.currentMenuLevel = 1;

module.exports = MenuBuilder;
