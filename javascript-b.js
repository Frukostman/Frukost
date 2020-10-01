/*
//constructor producto
class frutaOVerdura {
	constructor(nombre, estacion, locacion, cantidad) {
		this.nombre = nombre;
		this.locacion = locacion;
		this.estacion = estacion;
		this.cantidad = cantidad;
	}
}

//constructor usuario
class usuario {
	constructor(estacion, locacion, organico) {
		this.organico = organico;
		this.locacion = locacion;
		this.estacion = estacion;
	}
}

// Creacion de productos

var brocoli = new frutaOVerdura(productos[0], estaciones[1], provincias[9], 1);
var papa = new frutaOVerdura(productos[1], estaciones[2], provincias[0], 1);
var banana = new frutaOVerdura(productos[2], estaciones[3], provincias[5], 1);
var frutilla = new frutaOVerdura(productos[3], estaciones[3], provincias[17], 1);
var zanahoria = new frutaOVerdura(productos[4], estaciones[2], provincias[3], 1);
var limon = new frutaOVerdura(productos[5], estaciones[2], provincias[22], 1);
var pera = new frutaOVerdura(productos[6], estaciones[1], provincias[14], 1);
var kiwi = new frutaOVerdura(productos[7], estaciones[0], provincias[12], 1);
var berenjena = new frutaOVerdura(productos[8], estaciones[1], provincias[4], 1);
var manzana = new frutaOVerdura(productos[9], estaciones[0], provincias[14], 1);
var cebolla = new frutaOVerdura(productos[10], estaciones[3], provincias[0], 1);
var tomate = new frutaOVerdura(productos[11], estaciones[0], provincias[11], 1);

//Creacion de usuarios

var clienteModelo1 = new usuario(true, "Chaco", "Verano")

//Prueba objetos + arrays

console.log("El " + brocoli.nombre + " se cosecha en " + brocoli.estacion + " en la provincia de " + brocoli.locacion)

// DE ACA PARA ABAJO ES TODO BORRADOR //

// Distancias

//console.log("De " + provincias[1] + " a " + provincias[5] + "hay" + 500 + "kilometros")


// PRUEBA CARRITO 10/9 //

/*
let carrito = [];
let buscarProducto = (carrito, buscado) => {
	for (let i = 0; i < carrito.length; i++) {
		if (carrito[i].descripcion === buscado) {
			return i;
		}
	}
	return -1;
};
let agregarCarrito = (descripcion, nombre) => {
	let posicion = buscarProducto(carrito, descripcion);
	if (posicion >= 0) {
		carrito[posicion].cantidad++;
	} else {
		const producto = {
			descripcion: descripcion,
			nombre: nombre,
			cantidad: 1,
		};
		carrito.push(producto);
	}
};
agregarCarrito(brocoli);
agregarCarrito(papa);
agregarCarrito(zanahoria);
agregarCarrito(tomate);
agregarCarrito(kiwi);
agregarCarrito(papa);
agregarCarrito(brocoli);
agregarCarrito(papa);

console.table(carrito); 
*/

