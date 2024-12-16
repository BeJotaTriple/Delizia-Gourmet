import { Router } from "express";

import {
  addCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} from "../controllers/categoryController";

const router = Router();

router.post("/", addCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.put("/:id", updateCategoryById);
router.delete("/:id", deleteCategoryById);

export default router;
