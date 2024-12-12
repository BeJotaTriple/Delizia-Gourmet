import express from "express";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes";
import clientRoutes from "./routes/clientRoutes";
import productRoutes from "./routes/productRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/clients", clientRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

export default app;
