"use strict";

const express = require('express');
// const app = express();
const morgan = require("morgan");

const { createUser } = require("./handlers/createUser");
const {addFavoriteRecipe} = require("./handlers/addFavoriteRecipe")
const{ingredients}=require("./handlers/ingredients")

express()
  .use(morgan("tiny"))
  .use(express.json())
  .use(express.static("public"))

  .post("/user", createUser)
  .patch("/user/favoriteRecipe/add", addFavoriteRecipe)
  .get('/ingredients/:sub', ingredients)


  .get("*", (req, res) => {
   res.status(404).json({
     status: 404,
     message: "This is obviously not what you are looking for.",
   });
 })

  .listen(8000);