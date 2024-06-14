import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../docs/swagger.json';

const app = express();

app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

mongoose.connect("mongodb://localhost/firstapi");

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log("server is listening");
});
