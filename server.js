const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "dist/angular-frontend-test")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/angular-frontend-test/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Angular app running on port ${PORT}`));
