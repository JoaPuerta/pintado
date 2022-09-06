//Funcion para llenar dinamicamente
//la tienda


let producto = [
    {
      nombre: "Batimovil a escala",
      precio: 400000,
      imagen: "https://firebasestorage.googleapis.com/v0/b/tienda-batman.appspot.com/o/Bati%20caja%20sorpresa.jpg?alt=media&token=1a13e02b-79a6-4aa7-bd99-057fc03b38cf",
      descripcion: "Batimovil a escala de la ultima pelicula",
    },
    {
      nombre: "Camiseta Batman",
      precio: 80000,
      imagen: "https://firebasestorage.googleapis.com/v0/b/tienda-batman.appspot.com/o/Bati%20lonchera.jpg?alt=media&token=509dd139-8731-4bef-89cb-bf7bfc1ff4c5",
      descripcion: "Camiseta original DC",
    },
    {
      nombre: "Gorra Batman",
      precio: 50000,
      imagen: "https://firebasestorage.googleapis.com/v0/b/tienda-batman.appspot.com/o/Bati%20morral%20Totto.jpg?alt=media&token=b4de8d29-f560-4beb-b9ad-23e70aa9f376",
      descripcion: "Gorra original DC",
    },
    {
      nombre: "Bati termo DC",
      precio: 35000,
      imagen: "https://firebasestorage.googleapis.com/v0/b/tienda-batman.appspot.com/o/Bati%20termo%20DC.webp?alt=media&token=906f8a4b-d0d2-41b5-85a9-97d282186d5a",
      descripcion: "Termo para bati chocolate",
    },
    {
      nombre: "Batmav v Superman",
      precio: 300000,
      imagen: "https://firebasestorage.googleapis.com/v0/b/tienda-batman.appspot.com/o/Batimovil%20a%20escala.jpg?alt=media&token=4bdf3f3d-3a42-45ce-bca2-f6e61b0959c9",
      descripcion: "Imagen a escala de la pelicula Batman v Superman",
    },
    {
      nombre: "Bati morral Totto",
      precio: 80000,
      imagen: "https://firebasestorage.googleapis.com/v0/b/tienda-batman.appspot.com/o/Gorra%20Batman.jpg?alt=media&token=0edbc1f7-62f0-49dd-b4b5-2d46d7167230",
      descripcion: "Bolso original DC",
    },
    {
      nombre: "Silla Gaming Batman",
      precio: 2000000,
      imagen: "https://firebasestorage.googleapis.com/v0/b/tienda-batman.appspot.com/o/Imagen%20a%20escala%20de%20la%20pelicula%20Batman%20v%20Superman.webp?alt=media&token=0a0e024a-2ca1-45e9-9c52-9c3ca70dc64c",
      descripcion: "Silla comoda y original DC",
    },
    {
      nombre: "caja de comics Batman",
      precio: 300000,
      imagen: "https://firebasestorage.googleapis.com/v0/b/tienda-batman.appspot.com/o/Silla%20Gaming%20Batman.jpg?alt=media&token=9fa5320a-a77f-4644-bf0a-0c92dd506671",
      descripcion: "comics Batman originales",
    },
    {
      nombre: "Bati caja sorpresa",
      precio: 250000,
      imagen: "https://firebasestorage.googleapis.com/v0/b/tienda-batman.appspot.com/o/caja%20de%20comics%20Batman.jpg?alt=media&token=7f272ed7-43cd-4694-b99b-9e46f9ea92f7",
      descripcion: "Caja sorpresa con producto de batman",
    },
    {
      nombre: "Bati lonchera totto",
      precio: 80000,
      imagen:"https://firebasestorage.googleapis.com/v0/b/tienda-batman.appspot.com/o/camiseta-logo-batman.jpg?alt=media&token=e7aacbb1-5058-4563-9842-c29657233160",
      descripcion: "Lonchera para llevar tus bati alimentos",
    },
  ];

  //Rutina para recorrer el arreglo y crear las tarjetas de cada producto

    //1. crear una referencia a un elemento "PADRE" o "BASE" donde anclaremos los demas

  let fila = document.getElementById("fila")  
  
  

  //2. Necesito recorrer un arreglo
  producto.forEach(function (producto) {
    
    //3. CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS
    let columna = document.createElement("div");
    columna.classList.add("col-md-4") 


    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-100");

    let imagen = document.createElement("img");
    imagen.classList.add("img-fluid", "w-100","card-img-top");
    imagen.src = producto.imagen; 
    console.log(imagen)

    let separador = document.createElement("hr");
    separador.classList.add("w-50","mx-auto","d-block")

    let nombre = document.createElement("h5");
    nombre.classList.add("mx-3", "text-center", "fw-bold")

    let precio = document.createElement("h5");
    precio.classList.add("text-center","text-muted");
    precio.textContent = producto.precio;

    let botonAmpliarInfo = document.createElement("button");
    botonAmpliarInfo.setAttribute("type", "button");
    botonAmpliarInfo.classList.add("btn", "btn-outline-dark", "mx-3", "mb-3");
    botonAmpliarInfo.textContent = "Ver producto";

    //VAMOS A ANCLAR (PONER)(DISPONER) LAS ETIQUETAS
    //QUE ACABAMOS DE CREAR EN NUESTRA BASE
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(separador)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(botonAmpliarInfo);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
  });

