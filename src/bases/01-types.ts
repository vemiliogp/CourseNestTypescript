export let name: string = "Victor";
export const age: number = 28;
export const isValid: boolean = true;

name = "Melissa";
// name = 123;
// name = true;

export const templateString = ` Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${name}
expresiones ${1 + 1}
números: ${age}
booleanos: ${isValid}`;

console.log(templateString);