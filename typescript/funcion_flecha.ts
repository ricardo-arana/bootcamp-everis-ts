(function() {

    const sumar = function (a: number, b:number ): number {
        return a + b;
    }

    const sumar2 = (a:number, b: number) => a + b;

    console.log(sumar(5,7));
    console.log(sumar2(3,2));

    const hulk = 
    {
        nombre: 'Hulk',
        smash() {
            setTimeout(() =>  console.log(this.nombre + ' rompio todo'),
             2000);
        }
    }

    hulk.smash();


})();