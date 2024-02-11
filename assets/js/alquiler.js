const propiedadesEnAlquiler = [
    {src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    tipo: "Apartamento en el centro de la ciudad",
    descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: " 123 Main Street, Anytown, CA 91234",
    habitaciones: " 2 habitaciones",
    baños: " 2 baños",
    valor: " 2.000",
    fumar: false,
    mascotas: true},

    {src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tipo: "Apartamento luminoso con vista al mar",
    descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
    direccion: " 456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: " 3 habitaciones",
    baños: " 3 baños",
    valor: " 2.500",
    fumar: true,
    mascotas: true},

    {src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    tipo: "Condominio moderno en zona residencial",
    descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    direccion: " 123 Main Street, Anytown, CA 91234",
    habitaciones: " 2 habitaciones",
    baños: " 2 baños",
    valor: " 2,200",
    fumar: false,
    mascotas: false},

    {src: "https://th.bing.com/th/id/OIP.MsArlNZzN0iW12cHJkzS4AHaEs?rs=1&pid=ImgDetMain",
    tipo: "Hermosa casita ecologica",
    descripcion: "Casa ecologica de super-adobe en medio de la naturaleza",
    direccion: " 123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: " 2 habitaciones",
    baños: " 1 baños",
    valor: " 1.000",
    fumar: false,
    mascotas: false}
]

let html = "";

for (let enAlquiler of propiedadesEnAlquiler) {
    html += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${enAlquiler.src}" class="card-img-top" alt="Imagen del departamento"/>
            <div class="card-body">
                <h5 class="card-title">${enAlquiler.tipo}</h5>
                <p class="card-text">${enAlquiler.descripcion} </p>
                <p>
                <i class="fas fa-map-marker-alt"></i>${enAlquiler.direccion} </p>
                <p>
                <i class="fas fa-bed"></i>${enAlquiler.habitaciones} |
                <i class="fas fa-bath"></i>${enAlquiler.baños}</p>
                <p><i class="fas fa-dollar-sign"></i>${enAlquiler.valor} </p>

                ${enAlquiler.fumar ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
                ${enAlquiler.mascotas ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}
            </div>
        </div>
    </div>
    `
}

const alquiler = document.querySelector("#alquiler");
alquiler.innerHTML = html;