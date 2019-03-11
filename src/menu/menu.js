// const ShellModule = require('./modules/shell.module.js');

module.exports = class Menu {
  constructor({
    name, cmds, level, breadcrumbs,
  }) {
    this.name = name;
    this.cmds = cmds;
    this.level = level;
    this.breadcrumbs = breadcrumbs;
    this.children = [
    ];
    this.parent = null;
  }

  setParentNode(node) {
    this.parent = node;
  }

  addChild(node) {
    node.setParentNode(this);
    this.children.push(node);
  }

  getChild(index) {
    return this.children[index];
  }

  getLabel() {
    return `${this.level}. ${this.name}`;
  }

  removeChildren() {
    this.children = [
    ];
  }

  hasChildren() {
    return this.children.length > 0;
  }
};
