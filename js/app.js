// Cargar servicios desde el JSON
fetch('data/servicios.json')
  .then(res => res.json())
  .then(data => {

    let container = document.getElementById('servicios-container');

    // Validar que el contenedor exista (por si estás en otra página)
    if (!container) return;

    // Limpiar por si acaso
    container.innerHTML = "";

    data.forEach(servicio => {
      container.innerHTML += `
        <div class="card">
          <img src="${servicio.imagen}" width="100%">
          <h3>${servicio.nombre}</h3>
          <p>${servicio.descripcion}</p>

          <button onclick="verDetalle(${servicio.id})">Ver más</button>
          <button onclick="agregarFavorito(${servicio.id})">❤️</button>
        </div>
      `;
    });

  })
  .catch(error => {
    console.error("Error cargando servicios:", error);
  });


// 👉 Ir a la página de detalle
function verDetalle(id) {
  localStorage.setItem("servicioId", id);
  window.location.href = "detalle.html";
}


// ❤️ Agregar a favoritos
function agregarFavorito(id) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (!favoritos.includes(id)) {
    favoritos.push(id);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert("🐾 Servicio agregado a favoritos");
  } else {
    alert("⚠️ Ya está en favoritos");
  }
}