const yargs = require('yargs');
const fs = require('fs');

module.exports = class ArgParser {
  static parse() {
    const { argv } = yargs
      .usage('$0', 'start the application server')
      .command('init', 'Generates an initial file.yml')
      .option('f', {
        alias: 'file',
        demandOption: true,
        default: './Climfile.yml',
        describe: 'Inform a different file',
        type: 'string',
      });

    try {
      const file = fs.readFileSync('./Climfile.yml', 'utf8');
      argv.file = file;
    } catch(err) {
      console.log(err);
      throw err;
    }
    return argv;
  }
};
