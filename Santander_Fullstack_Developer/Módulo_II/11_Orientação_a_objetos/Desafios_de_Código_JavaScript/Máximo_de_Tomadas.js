let lines = gets().split("\n");

let line = lines.shift().split(' ');

let soma = 0;

for (i=0; i < line.length; i++) {
	soma = soma + parseInt(line[i]);
}
	
let a = soma - 3;

console.log(`${a}`);