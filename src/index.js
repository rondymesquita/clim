#!/usr/bin/env node

require('module-alias/register');
const yaml = require('js-yaml');
const Cli = require('./cli');
const MenuCli = require('@/menu/menu-cli');
const MenuBuilder = require('@/menu/menu-builder');
const ArgParser = require('@/arg-parser');
// const yargs = require('yargs');


async function main() {
  const args = ArgParser.parse();
  const climFileJson = yaml.safeLoad(args.file);

  const cli = new Cli();
  const rootMenu = MenuBuilder.build(climFileJson);
  const menuCli = new MenuCli(cli);
  await menuCli.show(rootMenu);
}

main().catch((err) => {
  console.err(err);
}).finally(() => {
  process.exit();
});
