import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express(); //chamando express pois ele é uma função
const prisma = new PrismaClient({
  log: ["query"],
});

//rota de busca por informações dos games
app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  //.get para atribuirmos o caminho das pastas para acesso ex: localhost:3001/ads, ao acessar esse caminho uma função será executada
  return response.json(
    games
    //o response é usado para retornar algo para a função
    //.json() retorna uma informação tipo json
  );
});

//rota pra criação dos anuncios dos usuarios
app.post("/ads", (request, response) => {
  return response.status(201).json([]);
});

//rota de acessar o game de determinado anuncio
app.get("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
      };
    })
  );
});

//rota para acessar o discord de determinado anuncio
app.get("/ads/:id/discord", async (request, response) => {
  const adId = request.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });
  return response.json({
    discord: ad.discord,
  });
});

app.listen(3001); //colocando na porta 3001
