import express from "express";

const app = express(); //chamando express pois ele é uma função

//rota de busca por informações dos games
app.get("/games", (request, response) => {
  //.get para atribuirmos o caminho das pastas para acesso ex: localhost:3001/ads, ao acessar esse caminho uma função será executada
  return response.json([
    //o response é usado para retornar algo para a função
    //.json() retorna uma informação tipo json
  ]);
});

//rota pra criação dos anuncios dos usuarios
app.post("/ads", (request, response) => {
  return response.status(201).json([]);
});

//rota de acessar o game de determinado anuncio
app.get("/games/:id/ads", (request, response) => {
  return response.json([]);
});

//rota para acessar o discord de determinado anuncio
app.get("/ads/:id/discord", (request, response) => {
  return response.json([]);
});

app.listen(3001); //colocando na porta 3001
