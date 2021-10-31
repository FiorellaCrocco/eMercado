
const nombreform = document.getElementById("name");
const edadform = document.getElementById("age");
const emailform = document.getElementById("email");
const telform = document.getElementById("tel");

document.addEventListener("DOMContentLoaded", function (e) {  
  let nombre = localStorage.getItem('Usuario')
  let nombreUsuario = JSON.parse(nombre);
  let edad = localStorage.getItem('Edad')
  let edadUsuario = JSON.parse(edad);
  let email = localStorage.getItem('Email')
  let emailUsuario = JSON.parse(email);
  let tel = localStorage.getItem('Tel')
  let telUsuario = JSON.parse(tel);

  if(nombreUsuario){
    nombreform.value=nombreUsuario
    /* console.log(nombreUsuario) */
  }
  if(edadUsuario){
    edadform.value=edadUsuario
  }
  if(emailUsuario){
    emailform.value=emailUsuario
  }
  if(telUsuario){
   telform.value=telUsuario
  }

});

  
  function guardar(){
    let usuario = document.getElementById("name").value;
    let edad = document.getElementById("age").value
    let email = document.getElementById("email").value
    let tel = document.getElementById("tel").value
    
    if(usuario === "" || edad === "" || email === "" || tel === ""){
      alert("Complete todos los datos");
    }else{
      localStorage.setItem('Usuario',JSON.stringify(usuario)); /*agregado*/   
      localStorage.setItem('Edad',JSON.stringify(edad));
      localStorage.setItem('Email',JSON.stringify(email));
      localStorage.setItem('Tel',JSON.stringify(tel));
    }
  }  
  