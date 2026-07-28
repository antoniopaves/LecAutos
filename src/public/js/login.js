const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    const respuesta = await fetch("/auth/login",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            correo,
            password
        })

    });

    const data = await respuesta.json();

    if(data.ok){

        document.getElementById("mensaje").innerHTML="Bienvenido";

        window.location="/autos";

    }else{

        document.getElementById("mensaje").innerHTML=data.mensaje;

    }

});
