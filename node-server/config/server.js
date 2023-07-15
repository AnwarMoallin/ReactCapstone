import Client from "pg";

const client = new Client({
  user: "mydb",
  host: "your_host",
  database: "test",
  password: "something",
  port: 5432, // default PostgreSQL port
});

client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL:", err);
  });
