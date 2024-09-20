const apiUrl = 'http://localhost:8000'; // URL de la API

function addFlower() {
    const name = document.getElementById('flowerName').value;
    const count = document.getElementById('flowerCount').value;

    axios.post(`${apiUrl}/flowers`, { name, count })
        .then(response => {
            console.log('Flor agregada:', response.data);
            fetchFlowers(); // Actualizar lista
        })
        .catch(error => console.error('Error al agregar la flor:', error));
}

function fetchFlowers() {
    axios.get(`${apiUrl}/flowers`)
        .then(response => {
            const flowers = response.data;
            const list = document.getElementById('flowerList');
            list.innerHTML = ''; // Limpiar lista anterior
            flowers.forEach(flower => {
                const item = document.createElement('li');
                item.textContent = `Nombre: ${flower.name}, Cantidad: ${flower.count}`;
                list.appendChild(item);
            });
        })
        .catch(error => console.error('Error al obtener flores:', error));
}

// Inicialmente cargar flores
fetchFlowers();