
//espacio para verduras
const espacioCards = document.querySelector("#cajonFrutas");
//espacio para lista
const listita = document.querySelector("#carrito");
//espacio resultado
const resultadoTotal = document.querySelector("#resultadoFinal")


document.addEventListener('DOMContentLoaded', cargaInicialProductos)

document.addEventListener('DOMContentLoaded', loadCarrito)


//  CREAR CARDS  //

let productos;

//Traer productos con AJAX
function cargaInicialProductos() {
  $.ajax({
      url: 'jsonProd.json',
      method: 'GET',
      dataType: 'json',
      success: function (data) {      
        productos = data;
        mostrarVerduras();
        
      },
      error: function (error) {
        console.log(error);
      }
    })
}

//Mostrar productos en pagina
function mostrarVerduras() {
  productos.forEach((producto) => {
    let cardProducto = document.createElement("div");

    cardProducto.className = "producto";
    cardProducto.innerHTML = `<h2 style="color: black;">${producto.nombre}</h2>
    <img class:"foto-verdura" src=${producto.img} alt="${producto.nombre}">
    <button class="btn btn-primary botonAgregar" onclick="agregarACarrito(${productos.indexOf(producto)})">Agregar 1 kg</button>`;

    espacioCards.appendChild(cardProducto);
  });
}

// Compras en carrito  //

const carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];

//Mostrar Items en carrito
function agregarACarrito(index) {
  var producto = productos[index];
  if (carrito.length > 0) {
    var noExiste = true;
    for (var i = 0; i < carrito.length; i++) {
      if (producto.nombre === carrito[i].nombre) {
        carrito[i].cantidad++;
        noExiste = false;
      }
    }
    if (noExiste) {
      producto.cantidad = 1;
      carrito.push(producto);
    }
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }
  loadCarrito();
  localStorage.carrito = JSON.stringify(carrito);
}

//--AGREGAR ITEMS AL CARRITO

function loadCarrito() {

    listita.innerHTML = "";

    var kilos = document.querySelector("#sumador")
    kilos.innerHTML = "";

  if (carrito.length > 0) {
    var sumador = 0;
    carrito.forEach((producto) => {
      let divCar = document.createElement("div");
      divCar.classList = "list-group-item d-flex justify-content-between align-items-center class-kilo"
      divCar.style = "clear:both; style:margin: 5px 0 0 0";
      divCar.innerHTML = `<p>${producto.nombre} <span class="prodCarrito badge badge-primary badge-pill" >${producto.cantidad} kg</span>  </p>
      <button style="float:right" onclick="removerCarrito(${carrito.indexOf(producto)})">x</button>`;
      listita.appendChild(divCar);
      sumador = sumador + producto.cantidad;
    });
    
    
    kilos.classList = "pt-4"; 
    
    kilos.innerHTML = `${sumador}kgs`;   
  }  
}
loadCarrito();

// sacar items del carrito

function removerCarrito(index) {
  carrito[index].cantidad = 0;
  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }
  localStorage.carrito = JSON.stringify(carrito);
  loadCarrito();
}


// Averiguar ESTACION APROX actual

function darEstacion() {
  var estacionActual = new Date().getMonth()
  
  if (3 <= estacionActual && estacionActual <= 5) {
    return 'Otoño';
  }
  if (6 <= estacionActual && estacionActual <= 8) {
    return 'Invierno';
  }
  if (9 <= estacionActual && estacionActual <= 11) {
    return 'Primavera';
  } 
    return 'Verano';
}


// Traigo provincia con AJAX + Seleccion PROVINCIA

function cargarProvincias() {

  $.ajax({
    url: 'https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre',
dataType: 'json',
success: function (data) {
  //console.log(data)
  totalProvincias = data.provincias
  totalProvincias.forEach(element => {
    $('#provincia').append(`					
        <option>${element.nombre}</option>
        `)
  });
  
},
error: function (error) {
  console.log(error)
}
});

$("#provincia").change(mostrarFinal);

}
cargarProvincias()


// Hacer scroll
function scrollWin(x, y) {
  window.scrollBy(x, y);
}

//Mostrar Boton CALCULO

function mostrarFinal() {
  if (carrito.length > 0) {
    scrollWin(0, 150)

  var paso4 = $("#espacioCalcular")
  $(paso4).html(`<div id="paso4"><h4><b>Paso 4:</b></h4>
  <button" class='btn btn-success btn-block boton-calcular'>Calcular</button></div> 
  <div id='generarCalculo'></div>`).slideDown('slow');

  $(".boton-calcular").click(mostrarResultado)
  $(".boton-calcular").click(mostrarAlert)
  $(".boton-calcular").click(guardarCliente)
  $(".boton-calcular").click(aislar)
  }else {
    Swal.fire("No pusiste ningun producto en el carrito!");
  }
 
}

//aislar RESULTADO
function aislar() {
  $("#paso3").slideUp()
  $("#paso4").slideUp()
  $("#paso2").slideUp()
  $("hr").hide()
}

//Mostrar CALCULO
function mostrarResultado() {

    var lugarResultado = $("#generarCalculo")

    $(lugarResultado).html(`<hr><h2 style="margin-top: 10px; color: black; text-align: center;"><b>Tu resultado es:</b></h2>
    <h1 style="text-align: center; color: crimson;"> <span id="resultadoFinal">${calculo()}</span>%</h1>
    <a href="explicacion.html"><button class="btn btn-outline-info btn-block boton-mas-info mb-5 animate__animated animate__pulse">¿Que significa este numero?</button></a>
    `).slideDown('slow');
}

//Sweet alert - spinner
function mostrarAlert() {

  let timerInterval
  Swal.fire({
    title: 'Calculando...',
    html: 'Voy a tener tu respuesta en <b></b> milisegundos.',
    timer: 1000,
    timerProgressBar: false,
    willOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        const content = Swal.getContent()
        if (content) {
          const b = content.querySelector('b')
          if (b) {
            b.textContent = Swal.getTimerLeft()
          }
        }
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      //console.log('me cerro el timer')
    }
  })

}

// Averiguar si son productos organicos

let checkOrganico = document.querySelector("#customSwitch1").checked;

//Guardo estacion del cliente

const estacionCliente = darEstacion()

//Guardar Cliente

//var cliente = []; 
const cliente = new Object();

function guardarCliente() {
      
  cliente.clienteOrg = document.querySelector("#customSwitch1").checked;
  cliente.clienteProv = document.querySelector("#provincia").value;
  cliente.estacionCliente = darEstacion()
  //cliente.push(estacionCliente)
  //cliente.push(clienteOrg)
  //cliente.push(clienteProv)
  
  localStorage.cliente = JSON.stringify(cliente)
} 
  
// CALCULO 
function calculo() {

  let puntosTotal = 0
  let kilosTotal = 0

	carrito.forEach((producto) => {

    let costoDistancia = distancias(document.querySelector("#provincia").value, producto.procedencia)
        
		//chequeo provincia
		if (document.querySelector("#provincia").value == producto.procedencia){
			producto.puntos = producto.puntos 
		} else {
			producto.puntos = producto.puntos * (1-(costoDistancia/4158))
		}
		//chequeo estacionalidad
		if (estacionCliente == producto.estacionalidad) {
			producto.puntos = producto.puntos 
		}else {
			producto.puntos = producto.puntos * 0.7
		}

			puntosTotal = (producto.puntos * producto.cantidad) + puntosTotal
			kilosTotal = kilosTotal + producto.cantidad
		});
		
		if (document.querySelector("#customSwitch1").checked == false) {
			puntosTotal = puntosTotal * 0.9
    }
    
    resultado = Math.round(puntosTotal / kilosTotal)
    
    localStorage.resultado = JSON.stringify(resultado);
   
  return resultado
  
  }