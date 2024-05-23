import model from "../models/pet.model.js";
import Client from "../models/client.model.js";
import upload from "../upload/upload.js";

function findAll(request, response) {
  model
    .findAll()
    .then(function (res) {
      response.json(res).status(200);
    })
    .catch(function (err) {
      response.json(err).status(500);
    });
}

function findById(request, response) {
  model
    .findByPk(request.params.id, { include: Client })
    .then(function (res) {
      response.json(res).status(200);
    })
    .catch(function (err) {
      response.json(err).status(500);
    });
}

function findByClientId(request, response) {
  model
    .findAll({ where: { ClientId: request.params.id } })
    .then(function (results) {
      response.json(results).status(200);
    })
    .catch((e) => response.json(e).status(500));
}

function create(request, response) {
  model
    .create({
      name: request.body.name,
      type: request.body.type,
      breed: request.body.breed,
      birth: request.body.birth,
      photo: upload.getFileUrl(request.body.key),
      ClientId: request.body.ClientId,
    })
    .then(function (res) {
      response.json(res).status(201);
    })
    .catch(function (err) {
      response.json(err).status(500);
    });
}

function deleteByPk(request, response) {
  model
    .destroy({ where: { id: request.params.id } })
    .then(function (res) {
      response.status(200).send();
    })
    .catch(function (err) {
      response.json(err).status(500);
    });
}

function update(request, response) {
  model
    .update(
      {
        name: request.body.name,
        type: request.body.type,
        breed: request.body.breed,
        birth: request.body.birth,
        ClientId: request.body.ClientId,
      },
      { where: { id: request.params.id } },
    )
    .then(function (res) {
      response.status(200).send();
    })
    .catch((e) => {
      response.json(e).status(500);
    });
}

export default {
  findAll,
  findById,
  create,
  deleteByPk,
  update,
  findByClientId,
};
