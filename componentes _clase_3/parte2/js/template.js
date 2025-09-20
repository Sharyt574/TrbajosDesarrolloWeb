const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
{ titulo: "Laptop", desc: "16GB RAM", price: 100, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsMz9g3T9PfjNeDzAEoCqWCfjp53afA-f8Q&s"},
{ titulo: "Mouse", desc: "Inalámbrico", price: 100, imagen: "https://rymportatiles.com.pe/cdn/shop/articles/ventajas-mouse-gamer.png?v=1700713750&width=800" },
{ titulo: "Camara", desc: "Inalámbrico", price: 100, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4v27S9DAucozdEMN2Jg8vAUHQjWO-uuTa_w&s" },
{ titulo: "Pantalla", desc: "Inalámbrico", price: 100, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomk_r28eiqwcsI6fEnHcaMdGEuMeWK7FvYg&s" },
{ titulo: "Teclado", desc: "Inalámbrico", price: 100, imagen: "https://hiraoka.com.pe/media/mageplaza/blog/post/c/o/como_elegir_un_teclado.jpg" }
];

productos.forEach(p => {
const clon = template.content.cloneNode(true);
clon.querySelector(".title").textContent = p.titulo;
clon.querySelector(".desc").textContent = p.desc;
clon.querySelector(".price").textContent = p.price.toLocaleString("Es-co");
clon.querySelector("img").src = p.imagen;
contenedor.appendChild(clon);
});

