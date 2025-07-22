const axios = require("axios");

const HttpCodes = require("../../const/HttpCodes");
const GetAPSTwoToken = require("../../libs/aps.libs");


const GetApsToken = async(req, res) => {


  const data = await GetAPSTwoToken();

  return res.status(HttpCodes.OK).json({
    data: {
      token: data.access_token, // This is the actual Autodesk token
    },
    error: false,
    message: "Autodesk Platform Services token retrieved successfully",
  });
};

module.exports = {
  GetApsToken,
};
