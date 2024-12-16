import { Request, Response } from "express";
import Category from '../models/Category';
import Product from '../models/Product';
import Client from '../models/Client';


export const getCountCollections = async (req: Request, res: Response): Promise<void> => {
  try {
    // Obtener los conteos de cada colección
    const categoriesCount = await Category.countDocuments();
    const productsCount = await Product.countDocuments();
    const clientsCount = await Client.countDocuments();

    res.json({
      categories: categoriesCount,
      products: productsCount,
      clients: clientsCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener los datos del dashboard' });
  }
};

