let productosCarrito = [];

const USD_valor = 40;
const articulos = productosCarrito.unitCost



/*completa la función para actualizar el subtotal del producto al modificar la cantidad del mismo*/
function updateProductoSubtotal() {
    getCarrito(CART)
        .then(respuesta => {
            productosCarrito = respuesta.articles;
            for (let i = 0; i < productosCarrito.length; i++) {
                let cantidad = document.getElementById(`cantidad${i}`).value;

                let usd = (productosCarrito[i].unitCost) * cantidad;

                if (productosCarrito[i].currency == "UYU") {
                    usd = usd / USD_valor;
                }

                document.getElementById(`subtotaldinamico${i}`).innerText = usd;

            }

            update();

        })

}


function update() {
    let suma = 0;
    for (let j = 0; j < productosCarrito.length; j++) {

        suma += parseInt(document.getElementById(`subtotaldinamico${j}`).innerText);

    }

    document.getElementById("totalproductos").innerText = "USD " + suma;
}




function calcularTotalCarrito(porcentaje) {
    let sum = 0;
    let total_porcentaje = 0;
    let total = 0;

    for (let f = 0; f < productosCarrito.length; f++) {

        sum += parseInt(document.getElementById(`subtotaldinamico${f}`).innerText);
        total_porcentaje += parseInt(sum * porcentaje);
        total += parseInt(sum + total_porcentaje);

    }
    console.log("sum " + sum);
    console.log("porcentaje " + porcentaje);
    console.log("total del porcentaje " + total_porcentaje);
    console.log("total final " + total);

    document.getElementById("totalCostText").innerHTML = total;

}

/*modificar la función showCarrito para que aparezca el subtotal del producto en base a la cantidad y precio unitario*/
function showCarrito() {

    /*mostrar los productos del carrito con el input correspondiente a la cantidad*/
    let htmlToAppend = "";
    let i = 0;


    for (let article of productosCarrito) {

        let articles = article.currency == "UYU" ? article.unitCost / USD_valor + " USD" : article.unitCost + " USD";
        let sub = 0;
        let usd = article.currency == "USD" ? article.unitCost : sub;


        if (article.currency == "UYU") {
            sub += (article.unitCost / USD_valor) * article.count;
        }


        htmlToAppend += `
        <tr>
        <td><img src="${article.src}" class = "img-fluid" style ="max-width:50px!important"></td>
        <td class="align-middle">${article.name}</td>
        <td class="align-middle">${articles} </td>
        <td class="align-middle"><input id="cantidad${i}" type="number" min ="1" value=${article.count} onChange="updateProductoSubtotal()"></td>
        <td class="align-middle" id="subtotaldinamico${i}">${sub + usd}</td>
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

function tarjeta() {
    let htmlToAppend = "";
    console.log("tarjeta")

    htmlToAppend += `
        <form class="mx-3">
            <div class="form-row">
              <div class="form-group col-md-12">
                <input type="text" class="form-control" id="tarjetaNumero" placeholder="Numero de tarjeta">
              </div>
            </div>
        </form>
        `
    document.getElementById("tarjeta").innerHTML = htmlToAppend;

}

function validar() {
    test = document.getElementById("tarjetaNumero").value;
    
    if (test == "") {
        alert("Debe ingresar el número de tarjeta");
    } else {
        alert("Los datos fueron guardados exitosamente")
    }
}

/* Simulacion del proceso de compra*/
document.getElementById("comprar").addEventListener("click", function () {
    let htmlToAppend = "";

    let pais = document.getElementById("pais").value;
    let calle = document.getElementById("calle").value;
    let num = document.getElementById("num").value;
    let esq = document.getElementById("esq").value;

    if (pais === "" || calle === "" || num === "" || esq === "") {
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
});

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getCarrito(CART)
        .then(respuesta => {
            productosCarrito = respuesta.articles;
            showCarrito();
            console.log(productosCarrito);
            update()
            calcularTotalCarrito();
        })
});

