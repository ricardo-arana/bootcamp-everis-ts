(function() {

    class Auto {
        //   color: string;
        //  fechaFabricacion: Date;
        // kilometraje: number;

        constructor(
        public  color: string,
        public fechaFabricacion: Date,
        public kilometraje: number
        ) {

        }

        arrancar() {
            console.log('auto esta en marcha');
        }

        detener() {
            console.log('auto esta detenido');

        }
    }

    let delorian: Auto = new Auto('Gris',new Date(), 0);

    delorian.arrancar();
    delorian.detener();

    
})();