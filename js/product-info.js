let product = {};

function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
        <div class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
        </div>
        </div>
        `

    }
}

function cargarProducto() {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productPriceHTML = document.getElementById("price");
            let productCountHTML = document.getElementById("soldCount");
            let productCriteriaHTML = document.getElementById("category");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productPriceHTML.innerHTML = product.cost + " " + product.currency;
            productCountHTML.innerHTML = product.soldCount;
            productCriteriaHTML.innerHTML = product.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
}

let comments = [];

function mostrarComentarios() {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comments = resultObj.data;
            console.log(comments.length);
            let htmlContentToAppend = ``;
            for (let i = 0; i < comments.length; i++) {
                console.log(i);
                htmlContentToAppend += `
                            <div id="card" class="card mb-4 p-3">
                            <p> <b>${comments[i].user} </b> | ${comments[i].dateTime} | ${stars(comments[i].score)}
                            <br>
                            <p>${comments[i].description}         
                            </p>
                            </div>
                        `;

            }
            document.getElementById('divComentario').innerHTML = htmlContentToAppend;
        }
        console.log(comments);
    });
}

function stars(numero) {
    let number = parseInt(numero);
    let html = "";

    for (let i = 1; i <= number; i++) {
        if (i <= 5){
            html += `<span class="fa fa-star checked"></span>`
        }
    } for (let j = number + 1; j <= 5; j++) {
        html += `<span class="fa fa-star"></span> `
    }
    return html;
}

let relacionados = [];
//Mostrar los relatedProducts en las cards
function relatedProducts() {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            relacionados = resultObj.data;
            productRelated = relacionados.relatedProducts; //indices
            console.log(productRelated);
            let htmlContentToAppend = ``;
            getJSONData(PRODUCTS_URL).then(function (resultObjs) {
                if (resultObjs.status === "ok") {

                    prod = resultObjs.data; //productos
                    console.log(prod);
                    let producto = prod.name
                    console.log(producto);
                    for (let indice of productRelated) {
                        console.log(prod[indice]);
                        htmlContentToAppend += `
                        <div class="card w-45 justify-content col-2>
                        <div class="card col-sm-5 pb-3">
                        <img class="card-img-top" src="${prod[indice].imgSrc}" alt="Card image cap">                           
                            <div class="card-body d-flex flex-column text-center pt-6">                             
                                <h2 class="card-title">${prod[indice].name}</h2>
                                <p class="card-text text-justify">${prod[indice].description}</p>
                                <a href="#" class="btn btn-outline-info mt-auto">Ver producto</a>
                            </div>                        
                        </div>
                      </div>
                     
                            `;
                    }
                    document.getElementById("prod-list-container1").innerHTML = htmlContentToAppend;
                }
            });
        };
    });
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) { /* Funcion para mostrar la información del json PRODUCT_INFO_URL */
    cargarProducto();
    mostrarComentarios();
    relatedProducts();
});

//Grupal
document.getElementById("submmit").addEventListener("click", function () {
    let htmltoappend = "";
    let texto = document.getElementById("text-area").value;
    let puntaje = document.getElementById("input").value;
    let date = new Date();
    var fecha = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' | ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    /* let username = JSON.parse(localStorage.getItem('user')); */

    console.log(date);

    htmltoappend = `<div class="card mb-4 p-3" id=card1>
    <div class="col-2 "></div>
        <p> <b>${username}</b> | ${fecha} | ${stars(puntaje)}</p>
        <p>${texto}</p>
    </div>`;

    document.getElementById("card1").innerHTML += htmltoappend;

})