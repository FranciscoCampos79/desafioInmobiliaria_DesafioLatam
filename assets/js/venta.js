const propiedadesEnVenta = [
    {src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    tipo: "Apartamento de lujo en zona exclusiva",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: " 123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: " 4 habitaciones",
    baños: " 4 baños",
    valor: " 5.000",
    fumar: false,
    mascotas: false},

    {src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    tipo: "Apartamento acogedor en la montaña",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: " 789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: " 2 habitaciones",
    baños: " 1 baños",
    valor: " 1.200",
    fumar: true,
    mascotas: true},

    {src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    tipo: "Penthouse de lujo con terraza panorámica",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    direccion: " 567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: " 3 habitaciones",
    baños: " 3 baños",
    valor: " 4.500",
    fumar: false,
    mascotas: true},

    {src: "https://casepractice.ro/wp-content/uploads/2016/09/case-din-cob-cob-house-design-ideas-2-1-610x404.jpg",
    tipo: "Ecologica casa auto-sustentable",
    descripcion: "Impresionante casa autosustentable con energia solar y eolica",
    direccion: " 123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: " 5 habitaciones",
    baños: " 3 baños",
    valor: " 5.000",
    fumar: false,
    mascotas: true},
]

let html = "";

for (let enVenta of propiedadesEnVenta) {
    html += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${enVenta.src}" class="card-img-top" alt="Imagen del departamento"/>
            <div class="card-body">
                <h5 class="card-title">${enVenta.tipo}</h5>
                <p class="card-text">${enVenta.descripcion} </p>
                <p>
                <i class="fas fa-map-marker-alt"></i>${enVenta.direccion} </p>
                <p>
                <i class="fas fa-bed"></i>${enVenta.habitaciones} |
                <i class="fas fa-bath"></i>${enVenta.baños}</p>
                <p><i class="fas fa-dollar-sign"></i>${enVenta.valor} </p>

                ${enVenta.fumar ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
                ${enVenta.mascotas ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}


            </div>
        </div>
    </div>
    `
}

const ventas = document.querySelector("#enVentas");
ventas.innerHTML = html;