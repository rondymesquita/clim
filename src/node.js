// const ShellModule = require('./modules/shell.module.js');

module.exports = class Node {
  constructor({name, module = 'nomodule'}) {
    // this.value = value;
    this.name = name;
    this.module = module;
    this.children = [
    ];
    this.parent = null;
  }

  setParentNode(node) {
    this.parent = node;
  }

  getParentNode() {
    return this.parent;
  }

  addChild(node) {
    node.setParentNode(this);
    // this.children[this.children.length] = node;
    this.children.push(node);
  }

  getChild(index) {
   return this.children[index];
  }

  getChildren() {
    return this.children;
  }

  removeChildren() {
    this.children = [
    ];
  }


  // isSubmenu() {
  //   throw new Error('not yet implemented');
  // }

  // getByIndex(index) {
  //   return this.items[index];
  // }

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
