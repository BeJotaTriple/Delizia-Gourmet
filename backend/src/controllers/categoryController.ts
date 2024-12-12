import { Request, Response } from "express";
import Category from "../models/Category";

//Metodo para agregar una categoria
export const addCategory = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { name, description, image } = req.body;
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      res.status(400).json({ message: "Category already exists" });
      return;
    }

    const newCategory = new Category({ name, description, image });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding category" });
  }
};

// Metodo para obtener todas las categorias
export const getAllCategories = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while updating category";
    res.status(500).json({ error: errorMessage });
  }
};

// Metodo para obtener una categoria por id
export const getCategoryById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const category = await Category.findById(req.params.id);

    res.json(category);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An unknown error occurred while getting category id" });
  }
};

// Metodo para actualizar una categoria
export const updateCategoryById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const updateCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    if (!updateCategory) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    res.status(200).json({
      message: "Category updated successfully",
      category: updateCategory,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while updating category";
    res.status(500).json({ error: errorMessage });
  }
};

// Metodo para eliminar una categoria
export const deleteCategoryById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const deleteCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deleteCategory) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    res.status(200).json({
      message: "Category deleted successfully",
      category: deleteCategory,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while deleting category";
    res.status(500).json({ error: errorMessage });
  }
};
