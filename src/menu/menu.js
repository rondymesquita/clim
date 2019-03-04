// const ShellModule = require('./modules/shell.module.js');

module.exports = class Menu {
  constructor({ name, cmds }) {
    this.name = name;
    this.cmds = cmds;
    this.children = [
    ];
    this.parent = null;
  }

  setParentNode(node) {
    this.parent = node;
  }

  isRoot() {
    return this.parent === null;
  }

  addChild(node) {
    node.setParentNode(this);
    this.children.push(node);
  }

  getChild(index) {
    return this.children[index];
  }

  removeChildren() {
    this.children = [
    ];
  }

  hasChildren() {
    return this.children.length > 0;
  }
};
