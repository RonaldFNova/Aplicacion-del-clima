let urlGenerica = "https://api.openweathermap.org/data/2.5/weather?q=";
let apiKey = "e6fc7ed3e72b724a549659486593acbe";
let celcius = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () =>{

    const ciudad =  document.getElementById("ciudadEntrada").value;
    MostrarCiudad(ciudad);
})

function MostrarCiudad(ciudad){

    fetch(urlGenerica + ciudad +'&appid='+ apiKey)
    .then(datos => datos.json())
    .then(datos => AgregarCiudad(datos))
}

function AgregarCiudad(datos){

    console.log(datos);

    const inputElement = document.getElementById("datosClima");
    inputElement.innerHTML = "";

    const lugarElement = document.createElement("h2");
    const temperaturaElement = document.createElement("p");
    const humedadElement = document.createElement("p");
    const sensacionElement = document.createElement("p");
    const descripcionElement = document.createElement("p");

    lugarElement.textContent = datos.name + ", " + datos.sys.country;
    temperaturaElement.textContent = "La temperatura es: " +  Math.trunc(datos.main.temp - celcius) + " Grados";
    humedadElement.textContent = "La humedad de la ciudad es de: " + datos.main.humidity;
    sensacionElement.textContent = "La sensacion termica es de: " + Math.trunc(datos.main.feels_like-celcius) + " Grados";
    descripcionElement.textContent = datos.weather[0].description;

    inputElement.appendChild(lugarElement);
    inputElement.appendChild(temperaturaElement);
    inputElement.appendChild(humedadElement);
    inputElement.appendChild(sensacionElement);
    inputElement.appendChild(descripcionElement);
}


