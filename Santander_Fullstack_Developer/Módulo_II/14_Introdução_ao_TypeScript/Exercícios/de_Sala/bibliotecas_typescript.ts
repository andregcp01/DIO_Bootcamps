//no arquivo index.ts
export const numero = 2;

//no arquivo script.ts
import {numero} from "./index.ts"

console.log(numero);

//no arquivo script.js
"use strict";
exports.__esModule = true;
exports.numero = void 0;
exports.numero = 2;
