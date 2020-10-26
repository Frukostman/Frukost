
document.addEventListener('DOMContentLoaded', mostrarCliente)

document.addEventListener('DOMContentLoaded', compraCarrito)

var compra = JSON.parse(localStorage.carrito);

var costo = JSON.parse(localStorage.resultado);

var cliente = JSON.parse(localStorage.cliente);

var resultado = JSON.parse(localStorage.resultado);

var descripcionCliente = $("#espacioCliente");

//Devuelve si o no en string
function siNo() {
	if (cliente.clienteOrg == true) {
		return "si"
	} else {
		return "no"
	}
}

//Muestra descripcion cliente
function mostrarCliente() {

$(descripcionCliente).append(`
<div class="text-center py-2" style="background: white; border-radius: 10px;">
<h2 style="color: black;">Siendo que estamos en 
<b style="color: crimson;">${cliente.estacionCliente}</b>, te encontras en <b style="color: crimson;">${cliente.clienteProv}</b> y 
<b style="color: crimson;">${siNo()}</b> compras productos orgánicos este fue tu resultado: </h2>

<h2 style="color: black;"> Tu compra es sustentable en un <b style="color: crimson;">${resultado}%</b>:</h2>
</div>`)

}

//Muestra productos "comprados"
var lista = $("#muestraCarrito")

function compraCarrito() {

	var sumadorKms = 0

	compra.forEach(item => {	
		
	var kilometros = distancias(item.procedencia, cliente.clienteProv)

	$(lista).append(`<div class="col-sm-3 producto">
	<p>${item.nombre.toUpperCase()} x <strong>${item.cantidad}kg</strong></p>
	<p> Estacionalidad: <b id="estacion">${item.estacionalidad}</b></p>
	<p>Origen: <b id="origen">${item.procedencia}</b></p>
	<p>Dist. de origen: <b>${kilometros} kms</b></p>
	</div>`)
	
	$(lista).addClass("ticket")

	sumadorKms = sumadorKms + kilometros
	
	});

	$(espacioDistancia).append(`
	<div class="text-center py-2 mb-2" style="background: white; border-radius: 10px;">
	<h2 style="color: black;">En total, tus productos recorrieron aproximadamente 
	<b style="color: crimson;">${sumadorKms}</b>
	kms para llegar a tu casa.</h2></div>`)

}

//Amplia resultado Obtenido
function ampliarResultado() {
	if (resultado < 25) {
		$("#0-25").addClass("ampliar animate__animated animate__pulse").children("i").addClass("mostrarFlechita")
	}
	if (resultado > 25 && resultado < 50) {
		$("#25-50").addClass("ampliar animate__animated animate__pulse").children("i").addClass("mostrarFlechita")
	}
	if (resultado > 50 && resultado < 75) {
		$("#50-75").addClass("ampliar animate__animated animate__pulse").children("i").addClass("mostrarFlechita")
	}
	if (resultado > 75) {
		$("#75-100").addClass("ampliar animate__animated animate__pulse").children("i").addClass("mostrarFlechita")
	}
}
ampliarResultado() 

//Mostrar distancias recorridas

var espacioDistancia = $("#muestraDistancia")

