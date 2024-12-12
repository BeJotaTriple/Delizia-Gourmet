import { Request, Response } from "express";
import Client from "../models/Client";

// Metodo para registrar un nuevo usuario
export const registerClient = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { name, email, address, city, tel_numb } = req.body;
    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const newClient = new Client({ name, email, address, city, tel_numb });
    await newClient.save();
    res
      .status(201)
      .json({ message: "Client registered successfully", user: newClient });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while saving the client";
    res.status(500).json({ error: errorMessage });
  }
};

//Metodo para traer todos los usuarios
export const getAllClients = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const users = await Client.find();
    res.status(200).json(users);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while fetching Clients";
    res.status(500).json({ error: errorMessage });
  }
};

//Metodo para traer el usuario por su id
export const getClientById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(client);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while retrieving client information";
    res.status(500).json({ error: errorMessage });
  }
};

//Metodo para actualizar un usuario por su id
export const updateClientById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    if (!updatedClient) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "Client updated successfully", client: updatedClient });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while updating client";
    res.status(500).json({ error: errorMessage });
  }
};

//Metodo para eliminar un usuario por su id
export const deleteClientById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    if (!deletedClient) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "Client deleted successfully", user: deletedClient });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred while deleting client";
    res.status(500).json({ error: errorMessage });
  }
};
