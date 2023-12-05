import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://nullbeta:JVkB8pQm1tOKdbni@cluster0.u7mz3qp.mongodb.net/sepherum?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erro na conexão com o MongoDB:"));
db.once("open", async () => {
  const collections = await db.db.listCollections().toArray();
  console.log("Mongo conectado");
  console.log(
    "Coleções disponíveis:",
    collections.map((col) => col.name)
  );
});

export default db;
