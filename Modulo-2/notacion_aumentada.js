let apellido = "gavilan";
let edad = 99;
let fecha = new Date();
const paisProp ='pais';
const paisValor = 'RD';
let persona = {
    nombre: "felipe",
    apellido,
    edad,
    fechaActual: new Date(),
    funcionNormal(){
        
    },

    funcionFlecha:() => {},
    [paisProp]: paisValor
};

console.log(persona);