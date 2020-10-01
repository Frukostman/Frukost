
//espacio para verduras
const espacioCards = document.querySelector("#cajonFrutas");
//espacio para lista
const listita = document.querySelector("#carrito");
//espacio resultado
const resultadoTotal = document.querySelector("#resultadoFinal")

//  CREAR CARDS  //

function mostrarVerduras() {
  productos.forEach((producto) => {
    let cardProducto = document.createElement("div");

    cardProducto.className = "producto";
    cardProducto.innerHTML = `<h2 style="color: black;">${producto.nombre}</h2><img class:"foto-verdura" src=${producto.img} alt="${producto.nombre}"><button class="btn btn-primary" onclick="agregarACarrito(${productos.indexOf(producto)})">Agregar 1 kg</button>`;

    cajonFrutas.appendChild(cardProducto);
  });
}
mostrarVerduras()

// Compras en carrito  //

const carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];

function inputChange(e) {
  if (e.target.value == 0) {
    carrito.splice(e.target.name, 1);
  } else {
    carrito[e.target.name].cantidad = e.target.value;
  }
  loadCarrito();
  localStorage.carrito = JSON.stringify(carrito);
}

loadCarrito();

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
  

  if (carrito.length > 0) {
    var sumador = 0;
    carrito.forEach((producto) => {
      let divCar = document.createElement("div");
      divCar.classList = "list-group-item d-flex justify-content-between align-items-center class-kilo"
      divCar.style = "clear:both; style:margin: 5px 0 0 0";
      divCar.innerHTML = `<p>${producto.nombre} <span class="badge badge-primary badge-pill" >${producto.cantidad} kg</span> </p>
      <button style="float:right" onclick="removerCarrito(${carrito.indexOf(producto)})">x</button>`;
      listita.appendChild(divCar);
      sumador = sumador + producto.cantidad;
    });
  }
}

// sacar items del carrito

function removerCarrito(index) {
  carrito[index].cantidad = 0;
  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }
  localStorage.carrito = JSON.stringify(carrito);
  loadCarrito();
}

// Averiguar si son productos organicos

const organico = document.querySelector("input[name='tipoVerdura']:checked").value;


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

// Seleccion PROVINCIA

function cargarProvincias() {
  const provinciaUsuario = document.querySelector("#provincia");
  
  arrayProvincias.forEach(element => {
    let option = document.createElement("option")
    option.textContent = [element]
    option.style = ["background-color: white;"]
    option.value = 1
    provinciaUsuario.appendChild(option)

  });

  const mostrarProv = document.querySelector("#selectProvincia")
  
  mostrarProv.addEventListener("change", mostrarFinal)
  
  
}


cargarProvincias()

// Hacer aparecer el boton Calcular

function mostrarFinal() {

  var lugarCalcular = document.querySelector("#espacioCalcular");
  var paso4 = document.createElement("h4");
  var botonCalcular = document.createElement("button");

  // vacia boton caluclar cuando cambio de prov
  lugarCalcular.innerHTML = ""

  // inserta provincia
  paso4.style.textAlign = "left"
  paso4.classList = "pasoCuatro"
  paso4.innerHTML = "<b>Paso 4:</b>"

  botonCalcular.classList = ("btn btn-success btn-block boton-calcular animate__animated animate__pulse")
  botonCalcular.innerText = "Calcular!"

  lugarCalcular.appendChild(paso4)
  lugarCalcular.appendChild(botonCalcular)

  botonCalcular.addEventListener("click", mostrarResultado)
  botonCalcular.addEventListener("click", mostrarAlert)
 
  function mostrarResultado() {

      var lugarResultado = document.querySelector("#explicacion")
      
      var explicacion = document.createElement("div");
      
      explicacion.innerHTML = '<hr><h2 style="color: black;"><b>Tu resultado es:</b></h2><h1 style="color: crimson;"> <span id="resultadoFinal">pendiente</span>%</h1><a href="explicacion.html"><button class="btn btn-outline-info boton-mas-info mb-5 animate__animated animate__pulse">¿Que significa este numero?</button></a>';
      
      lugarResultado.appendChild(explicacion)
  }

  function mostrarAlert() {
    swal("El calculo todavia esta pendiente...");
  }
}
// Mostrar carrito en explicacion

//const espacioCarritoFinal = document.querySelector("#muestraCarrito");
//
//var itemCarritoFinal = document.createElement("p")
//
//itemCarritoFinal.innerHTML = "hola";
//itemCarritoFinal.classList = "listaFinal";
//
//espacioCarritoFinal.appendChild(itemCarritoFinal);
//
//
//function llenarCarritoFinal() {
//  var itemListita = JSON.parse(localStorage.carrito)
//
//  console.log(itemListita)
//}

                          





