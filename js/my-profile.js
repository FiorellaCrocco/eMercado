//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
 

/* const nombreInput = document.getElementById("name")
const edadInput = document.getElementById("age")
const CLAVE_USUARIO = username;

function recuperarDatos(key){
  return localStorage.getItem(key);
}
const usuario = document.getElementById("name")

function guardarDatos(){
  let nombre = nombreInput.value
  let edad = edad.value

  let usuario = {
    nombre: nombre,
    edad: edad
  }
  let user = JSON.stringify(usuario);
  localStorage.setItem(CLAVE_USUARIO,user);
}
*/
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
/*  usuario.innerHTML= userform;
 edad.innerHTML=edadform;
 email.innerHTML=emailform;
 tel.innerHTML=telform;  */
  
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
  
  /*   let user = recuperarDatos(CLAVE_USUARIO);
  
    if(user!=null){
      user = JSON.parse(user);
      usuario.value = user.name;
    } */
/*
function guardarDatos(){
  nombre = nombreform.value;
  edad = edadform.value;
  email = emailform.value;
  tel = telform.value;

  let usuario = {
    nombre: nombre,
    edad: edad,
    email: email,
    tel: tel
  }
  let user = JSON.stringify(usuario);
  localStorage.setItem(CLAVE_USUARIO.user);
} */


/* function form(){
let usuario = JSON.parse(localStorage.getItem('Usuario'));
let userform = JSON.parse(localStorage.getItem('name'));
let edadform = JSON.parse(localStorage.getItem('age'));
let emailform = JSON.parse(localStorage.getItem('email'));
let telform = JSON.parse(localStorage.getItem('tel'));  

 if(username !== ""){
  userform.innerHTML= usuario;
  edadform.innerHTML=edad;
  emailform.innerHTML=email;
  telform.innerHTML=tel; 
 }  */

/*}*/

  /*   let user = recuperarDatos(CLAVE_USUARIO);
  console.log('user:',user)
  if (user != null){
    let user = JSON.parse(user);
    nombreform.value = user.nombre;
    edadform.value = user.edad;
    emailform.value = user.email;
    telform.value = user.tel
  } */
