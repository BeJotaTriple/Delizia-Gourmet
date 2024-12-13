import { Router } from "express";
import { getCountCollections } from "../controllers/dashboardController";

const router = Router();

router.get('/', getCountCollections)

export default router;