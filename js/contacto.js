document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  let respuesta = document.getElementById("respuesta");

  // Validación básica
  if (nombre === "" || correo === "" || mensaje === "") {
    respuesta.innerHTML = "⚠️ Todos los campos son obligatorios";
    respuesta.style.color = "red";
    return;
  }

  // Validar correo simple
  if (!correo.includes("@") || !correo.includes(".")) {
    respuesta.innerHTML = "⚠️ Correo no válido";
    respuesta.style.color = "red";
    return;
  }

  // Si todo está bien
  respuesta.innerHTML = "✅ Mensaje enviado correctamente";
  respuesta.style.color = "green";

  // Limpiar formulario
  document.getElementById("formulario").reset();
});