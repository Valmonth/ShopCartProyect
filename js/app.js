"use strict";
import { productos } from '../js/data.js';
//Listar productos disponibles
const pp = productos;
let carrito =JSON.parse(localStorage.getItem('toBuy')) || [];
/* const listProducts = document.getElementById('product-list'); */
let products = "";
function showProducts(pp){
    for (let i = 0; i < productos.length; i++) {
         products += `<div class="col-sm ml-2 m-lg-2 mt-md-2 mt-sm-2">
                    <div class="card" style="width: 18rem;">
                    <img src="${productos[i].image}" class="card-img-top" alt="..." width=200px height=200px>
                    <div class="card-body">
                    <h5 class="card-title">${productos[i].name}</h5>
                    <p class="card-text">Precio: $${productos[i].price}</p>
                    <button id="${productos[i].id}" class="btn btn-primary" onclick="getIdProduct(${productos[i].id});">Añadir al carrito</button>
                    </div>
                    </div>
                  </div>`       
     }
     const container = document.getElementById('product-list');
     container.innerHTML = products;
}

showProducts();


let cartItems =[];
function getIdProduct(id){
    function prodbyId(ppp){
        return ppp.id === id;
    };
let addToCart = productos.find(prodbyId);
carrito.push(JSON.stringify(addToCart));
console.log(carrito);
localStorage.setItem('toBuy', carrito);
  
}



window.showProducts = showProducts;
window.getIdProduct = getIdProduct;