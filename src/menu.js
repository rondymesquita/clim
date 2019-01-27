// const ShellModule = require('./modules/shell.module.js');

module.exports = class Menu {
  constructor({ name, module = {} }) {
    this.name = name;
    this.module = module;
    this.children = [
    ];
    this.parent = null;
  }

  setParentNode(node) {
    this.parent = node;
  }

  getParent() {
    return this.parent;
  }

  addChild(node) {
    node.setParentNode(this);
    this.children.push(node);
  }

  getChild(index) {
    return this.children[index];
  }

  // getChildren() {
  //   return this.children;
  // }

  removeChildren() {
    this.children = [
    ];
  }

  hasChildren() {
    return this.children.length > 0;
  }

  // open() {
  //   console.log('opening', this);
  //   if (this.module === 'shell') {
  //     console.log('shell module');
  //     const shellModule = new ShellModule();
  //     shellModule.exec(this);
  //   } else {
  //     console.log('this is a submenu');
  //   }
  // }
};
