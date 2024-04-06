document.addEventListener("DOMContentLoaded", function () {
    var usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    document.getElementById("nombreUsuario").innerText = usuarioActual.nombre;
});

function consultarSaldo() {
    var usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    var saldoActual = usuarioActual.saldo;
    mostrarResultado("Saldo Actual: $" + saldoActual);
}

function agregarSaldo() {
    var monto = prompt("Ingrese el monto a agregar:");

    if (monto !== null && monto !== "") {
        monto = parseFloat(monto);
        if (!isNaN(monto) && monto > 0) {
            var usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
            var nuevoSaldo = usuarioActual.saldo + monto;
            if (nuevoSaldo > 990) {
                mostrarResultado("No se puede agregar más saldo. El saldo máximo permitido es de $990.");
            } else {
                usuarioActual.saldo = nuevoSaldo;
                localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));
                // si cumbple se cambia el monto
                document.getElementById("nombreUsuario").innerText = usuarioActual.nombre;
                mostrarResultado("Se agregaron $" + monto + ". Nuevo saldo: $" + usuarioActual.saldo);
            }
        } else {
            mostrarResultado("Ingrese un monto válido.");
        }
    }
}

function retirarSaldo() {
    var monto = prompt("Ingrese el monto a retirar:");

    if (monto !== null && monto !== "") {
        monto = parseFloat(monto);
        if (!isNaN(monto) && monto > 0) {
            var usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
            var nuevoSaldo = usuarioActual.saldo - monto;
            if (nuevoSaldo < 10) {
                mostrarResultado("No se puede retirar más saldo. El saldo mínimo permitido es de $10.");
            } else {
                usuarioActual.saldo = nuevoSaldo;
                localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));
                // si cumple se cambia el monto
                document.getElementById("nombreUsuario").innerText = usuarioActual.nombre;
                mostrarResultado("Se retiraron $" + monto + ". Nuevo saldo: $" + usuarioActual.saldo);
            }
        } else {
            mostrarResultado("Ingrese un monto válido.");
        }
    }
}
function cambiarNIP() {
    var nuevoNIP = prompt("Ingrese el nuevo NIP:");

    if (nuevoNIP !== null && nuevoNIP !== "") {
        var usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
        usuarioActual.nip = nuevoNIP;
        localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));
        mostrarResultado("NIP cambiado correctamente.");
    } else {
        mostrarResultado("No se ingresó un nuevo NIP.");
    }
}

function consultarNIP() {
    var usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    var nipActual = usuarioActual.nip;
    mostrarResultado("NIP Actual: " + nipActual);
}

function consultarNIP() {
    var usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    var nipActual = usuarioActual.nip;
    mostrarResultado("NIP Actual: " + nipActual);
}

function salir() {
    localStorage.removeItem("usuarioActual");
    window.location.href = "index.html";
}

function mostrarResultado(mensaje) {
    document.getElementById("resultado").innerText = mensaje;
    document.getElementById("resultado").style.display = "block";
}