const listaUsuarios = [
    {id: 1, username: "nico@gmail.com", password: "nico1234"},
    {id: 2, username: "juan@gmail.com", password: "aa123"},
    {id: 3, username: "felipe@gmail.com", password: "moya67"}

]



document.getElementById("cuerpo-login").addEventListener("submit", function(event){
    event.preventDefault();

    const inputUser = document.getElementById("username").value;
    const inputPass = document.getElementById("password").value;

   const usuarioEncontrado = listaUsuarios.find(function(user){
    return user.username === inputUser && user.password === inputPass;
   });

    if(usuarioEncontrado){
        console.log("Inicio de Sesion exitosa");
        console.log("ID del usuario registrado:", usuarioEncontrado.id);
        alert("Bienvenido a GameZone, " + usuarioEncontrado.username);
        window.location.href = "home.html"
    } else {
        console.log("Datos ingresados incorrectos.")
        alert("Usuario o contraseña incorrectos");
    }
});


document.getElementById("btnRegisterUser").addEventListener("click", function(){
    window.location.href = "registro.html"
    
});