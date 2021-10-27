//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

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

document.addEventListener("DOMContentLoaded", function (e) {

});