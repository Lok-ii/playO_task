const generateUniqueId = require("generate-unique-id");
const userModel = require("../models/user.js");

const getUserData = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const createUser = async (req, res) => {
  console.log(req.body);
  const body = { ...req.body };
  const id = generateUniqueId({
    length: 5,
    useLetters: false,
  });
  console.log(id);
  const newUser = { trackingId: id, ...body };
  try {
    const user = await userModel.create(newUser);
    res.status(200).json({
      success: true,
      data: user._id,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  try {
    const user = await userModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const getSearchedData = async (req, res) => {
  try {
    const user = await userModel.find({});
    const searchData = user.filter((item) => {
      return item.customer.indexOf(req.params.search) != -1;
    })
    res.status(200).json({
      success: true,
      data: searchData,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  createUser,
  getUserData,
  updateUser,
  deleteUser,
  getSearchedData,
};
