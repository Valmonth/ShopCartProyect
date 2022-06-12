"use strict";
import { productos } from '../js/data.js';
//Listar productos disponibles
const pp = productos;
/* const listProducts = document.getElementById('product-list'); */
let products = "";
function showProducts(pp){
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i].name)
         products += `<div class="col-sm">
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

/* get item and stores in localStorage */
function getIdProduct(id){
    let item = productos.find(item => item.id == id);
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    if(cart == null){
        cart = [];
    }
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto agregado al carrito');
}




/* function getIdProduct(id){
    console.log(id);
} */

window.showProducts = showProducts;
window.getIdProduct = getIdProduct;