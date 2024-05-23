import { response } from "express";
import model from "../models/dogbreed.model.js";

function getAll(request, response) {
  const breeds = model.findAll();
  response.send(breeds);
}

function getById(request, response) {
  const breed = model.findById(request.params.id);
  response.send(breed);
}

function create(request, response) {
  const result = model.create(request.body.breed);
  response.status(201).send(result);
}

export default { getAll, getById, create };
