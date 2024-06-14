import { Router } from "express";
import ProductController from "./controller/ProductController";

const routes = Router();

routes.get("/products", ProductController.find);
routes.get("/product:name?", ProductController.findByName);
routes.get("/product:id?", ProductController.findById);
routes.put("/product/:id", ProductController.updateProductById);
routes.delete("/product/:id", ProductController.deleteProductById);
routes.post("/product", ProductController.create);

export default routes;
