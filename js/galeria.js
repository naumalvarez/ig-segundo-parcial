let obras = [
    {
        nombre: "O Superman",
        anio: 1981,
        imagen: "img/anderson.jpg"
    },
    {
        nombre: "Big Science",
        anio: 1982,
        imagen: "img/anderson-1.jpg"
    },
    {
        nombre: "United States Live",
        anio: 1984,
        imagen: "img/anderson-2.jpg"
    },
    {
        nombre: "Strange Angels",
        anio: 1989,
        imagen: "img/anderson-3.jpg"
    },
    {
        nombre: "Chalkroom",
        anio: 2017,
        imagen: "img/anderson.jpg"
    }
];

let tamanoActual = "img-grande";

function generarGaleria() {
    let contenido = "";

    obras.forEach(function(obra) {
        contenido += `<div class="tarjeta-obra ${tamanoActual}">
            <img src="${obra.imagen}" alt="${obra.nombre}">
            <h3>${obra.nombre}</h3>
            <p>${obra.anio}</p>
        </div>`;
    });

    document.querySelector("#galeria").innerHTML = contenido;
}

function cambiarTamano(tamano) {
    tamanoActual = "img-" + tamano;
    generarGaleria();
}

generarGaleria();
