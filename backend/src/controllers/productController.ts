import { Request, Response } from "express";
import Product from "../models/Product";

//Metodo para crear un nuevo producto
export const createProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while creating the product";
    res.status(500).json({ error: errorMessage });
  }
};

// Metodo para obtener todos los productos
export const getAllProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const products = await Product.find().populate("category");
    res.status(201).json(products);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while fetching Products";
    res.status(500).json({ error: errorMessage });
  }
};

// Metodo para obtener un producto por id
export const getProductById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while fetching product";
    res.status(500).json({ error: errorMessage });
  }
};

// Metodo para actualizar un producto por su id

export const updateProductById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedProduct) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json({
        message: "Product updated successfully",
        product: updatedProduct,
      });
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while updating product";
    res.status(500).json({ error: errorMessage });
  }
};

// Metodo para eliminar un producto por su id

export const deleteProductById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json({
        message: "Product deleted successfully",
        product: deletedProduct,
      });
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while deleting product";
    res.status(500).json({ error: errorMessage });
  }
};
