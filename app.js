const express = require("express");
const dotenv = require("dotenv");
const scategoriesRouter = require("./routes/scategorie.route");
const categoriesRouter = require("./routes/categorie.route");
const articleRouter = require("./routes/article.route");
dotenv.config();
const app = express();
//BodyParser Middleware
app.use(express.json());

// Appel de routes
app.use("/api/scategories", scategoriesRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/article", articleRouter);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
