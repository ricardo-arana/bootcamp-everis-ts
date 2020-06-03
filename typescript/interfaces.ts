(function() {

    interface Personaje {
        nombre: string;
        epoca: string;
        arma?: string;
    }
    
    const enviarAlPasado = (personaje: Personaje) => {
        console.log(personaje.nombre + ' fue enviado a ' + personaje.epoca);
    }

    const personaje1: Personaje = {
        nombre: 'Jonas',
        epoca: '2019',
        arma: 'cuchillo'
    }

    enviarAlPasado(personaje1);

    
})();