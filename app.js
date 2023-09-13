const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// Set the view engine to EJS
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Define a route to render the EJS template
app.get("/", (req, res) => {
  res.render("main_page/index", { message: "Hello, World!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
