import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import apiRouter from "./routes/apiRouter";
import "./database";

const app = express();
const port = 3333;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API logs on sepherum",
      version: "1.0.0",
      description: "Endpoint of logs on sepherum",
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use("/api", apiRouter);

app.listen(process.env.PORT || 3030, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    app.settings.env
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(
    "Documentação Swagger disponível em http://localhost:3333/api-docs"
  );
});
