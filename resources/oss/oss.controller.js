const HttpCodes = require("../../const/HttpCodes");

const GetBuckets = (req, res) => {
  return res.status(HttpCodes.OK).json({
    data: [],
    error: null,
    message: "Lista de buckets obtenida exitosamente"
  });
}

module.exports = {
  GetBuckets,
};