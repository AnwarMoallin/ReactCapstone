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

// Create

const createQuery = "INSERT INTO your_table (column1, column2) VALUES ($1, $2)";
const createValues = ["value1", "value2"];

client
  .query(createQuery, createValues)
  .then(() => {
    console.log("Data inserted successfully");
  })
  .catch((err) => {
    console.error("Error inserting data:", err);
  });

// Read
const readQuery = "SELECT * FROM your_table";

client
  .query(readQuery)
  .then((result) => {
    console.log("Fetched data:", result.rows);
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
  });

// Update
const updateQuery = "UPDATE your_table SET column1 = $1 WHERE column2 = $2";
const updateValues = ["new_value", "condition_value"];

client
  .query(updateQuery, updateValues)
  .then(() => {
    console.log("Data updated successfully");
  })
  .catch((err) => {
    console.error("Error updating data:", err);
  });

// Delete
const deleteQuery = "DELETE FROM your_table WHERE column1 = $1";
const deleteValues = ["value_to_delete"];

client
  .query(deleteQuery, deleteValues)
  .then(() => {
    console.log("Data deleted successfully");
  })
  .catch((err) => {
    console.error("Error deleting data:", err);
  });

export default client;
