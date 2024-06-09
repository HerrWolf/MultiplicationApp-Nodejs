import * as fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b:base, l:limit, s:show } = yarg;
let outputMessage:string = '';
// const base:number = b;

const headerMessage:string = `
============================
    Tabla del: ${base}
============================\n
`;

for (let i:number = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}
outputMessage = headerMessage + outputMessage;

const outputPath:string = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
// fs.createWriteStream(`outputs/tabla-${base}.txt`).write(outputMessage);
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);

if (show) console.log(outputMessage);

// Mi solucion
// const msg_bienvenida: string = `============================
//     Tabla del: 5
// ============================\n`;
//
// console.log(msg_bienvenida);
//
// for (let i: number = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }