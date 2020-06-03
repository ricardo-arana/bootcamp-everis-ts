(function() {

    function viajar(personaje: string, epoca?: string, objeto: string = "maquina del tiempo") {
        if(epoca) {
            console.log( `${personaje} viaja 33 años al ${epoca} con ${objeto}` ); 
        } else {
            console.log(`${personaje} viaja 33 años con ${objeto}`);
        }
        
    }

    let personaje = "Jonas";
    let personaje2 = "Claudia";

    viajar(personaje);
    viajar(personaje2, "pasado");
    viajar("Victor", "futuro", "un tunel secreto");
    
})();