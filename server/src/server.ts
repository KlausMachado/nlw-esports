import express, { response } from "express";

const app = express(); //chamando express pois ele é uma função

app.get("/ads", (request, response) => {
  //.get para atribuirmos o caminho das pastas para acesso ex: localhost:3001/ads, ao acessar esse caminho uma função será executada
  return response.json([//o response é usado para retornar algo para a função 
  //.json() retorna uma informação tipo json
    {"id": 1, "name": "Anuncio 1"},
    {"id": 2, "name": "Anuncio 2"},
    {"id": 3, "name": "Anuncio 3"},
    {"id": 4, "name": "Anuncio 4"},
  ])  
});

app.listen(3001); //colocando na porta 3001
