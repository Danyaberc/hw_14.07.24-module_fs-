import { testRun } from './test.js';
import fs from 'node:fs/promises';

console.log('IT`S main file');

const copyFile = async (main, service, empty) => {

    const mainFile = await fs.readFile(main, 'utf8')

    await fs.writeFile('emptyFile.txt',mainFile)

    setTimeout( async () =>{
        await fs.unlink('emptyFile.txt')
        console.log('Empty file del')
    },3000) 

    setTimeout( async () =>{
        await fs.writeFile('emptyFile.txt', mainFile)
        console.log('createFile')
    },5000)

    
};

let pathMainFile = './mainFile.txt';
let serviceFile = './service.txt';
let emptyFile = './emptyFile.txt';

copyFile(pathMainFile, serviceFile, emptyFile);