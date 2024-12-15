import { Router } from "express";
import { getCountCollections } from "../controllers/dashboardController";
import { getCategoriesWithProductCount } from "../controllers/categoryController";

const router = Router();

router.get("/index", getCountCollections);
router.get("/categories", getCategoriesWithProductCount);

export default router;
