//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
/* document.addEventListener("DOMContentLoaded", function(e){
/* }); */


function enviar(){
    let usuario = document.getElementById("username").value;
    let contraseña = document.getElementById("password").value

    if((usuario === "" || contraseña === "" || (usuario === "" && contraseña === "")) || usuario.length < 6 || usuario.length > 8 || contraseña.length < 6 || contraseña.length > 8){
        alert("Verifique que los datos hayan sido ingresados correctamente");
        document.getElementById('formulario-login');
    }else{
        window.location.href = "home.html";
    }
}