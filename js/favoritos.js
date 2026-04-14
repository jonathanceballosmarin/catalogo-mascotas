// Obtener favoritos del localStorage
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

let container = document.getElementById("favoritos-container");

// Si no hay favoritos
if (favoritos.length === 0) {
  container.innerHTML = "<p>No tienes servicios favoritos 🐾</p>";
}

// Cargar servicios
fetch('data/servicios.json')
  .then(res => res.json())
  .then(data => {

    // Filtrar solo los favoritos
    let serviciosFavoritos = data.filter(servicio =>
      favoritos.includes(servicio.id)
    );

    serviciosFavoritos.forEach(servicio => {
      container.innerHTML += `
        <div class="card">
          <img src="${servicio.imagen}" width="100%">
          <h3>${servicio.nombre}</h3>
          <p>${servicio.descripcion}</p>

          <button onclick="verDetalle(${servicio.id})">Ver más</button>
          <button onclick="eliminarFavorito(${servicio.id})">❌ Eliminar</button>
        </div>
      `;
    });

  });


// Ir a detalle
function verDetalle(id) {
  localStorage.setItem("servicioId", id);
  window.location.href = "detalle.html";
}


// Eliminar favorito
function eliminarFavorito(id) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  favoritos = favoritos.filter(f => f !== id);

  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  alert("Eliminado de favoritos");

  // Recargar página
  location.reload();
}