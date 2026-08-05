const formulario = document.querySelector("#formBuscar");

const input = document.querySelector("#buscarAuto");


formulario?.addEventListener("submit", async (e) => {

    e.preventDefault();


    const texto = input.value;


    const respuesta = await fetch(
        `/autos/buscar-api?texto=${texto}`
    );


    const data = await respuesta.json();

    console.log(data);
    mostrarAutos(data.autos, data.usuario);


});


function mostrarAutos(autos, usuario) {


    const contenedor = document.querySelector("#contenedorAutos");


    if (!contenedor) return;



    contenedor.innerHTML = "";



    autos.forEach(auto => {


        contenedor.innerHTML += `

        <div class="col-12 col-sm-6 col-lg-4">


            <div class="card h-100 shadow-sm">


                <img 
                src="/public/img/Preview/${auto.IMG_AUTO}"
                class="card-img-top"
                style="height:200px;object-fit:cover;">



               <div class="card-body d-flex flex-column">


    <h5>
        ${auto.MARCA_AUTO}
        ${auto.NOMBRE_AUTO}
        ${auto.ANIO_AUTO}
    </h5>


    <strong>
        $${Number(auto.PRECIO_AUTO)
                .toLocaleString("es-CL")}
    </strong>


    <p>

        <span class="badge text-bg-secondary">
            ${auto.ESTADO_AUTO}
        </span>

    </p>


    ${usuario
                ?
                `
    <a 
    href="/autos/cotizar/${auto.ID_AUTO}"
    class="btn btn-primary">

    Cotizar

    </a>
    `
                :
                `
    <a 
    href="/auth"
    class="btn btn-warning">

    Iniciar sesión para comprar

    </a>
    `
            }


</div>


            </div>


        </div>

        `;


    });


}