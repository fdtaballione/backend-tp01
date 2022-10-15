const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("Ingresa peticion", req.url);
  if (req.url === "/") {
    console.log("respondemos con hola");
    res.write("Hola desde mi primer servidor web");
    res.end();
    return;
  }
  if (req.url === "/visitar") {
    try {
      let hoy = new Date();
      var hora =
        hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
      let mensaje =
        "Hola soy Fernando y visitaste mi servidor a la hora " + hora + "\n";
      fs.appendFileSync("archivo.txt", mensaje);
    } catch (err) {
      console.log("Problemas al agregar los datos");
    }
    res.write("Gracias por visitarnos");
    res.end();
    return;
  }

  res.write("dirección incorrecta");
  res.end();
});

server.listen(8080);
console.log("Servidor escuchando en 8080");
