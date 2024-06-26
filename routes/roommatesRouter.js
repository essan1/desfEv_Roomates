import express from "express";
//import controllers
import {
  home,
  addRoommate,
  getRoomates,
} from "../controllers/roommateController.js";
import { get } from "http";
const router = express.Router();

//home
router.get("/", home);

//roommate
router.get("/roommate", addRoommate)
router.get("/roommates", getRoomates)


//ruta generica
router.get("*", (req, res) => {
  res.status(400);
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Error 404 - Página No Encontrada</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
          margin: 0;
          padding: 0;
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          flex-direction: column;
        }
        .error-message {
          text-align: center;
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          margin-top: 20px;
        }
        .error-message a {
          color: blue;
          text-decoration: underline;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img src="img/404.png" alt="Error 404">
        <div class="error-message">
          <h1>Error 404 - Página No Encontrada</h1>
          <p>Lo sentimos, la página que buscas no ha sido encontrada.</p>
          <a href="/">Volver a la página principal</a>
        </div>
      </div>
    </body>
    </html>
  `);
});


export default router;