const exp = require("constants");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//motor de plantillas
app.set('view engine', 'ejs'); //motor de plantillas
app.set('views', __dirname + '/views'); //folder de plantillas

//middleware 
app.use(express.static(__dirname + "/public")); //para css y js, no html


//routes
app.get("/", (req, res) => {
  res.render("index",{titulo : "mi titulo dinamico"});
});

app.get("/servicios",(req,res) => {
    //res.send("Estas en la pagina de servicios");
    res.render("servicios",{tituloServicios : "este es un mensaje dinamico de servicios"});
})

app.get("/contacto", (req, res) => {
    //res.send("ruta de contacto");
    res.render("contacto",{tituloContacto : "Gracias por comunicarse"});
  });


//middleware 404
app.use((req,res,next)=>{
    //res.status(404).sendFile(__dirname + "/public/404.html");
    res.status(404).render("404",{
        titulo : "404",
        mensaje: "Upps, this page doesn't exist"
    });
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});

//Modificado por Moshe 11-08-21