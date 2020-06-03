(function() {

const viajero = 
    {
        nombre: 'Jonas',
        epoca: '2019',
        edad: 28
    }

    const { nombre: nombre2, epoca, edad} = viajero;

    function imprimir({nombre, epoca, edad}: any) {
        console.log(nombre);
        console.log(epoca);
        console.log(edad);
    }

    imprimir(viajero);

    const viajeros: string[] = ["Jonas", "Claudia", "Martha"];

    const [, , martha] = viajeros;

    // console.log(jonas);
    // console.log(claudia);
    console.log(martha);

})();