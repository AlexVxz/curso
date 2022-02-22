// const numeros = [1,2,3,4,5];
// const cubos = numeros.map((valor)=> valor * valor * valor);

// console.log('numeros',numeros);
// console.log('cubos', cubos);

const personas=[
    {id:1, nombre: "Felipe", pais:"RD"},
    {id:2, nombre: "Alex", pais:"mxn"},
    {id:3, nombre: "pepe", pais:"arg"}
];
const ids = personas.map(persona => persona.id);
const nombres = personas.map(persona => persona.nombre);

const nombresyPaises = personas.map(persona =>{
    return{ nombre: persona.nombre, pais: persona.pais}
});
console.log(nombresyPaises);

const divs= personas.map(persona => `
<div>
    <span>${persona.nombre}</span> (pais: ${persona.pais})
</div>    `);
console.log(divs);