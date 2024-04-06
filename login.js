function validarUsuario() {
    var usuario = document.getElementById("usuario").value;
    var nip = document.getElementById("nip").value;

    var usuarioEncontrado = cuentas.find(function (cuenta) {
        return cuenta.usuario === usuario && cuenta.nip === nip;
    });

    if (usuarioEncontrado) {
        localStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));
        window.location.href = "menu.html";
    } else {
        alert("Usuario o NIP incorrectos. Intente nuevamente.");
    }
}