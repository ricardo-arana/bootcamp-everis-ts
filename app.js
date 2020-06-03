"use strict";
(function () {
    var sumar = function (a, b) {
        return a + b;
    };
    var sumar2 = function (a, b) { return a + b; };
    console.log(sumar(5, 7));
    console.log(sumar2(3, 2));
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () { return console.log(_this.nombre + ' rompio todo'); }, 2000);
        }
    };
    hulk.smash();
})();
