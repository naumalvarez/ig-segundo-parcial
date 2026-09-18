let cantidadObras = 0;
let obrasIngresadas = 0;
let obras = [];

function iniciarCarga() {
    let valorCantidad = document.querySelector("#cantidad").value;

    if (valorCantidad === "" || valorCantidad <= 0) {
        document.querySelector("#error-cantidad").innerHTML = "Por favor ingresá una cantidad válida mayor a 0.";
        return;
    }

    cantidadObras = Number(valorCantidad);
    obrasIngresadas = 0;
    obras = [];

    document.querySelector("#error-cantidad").innerHTML = "";
    document.querySelector("#paso-cantidad").classList.add("deshabilitado");

    document.querySelector("#indicador-obra").innerHTML = "Ingresando obra " + (obrasIngresadas + 1) + " de " + cantidadObras;
    document.querySelector("#paso-obra").classList.remove("deshabilitado");
}

function cargarObra() {
    let nombreObra = document.querySelector("#nombre-obra").value;
    let duracion = document.querySelector("#duracion").value;
    let peso = document.querySelector("#peso").value;

    if (nombreObra === "") {
        document.querySelector("#error-obra").innerHTML = "Por favor ingresá el nombre de la obra.";
        return;
    }

    if (duracion === "" || duracion <= 0) {
        document.querySelector("#error-obra").innerHTML = "Por favor ingresá una duración válida mayor a 0.";
        return;
    }

    if (peso === "" || peso <= 0) {
        document.querySelector("#error-obra").innerHTML = "Por favor ingresá un peso válido mayor a 0.";
        return;
    }

    let obraActual = {
        nombre: nombreObra,
        duracion: Number(duracion),
        peso: Number(peso)
    };

    obras.push(obraActual);
    obrasIngresadas++;

    document.querySelector("#error-obra").innerHTML = "";
    document.querySelector("#nombre-obra").value = "";
    document.querySelector("#duracion").value = "";
    document.querySelector("#peso").value = "";

    if (obrasIngresadas === cantidadObras) {
        document.querySelector("#paso-obra").classList.add("deshabilitado");
        document.querySelector("#paso-global").classList.remove("deshabilitado");
    } else {
        document.querySelector("#indicador-obra").innerHTML = "Ingresando obra " + (obrasIngresadas + 1) + " de " + cantidadObras;
    }
}

function calcularResultados() {
    let tiempoTransferencia = document.querySelector("#tiempo-transferencia").value;
    let costoMb = document.querySelector("#costo-mb").value;

    if (tiempoTransferencia === "" || tiempoTransferencia <= 0) {
        document.querySelector("#error-global").innerHTML = "Por favor ingresá un tiempo de transferencia válido mayor a 0.";
        return;
    }

    if (costoMb === "" || costoMb <= 0) {
        document.querySelector("#error-global").innerHTML = "Por favor ingresá un costo mensual válido mayor a 0.";
        return;
    }

    tiempoTransferencia = Number(tiempoTransferencia);
    costoMb = Number(costoMb);

    let duracionTotal = 0;
    let pesoTotal = 0;
    let obraMayorDuracion = obras[0];

    for (let i = 0; i < obras.length; i++) {
        duracionTotal += obras[i].duracion;
        pesoTotal += obras[i].peso;

        if (obras[i].duracion > obraMayorDuracion.duracion) {
            obraMayorDuracion = obras[i];
        }
    }

    let duracionPromedio = duracionTotal / cantidadObras;
    let tiempoDescarga = obraMayorDuracion.peso * tiempoTransferencia;
    let presupuestoAnual = pesoTotal * costoMb * 12;

    document.querySelector("#error-global").innerHTML = "";
    document.querySelector("#paso-global").classList.add("deshabilitado");

    document.querySelector("#contenido-resultados").innerHTML =
        `<p>Duración total de todas las obras: <strong>${duracionTotal.toFixed(2)} minutos</strong></p>
        <p>Duración promedio: <strong>${duracionPromedio.toFixed(2)} minutos</strong></p>
        <p>Obra de mayor duración: <strong>${obraMayorDuracion.nombre}</strong> con ${obraMayorDuracion.duracion} minutos</p>
        <p>Tiempo de transferencia para descargarla: <strong>${tiempoDescarga.toFixed(2)} ms</strong></p>
        <p>Presupuesto anual del repositorio: <strong>$${presupuestoAnual.toFixed(2)}</strong></p>`;

    document.querySelector("#resultados").classList.remove("deshabilitado");
}

function reiniciar() {
    cantidadObras = 0;
    obrasIngresadas = 0;
    obras = [];

    document.querySelector("#cantidad").value = "";
    document.querySelector("#nombre-obra").value = "";
    document.querySelector("#duracion").value = "";
    document.querySelector("#peso").value = "";
    document.querySelector("#tiempo-transferencia").value = "";
    document.querySelector("#costo-mb").value = "";

    document.querySelector("#error-cantidad").innerHTML = "";
    document.querySelector("#error-obra").innerHTML = "";
    document.querySelector("#error-global").innerHTML = "";
    document.querySelector("#contenido-resultados").innerHTML = "";

    document.querySelector("#paso-cantidad").classList.remove("deshabilitado");
    document.querySelector("#paso-obra").classList.add("deshabilitado");
    document.querySelector("#paso-global").classList.add("deshabilitado");
    document.querySelector("#resultados").classList.add("deshabilitado");
}
