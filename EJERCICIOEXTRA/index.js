const express = require("express");
const app = express();
let cesta = [];

const almacen = [
  {
    seccion: "panaderia",
    productos: [
      {
        nombre: "pan_integral",
        precio: 2,
        stock: 10,
      },
      {
        nombre: "pan_de_centeno",
        precio: 3,
        stock: 7,
      },
      {
        nombre: "pan_de_semillas",
        precio: 3,
        stock: 6,
      },
    ],
  },
  {
    seccion: "pescaderia",
    productos: [
      {
        nombre: "lubina",
        precio: 8,
        stock: 15,
      },
      {
        nombre: "pez_espada",
        precio: 9,
        stock: 10,
      },
      {
        nombre: "boquerones",
        precio: 4,
        stock: 6,
      },
    ],
  },
  {
    seccion: "fruteria",
    productos: [
      {
        nombre: "platanos",
        precio: 4,
        stock: 10,
      },
      {
        nombre: "mandarinas",
        precio: 3,
        stock: 15,
      },
      {
        nombre: "uvas",
        precio: 3,
        stock: 9,
      },
    ],
  },
];

app.get("/panaderia", function (req, res) {
  let contenidoTabla = "";
  for (let i = 0; i < almacen[0].productos.length; i++) {
    contenidoTabla += `
        <tr>
        <td>${almacen[0].productos[i].nombre}</td>
        <td>${almacen[0].productos[i].precio}</td>
        <td>${almacen[0].productos[i].stock}</td>
        </tr>
        `;
  }

  let tabla = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
            ${contenidoTabla}
            </tbody>
        </table>
    `;
  res.send(tabla);
});

app.get("/pescaderia", function (req, res) {
  let contenidoTabla = "";
  for (let i = 0; i < almacen[1].productos.length; i++) {
    contenidoTabla += `
        <tr>
        <td>${almacen[1].productos[i].nombre}</td>
        <td>${almacen[1].productos[i].precio}</td>
        <td>${almacen[1].productos[i].stock}</td>
        </tr>
        `;
  }

  let tabla = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
            ${contenidoTabla}
            </tbody>
        </table>
    `;
  res.send(tabla);
});

app.get("/fruteria", function (req, res) {
  let contenidoTabla = "";
  for (let i = 0; i < almacen[0].productos.length; i++) {
    contenidoTabla += `
        <tr>
        <td>${almacen[2].productos[i].nombre}</td>
        <td>${almacen[2].productos[i].precio}</td>
        <td>${almacen[2].productos[i].stock}</td>
        </tr>
        `;
  }

  let tabla = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
            ${contenidoTabla}
            </tbody>
        </table>
    `;
  res.send(tabla);
});

app.get("/panaderia/:producto/:cantidad", function (req, res) {
  let producto = req.params.producto;
  let cantidad = req.params.cantidad;

  for (let i = 0; i < almacen[0].productos.length; i++) {
    if (
      producto === almacen[0].productos[i].nombre &&
      cantidad <= almacen[0].productos[i].stock
    ) {
      almacen[0].productos[i].stock -= cantidad;
      cesta.push({
        producto: producto,
        cantidad: cantidad,
        stock: almacen[0].productos[i].stock,
      });
      res.send("se han añadido" + cantidad + producto);
      console.log(cesta);
    } else {
      res.send(
        "no se encuentra ese producto o la cantidad indicada es superior a nuestro stock"
      );
    }
  }
});

app.get("/pescaderia/:producto/:cantidad", function (req, res) {
  let producto = req.params.producto;
  let cantidad = req.params.cantidad;

  for (let i = 0; i < almacen[0].productos.length; i++) {
    if (
      producto === almacen[0].productos[i].nombre &&
      cantidad <= almacen[0].productos[i].stock
    ) {
      almacen[0].productos[i].stock -= cantidad;
      cesta.push({
        producto: producto,
        cantidad: cantidad,
        stock: almacen[0].productos[i].stock,
      });
      res.send("se han añadido" + cantidad + producto);
      console.log(cesta);
    } else {
      res.send(
        "no se encuentra ese producto o la cantidad indicada es superior a nuestro stock"
      );
    }
  }
});

app.get("/fruteria/:producto/:cantidad", function (req, res) {
  let producto = req.params.producto;
  let cantidad = req.params.cantidad;

  for (let i = 0; i < almacen[0].productos.length; i++) {
    if (
      producto === almacen[0].productos[i].nombre &&
      cantidad <= almacen[0].productos[i].stock
    ) {
      almacen[0].productos[i].stock -= cantidad;
      cesta.push({
        producto: producto,
        cantidad: cantidad,
        stock: almacen[0].productos[i].stock,
      });
      res.send("se han añadido" + cantidad + producto);
      console.log(cesta);
    } else {
      res.send(
        "no se encuentra ese producto o la cantidad indicada es superior a nuestro stock"
      );
    }
  }
});

app.get("/cesta", function (req, res) {
  let mensaje = "";
  if (cesta.length > 0) {
    for (let i = 0; i < cesta.length; i++) {
      mensaje += `
      <h3>${cesta[i].producto}</h3>
      <p>Cantidad: ${cesta[i].cantidad}</p>
      <p>Stock: ${cesta[i].stock}</p>
      `;
    }
    res.send(mensaje);
  } else {
    res.send("No tienes nada en la cesta");
  }
});

app.get("/comprar", function (req, res) {
  cesta = [];
  res.send("Su compra ha sido tramitada");
});

app.listen(3000);
