//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
/* document.addEventListener("DOMContentLoaded", function(e){
/* }); */

/*
const userName = document.getElementById('username');
const userPassword = document.getElementById('password');
const buttonButton = document.getElementById('submit');

buttonButton.addEventListener('click', evento =>{
    evento.preventDefault();

    let user = userName.value;
    let password = userPassword.value;

    if (userName.length >= 6 && userName.length <= 8 && userPassword.length >= 6 && userPassword.length <= 8) {
        alert('Bienvenido!');
        

        location.href = 'home.html'
    }else{
        alert('El usuario y la contraseña deben estar entre 6 y 8 caracteres de largo');
        DocumentTimeline.getElementById('loguearse');
    }
    
})
*/
/* const user = document.getElementById("username");
const password = document.getElementById("pwd");  */

/*function validar(){
      /* problema con las condiciones */ 
      /* if(usuario.length>6 && usuario.length<8){
        window.location.href = "home.html"; 
     } else { 
        
      alert('El usuario y la cotraseña deben tener entre 6 y 8 caracteres de largo'); }*/
      /*let user = document.getElementById('username').value;
      let password = document.getElementById('pwd').value;
      
      if(user.length >= 6 && user.length <= 8 && password.length >= 6 && password.length <= 8){
        alert('Acceso correcto!');

        clearHeaderLocation('/home.html');
    }else{
        alert('Usuario y contraseña deben estar entre 6 y 8 caracteres de largo');
    }
    } */ 
/*
const userName = document.getElementById('username');
const userPassword = document.getElementById('password');
const buttonButton = document.getElementById('button');

buttonButton.addEventListener('click', evento =>{
    evento.preventDefault();

    let user = userName.value;
    let password = userPassword.value;
    
    if(user.length >= 6 && user.length <= 8 && password.length >= 6 && password.length <= 8){
        alert('Acceso correcto!');

        clearHeaderLocation('/home.html');
    }else{
        alert('Usuario y contraseña deben estar entre 6 y 8 caracteres de largo');
    }
});
*/

/*
function clearHeaderLocation(url){
    window.location.href = url;
}*/

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