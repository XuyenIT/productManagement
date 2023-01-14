const express = require("express");
const app = express();
const path = require("path");
const {
  getAllProduct,
  getFormCreateProduct,
  createProduct,
  getDetailProduct,
  deleteProduct,
  getFormUpdateProduct,
  updateProduct,
  searchNameProduct,
} = require("./controllers/product.controller");
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//lay danh sach san pham
app.get("/", getAllProduct);

//get form create product
app.get("/create", getFormCreateProduct);
//post product
app.post("/create", createProduct);
//lay thong tin chi tiet product
app.get("/detail/:id", getDetailProduct);
//xoa product
app.get("/delete/:id", deleteProduct);
//lay thong tin chi tiet product for update
app.get("/update/:id", getFormUpdateProduct);
//update product method post
app.post("/update", updateProduct);
// search function
app.get("/search", searchNameProduct);

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${3000}`);
});
