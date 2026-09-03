document.getElementById("cuerpo-login").addEventListener("submit", function(event){
    event.preventDefault();

    const inputUser = document.getElementById("username").value;
    const inputPass = document.getElementById("password").value;

    const personaELement = document.querySelector(".persona");
    const id = personaELement.dataset.id;
    const correctUser = personaELement.dataset.username;
    const correctPass = personaELement.dataset.password;

    if(inputUser === correctUser && inputPass === correctPass){
        console.log("Inicio de Sesion exitosa");
        console.log("ID del usuario registrado:", id);
        alert("Bienvenido a GameZone");
    } else {
        console.log("Datos ingresados incorrectos.")
        alert("Usuario o contraseña incorrectos");
    }
});