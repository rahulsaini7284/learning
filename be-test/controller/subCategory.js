import subCategory from "../model/subCategory.js";

const createSubCategory = async (req, res) => {
  try {
    const result = await subCategory.create(req.body);
    res.status(201).send({ status: "Success", result });
  } catch (error) {
    res.status(400).send({ status: "Fail", msg: error.message });
  }
};
const getCategory = async (req, res) => {
  try {
    let data = await subCategory.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ status: "Fail", msg: error.message });
  }
};
export { createSubCategory, getCategory };
