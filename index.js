#! /usr/bin/env node

import { program } from "commander";
import { generate } from "./src/generate.js";
import chalk from 'chalk';

program
    .command('generate')
    .option('-n, --name <name', 'name as a template', 'cool name')
    .description('generates a cool name')
    .action(function (options) {
        const ret = generate(options.name);
        console.log(chalk.greenBright("generated name: " + ret));
        process.exit(0);
    })
    .parse();
