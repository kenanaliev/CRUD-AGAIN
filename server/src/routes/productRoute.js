import express from "express"
import { GetAllProducts, createProduct } from "../controllers/productController.js"
import { GetProductById } from "../controllers/productController.js"
const router =express.Router()

router.get("/",GetAllProducts)
router.get("/:id",GetProductById)
router.post("/",createProduct)

export default router