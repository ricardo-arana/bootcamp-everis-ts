(function() {

    console.log('inico la pelea');
    const f_yamcha = 6;
    const f_saibaman = 5;
    const autodes = true;

    const promesa = new Promise<string>((resolve, reject) => {

        setTimeout(() => {
            if(f_yamcha > f_saibaman && !autodes) {
                resolve('Yamcha gano la pelea');
            } else {
                reject('false');
            }
        },
        2000);
    });
    promesa.then(obj => {
        console.log(obj);
    }).catch(err => {
        console.warn(err);
    })

    console.log('la promesa fue definida');

    

})();