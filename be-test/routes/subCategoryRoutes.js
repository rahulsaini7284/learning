import { createSubCategory, getCategory } from "../controller/subCategory.js";
import express from "express";
const subCategoryRoute = express.Router();
subCategoryRoute.post("/", createSubCategory);
subCategoryRoute.get("/", getCategory);
export default subCategoryRoute;
