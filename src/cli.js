const terminalKit = require('terminal-kit');

module.exports = class Cli {
  constructor() {
    this.term = terminalKit.terminal;
    this.addHeader();
    this._handleTerminate();
  }

  addHeader() {
    this.term.eraseDisplay();
    this.term.cyan('Cli Menu Alpha\n');
    this.term.yellow('Select an option and press Enter\n');
  }

  terminate() {
    this.term.grabInput(false);
    setTimeout(() => { process.exit(); }, 100);
  }

  clear() {
    this.term.clear();
  }

  reset() {
    this.clear();
    this.addHeader();
  }

  _handleTerminate() {
    this.term.on('key', (name) => {
      if (name === 'CTRL_C') { this.terminate(); }
    });
  }

};
