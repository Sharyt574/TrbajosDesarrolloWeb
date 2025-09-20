const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Laptop", desc: "16GB RAM",price:1000000,imagen : "https://www.lacuracao.pe/media/catalog/product/1/5/15-fd0048la_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" },
    { titulo: "Mouse", desc: "Inalámbrico",price:100000,imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Frymportatiles.com.pe%2Fblogs%2Fblog%2Fventajas-de-un-mouse-gamer%3Fsrsltid%3DAfmBOopoFJulIFPItI3QK8l8Ca5EIToa8hGd-aAQdrEnAZlM2-pyGeuU&psig=AOvVaw3SnipKPpOwKvlQo3UVSAY6&ust=1758458692558000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKDh8ci9548DFQAAAAAdAAAAABAE" },
    { titulo: "Celular", desc: "Inalámbrico",price:2000000,image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmac-center.com%2Fproducts%2Fiphone-13-mlpf3lz-a%3Fsrsltid%3DAfmBOoqMBoJS6ViqSCOStKGJ60oYCNjkutXE29TtraYuds2qBnio88DR&psig=AOvVaw3x-4AcgUw9rccRsVPfCDrA&ust=1758458731291000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKCLrtq9548DFQAAAAAdAAAAABAE" },
    { titulo: "Teclado", desc: "Inalámbrico",price:200000,image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.liverpool.com.mx%2Ftienda%2Fpdp%2Fteclado-gamer-ground-gaming%2F1143900181&psig=AOvVaw2lXtqrwZBoVbMG2Ku_KNr4&ust=1758458774796000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKj7qu-9548DFQAAAAAdAAAAABAE" },
    { titulo: "Audifonos Inalamabricos", desc: "Inalámbrico",price:50000,image : "https://acdn-us.mitiendanube.com/stores/093/864/products/eb-tws-400-negro-5468264e3018f3daa417235015450851-1024-1024.web"},
];

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.desc;
    clon.querySelector(".price").textContent = producto.price;
    clon.querySelector(".imagen").textContent = producto.imagen;
    contenedor.appendChild(clon);
});
