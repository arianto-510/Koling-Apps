const ServiceModel = require("../models/services");

const readAllService = async (req, res) => {
  try {
    const [data] = await ServiceModel.getAllService();
    console.log(data);
    res.json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      errorMessage: error,
    });
  }
};

const createNewServices = async (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    await ServiceModel.addNewService(body);
    res.status(201).json({
      message: "Create New Services Success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { createNewServices, readAllService };
