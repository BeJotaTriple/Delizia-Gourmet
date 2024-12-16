import { Router } from "express";

import {
  registerClient,
  getAllClients,
  getClientById,
  updateClientById,
  deleteClientById,
} from "../controllers/clientController";

const router = Router();

router.post("/", registerClient);
router.get("/", getAllClients);
router.get("/:id", getClientById);
router.put("/:id", updateClientById);
router.delete("/:id", deleteClientById);

export default router;
