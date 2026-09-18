let datosCuriosos = [
    "Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en el arte contemporáneo.",
    "Su tema O Superman llegó al segundo puesto en los rankings del Reino Unido en 1981.",
    "Diseñó su propio violín eléctrico que le permitía activar efectos digitales mientras tocaba.",
    "En 2002 fue nombrada la primera artista residente de la NASA.",
    "Su instalación Chalkroom recibió el premio a mejor experiencia inmersiva en el Festival de Cine de Venecia en 2017.",
    "Utiliza su propia voz alterada digitalmente como herramienta narrativa en muchas de sus obras.",
    "Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013.",
    "Sus obras mezclan lo personal, lo político y lo ficticio en narraciones fragmentadas.",
    "Su trabajo investiga cómo la tecnología puede influir en la creación y percepción artística.",
    "Sigue siendo una figura activa en el arte digital y ha experimentado con inteligencia artificial."
];

function mostrarDato() {
    let indice = Math.floor(Math.random() * datosCuriosos.length);
    document.querySelector("#dato-curioso").innerHTML = datosCuriosos[indice];
}

mostrarDato();
