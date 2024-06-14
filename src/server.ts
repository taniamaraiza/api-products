import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../docs/swagger.json";
import "dotenv/config";

const app = express();

// app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// mongoose.connect("mongodb://localhost/firstapi");

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@api-products-cluster.gtxmtk1.mongodb.net/?retryWrites=true&w=majority&appName=api-products-cluster`
);

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("server is listening");
});
