import express from "express";
import breedController from "../controllers/breed.controller.js";
import clientController from "../controllers/client.controller.js";
import petController from "../controllers/pet.controller.js";
import authController from "../controllers/auth.controller.js";
import upload from "../upload/upload.js";

const router = express.Router();

router.post("/signup", authController.register);
router.post("/signin", authController.login);
//router.get("/users", authController.findAll);
// autenticacao comentada
//router.all("/clients", authController.validateToken);
//router.all("/pets", authController.validateToken);

router.get("/", breedController.getAll);
router.get("/breeds", breedController.getAll);
router.get("/breeds/:id", breedController.getById);
router.post("/breeds", breedController.create);

router.get("/clients", clientController.findAll);
router.get("/clients/:id", clientController.findById);
router.post("/clients", clientController.create);
router.delete("/clients/:id", clientController.deleteByPk);
router.put("/clients/:id", clientController.update);

router.get("/pets", petController.findAll);
router.get("/pets/:id", petController.findById);
router.post("/pets", upload.uploadFile.single("file"), petController.create);
router.delete("/pets/:id", petController.deleteByPk);
router.put("/pets/:id", petController.update);
router.get("/clients/:id/pets", petController.findByClientId);

export default router;
