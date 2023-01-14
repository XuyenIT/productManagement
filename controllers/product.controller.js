let { products, typeProducts } = require("../model/product.model");

const getAllProduct = (req, res) => {
  res.render("home", { products: products });
};
const getFormCreateProduct = (req, res) => {
  res.render("create", { typeProducts: typeProducts });
};
const createProduct = (req, res) => {
  const { productName, price, typePro } = req.body;
  const newProduct = {
    id: Math.floor(Math.random() * 100) + 1,
    productName,
    price,
    typePro,
  };
  products = [...products, newProduct];
  if (newProduct) {
    res.redirect("/");
  } else {
    console.log("error");
  }
};
const getDetailProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((pro) => pro.id == id);
  if (index != -1) {
    const product = products[index];
    res.render("detail", { product: product });
  } else {
    console.log("not found");
  }
};
const deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((pro) => pro.id == id);
  if (index !== -1) {
    products.splice(index, 1);
    res.redirect("/");
  } else {
    console.log("not found");
  }
};
const getFormUpdateProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((pro) => pro.id == id);
  if (index != -1) {
    const product = products[index];
    res.render("update", { product: product, typeProducts: typeProducts });
  } else {
    console.log("not found");
  }
};
const updateProduct = (req, res) => {
  const { id, productName, price, typePro } = req.body;
  const index = products.findIndex((pro) => pro.id == id);
  if (index != -1) {
    products[index].productName = productName;
    products[index].price = price;
    products[index].typePro = typePro;
    res.redirect("/");
  } else {
    console.log("not found", id);
  }
};
const searchNameProduct = (req, res) => {
  const { searchName } = req.query;
  if (searchName !== "") {
    const listSearch = products.filter(
      (item) => item.productName.toLowerCase() == searchName.toLowerCase()
    );
    //search tuong doi
    // let listSearch = products.filter((arrBirds) =>
    //   arrBirds.productName.toLowerCase().includes(searchName)
    // );
    console.log("listSearch", listSearch);
    if (listSearch.length > 0) {
      res.render("home", { products: listSearch });
    } else {
      console.log("khong tim thay ket qua phu hop");
    }
  } else {
    res.render("home", { products: products });
  }
};
module.exports = {
  getAllProduct,
  getFormCreateProduct,
  getDetailProduct,
  createProduct,
  deleteProduct,
  getFormUpdateProduct,
  updateProduct,
  searchNameProduct,
};
