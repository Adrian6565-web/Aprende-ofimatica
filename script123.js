function entrarB() {
    const nombre = document.getElementById("nombreB").value.trim();
    const alerta = document.getElementById("alertaB");

    if (nombre.length < 3) {
        alerta.textContent = "⚠️ Ingresa un nombre válido";
        return;
    }

    document.getElementById("entrada").style.display = "none";
    document.getElementById("contenidoB").style.display = "block";
    document.getElementById("saludoB").textContent =
        "Hola, " + nombre + " Bienvenido";
}

function mostrarB(id) {
    const secciones = document.querySelectorAll(".seccionB");
    secciones.forEach(sec => sec.style.display = "none");
    document.getElementById(id).style.display = "block";
}

