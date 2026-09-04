const listaUsuarios = [
    {   
        id: 1,
        nombre: "Nicolas Perez",
        username: "nico@duoc.cl", 
        password: "nico1234",
        telefono: "917111111",
        generos: ["FICCION", "TERROR"]
    },
    
    {   
        id: 2,
        nombre: "Juan Lopez",
        username: "juan@duoc.cl",
        password: "aa123",
        telefono: "913131313",
        generos: ["MISTERIO"]
        
    },
    {
        id: 3,
        nombre: "Felipe Moya",
        username: "felipe@duoc.cl", 
        password: "moya67",
        telefono: "",
        generos: ["SUSPENSO", "HISTORIA"]
    }
]



const formLogin = document.getElementById("cuerpo-login");

if (formLogin){
    formLogin.addEventListener("submit", function(event){

 

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
}   


const btnRegisterUser = document.getElementById("btnRegisterUser")
if(btnRegisterUser){
    btnRegisterUser.addEventListener("click", function(event){
        
        window.location.href = "registro.html";
    
    });
}

const formRegistro = document.querySelector(".cuerpo-login");

if(formRegistro && !formLogin) {
    formRegistro.addEventListener("submit", function(event){
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const username = document.getElementById("username").value.trim().toLowerCase();
        const mailConfirmation = document.getElementById("mail-confirmation").value.trim().toLowerCase();
        const password = document.getElementById("password").value;
        const passwordConfirmation = document.getElementById("password-confirmation").value;
        const phone = document.getElementById("phone").value.trim();
    
        const checkboxes = document.querySelectorAll('.boxes input[type="checkbox"]:checked');
        let generosSeleccionados = [];
        checkboxes.forEach(function(cb){
            generosSeleccionados.push(cb.value);
        });

        let errores = [];

        if(nombre === "") {
            errores.push("El nombre completo no puede estar vacio.");
        } else if (nombre.length > 100) {
            errores.push("El nombre no puede superar los 100 caracteres");
        }

        if(username === ""){
            errores.push("El correo electronico no puede estar vacio")
        } else if (!username.endsWith("@duoc.cl")){
            errores.push("El correo debe terminar en @duoc.cl");
        } else if (username.length > 60) {
            errores.push("El correo no puede tener más de 60 caracteres.")
        } else {
            const existeCorreo = listaUsuarios.some(function(user){
                return user.username === username;
            });
            if(existeCorreo){
                errores.push("Este correo ya se encuentra regitrado en el sistema.")
            }
        }

        if(username !== mailConfirmation){
            errores.push("La confirmacion del correo no coincide")
        }

        let mayusculas = 0;
        let tieneMinuscula = false;
        let tieneNumero = false;
        let tieneEspecial = false;

        const caracteresEspeciales = "@#$%&+=!._*";
        const numeros = "0123456789";

        for (let i = 0; i < password.length; i++) {
            let char = password[i];

            if (char >= 'A' && char <= 'Z'){
                mayusculas++;
            } else if (char >= 'a' && char <= 'z'){
                tieneMinuscula = true;
            } else if (numeros.includes(char)){
                tieneNumero = true;
            } else if (caracteresEspeciales.includes(char)) {
                tieneEspecial = true;
            }
        }    
            if (password.length < 10){
                errores.push("La contraseña debe tener un minimo de 10 caracteres.");
            }

            if (mayusculas < 2){
                errores.push("La contraseña debe incluir al menos dos letras MAYUSCULAS.");
            }

            if(!tieneMinuscula){
                errores.push("La contraseña debe incluir al menos una letra minuscula.");
            }

            if(!tieneNumero){
                errores.push("La contraseña debe incluir al menos un número");
            }

            if(!tieneEspecial){
                errores.push("La contraseña debe incluir al menos un caracter especial");
            }

            if(password !== passwordConfirmation){
                errores.push("La confirmación de la contraseña no coincide.");
            }

            if(phone !== ""){
                if(phone.length < 8 || phone.length > 12){
                    errores.push("El teléfono debe tener entre 8 y 12 digitos.");
                }
            }

            if(generosSeleccionados.length === 0){
                errores.push("Debe seleccionar al menos un género favorito.");
            }

            if(errores.length > 0){
                alert("Por favor corrige los siguientes errores: \n\n- " + errores.join("\n- "));
            } else {
                const nuevoUsuario = {
                    id: listaUsuarios.length + 1,
                    nombre: nombre,
                    username: username,
                    password: password,
                    telefono: phone || "No especificado",
                    generos: generosSeleccionados
                };
                
                listaUsuarios.push(nuevoUsuario);

                console.log("Usuario registrado con exito.");
                console.log("Lista actualizada: ", listaUsuarios);

                alert("Registro exitoso Usuario guardado.");
                formRegistro.reset();
            }








        



    })
}