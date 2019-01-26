const Node = require('./node');

module.exports = class MenuBuilder {
  constructor(n) {
    this.count = 0;
    const tree = this.parse(n);
    return tree;
  }

  parse(n) {
    const node = new Node({ name: n.name, module: n.module });
    if (n.items && n.items.length > 0) {
      for (const child of n.items) {
        node.addChild(this.parse(child));
      }
    }
    return node;
  }
};
