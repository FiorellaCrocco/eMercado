let productosCarrito = [];

/*completa la función para actualizar el subtotal del producto al modificar la cantidad del mismo*/
function updateProductoSubtotal() {
    getCarrito(CART_INFO_URL)
        .then(respuesta => {
            productosCarrito = respuesta.articles;
            for (let i = 0; i < productosCarrito.length; i++) {
                let cantidad = document.getElementById(`cantidad${i}`).value;
                let costo = productosCarrito[i].unitCost;

                let subtotal = cantidad * costo;
                console.log(subtotal);
                document.getElementById(`subtotaldinamico${i}`).innerText = subtotal;
            }

            update();

        })

}

function update() {
    let suma = 0;
    for (let j = 0; j < productosCarrito.length; j++) {

        suma += parseInt(document.getElementById(`subtotaldinamico${j}`).innerText);

    }

    document.getElementById("totalproductos").innerText = "UYU " + suma;
}


/*modificar la función showCarrito para que aparezca el subtotal del producto en base a la cantidad y precio unitario*/
function showCarrito() {

    /*mostrar los productos del carrito con el input correspondiente a la cantidad*/
    let htmlToAppend = "";
    let i = 0;
    for (let article of productosCarrito) {

        htmlToAppend += `
        <tr>
        <td><img src="${article.src}" class = "img-fluid" style ="max-width:50px!important"></td>
        <td class="align-middle">${article.name}</td>
        <td class="align-middle">${article.currency} ${article.unitCost}</td>
        <td class="align-middle"><input id="cantidad${i}" type="number" min ="1" value=${article.count} onChange="updateProductoSubtotal()"></td>
        <td class="align-middle" id="subtotaldinamico${i}">${article.unitCost * article.count}</td>
        </tr>`;

        i++;
    }
    htmlToAppend += `
        <tr>
        <td></td>
        <td class="align-middle font-weight-bold">Total del carrito</td>
        <td class="align-middle"></td>
        <td class="align-middle"></td>
        <td class="align-middle font-weight-bold" id="totalproductos"></td>
        </tr>`;


    document.getElementById("carrito").innerHTML = htmlToAppend;
}



function getCarrito(url) {

    return fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })

}

document.getElementById("comprar").addEventListener("click", function () {
    let htmlToAppend = "";

    let pais = document.getElementById("pais").value;
    let calle = document.getElementById("calle").value;
    let num = document.getElementById("num").value;
    let esq = document.getElementById("esq").value;

    if(pais === "" || calle === "" || num === "" || esq === ""){
        htmlToAppend += `
        <div class="alert alert-danger" role="alert">
            <h5 class="alert-heading">Estado de su compra..</h5>
            <hr>
            <p class="mb-0">Hubo un problema con su compra. Verifique que estén todos los datos ingresados correctamente.</p>
        </div>
        `
        document.getElementById("mod").innerHTML = htmlToAppend;
    } else {

        htmlToAppend += `
        <div class="alert alert-success" role="alert">
            <h5 class="alert-heading">Estado de su compra..</h5>
            <hr>
            <p class="mb-0">Su compra ha sido realizada con éxito!</p>
        </div>
        `

        document.getElementById("mod").innerHTML = htmlToAppend;
    } 


/*     htmlToAppend += `
    <div class="alert alert-success" role="alert">
        <h5 class="alert-heading">Estado de su compra..</h5>
        <hr>
        <p class="mb-0">Su compra fue realizada con éxito!</p>
    </div>
    `

    document.getElementById("mod").innerHTML = htmlToAppend; */
});

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getCarrito(CART_INFO_URL)
        .then(respuesta => {
            productosCarrito = respuesta.articles;
            showCarrito();
            console.log(productosCarrito);
            update()
        })
});

