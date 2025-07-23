const axios = require("axios");
const HttpCodes = require("../../const/HttpCodes");

const BUCKETS_API_URL = "https://developer.api.autodesk.com/oss/v2/buckets";

const GetBuckets = async (req, res) => {

  // get authorization token from headers

  const { authorization } = req.headers;

  console.log(authorization)

  if (!authorization) {
    return res.status(HttpCodes.UNAUTHORIZED).json({
      data: null,
      error: true,
      message: "Es necesario un token de autorización",
    });
  }

  if (!authorization.startsWith("Bearer")) {
    return res.status(HttpCodes.UNAUTHORIZED).json({
      data: null,
      error: true,
      message: "Es necesario un token de autorización válido",
    });
  }

  const token = authorization.split(" ")[1];


  const {data} = await axios.get(`${BUCKETS_API_URL}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.status(HttpCodes.OK).json({
    data: [data],
    error: null,
    message: "Lista de buckets obtenida exitosamente",
  });
};

const CreateBucket = async (req, res) => {
    const { authorization } = req.headers;

    const {bucket_name, politica_bucket} = req.body;

  console.log(authorization)

  if (!authorization) {
    return res.status(HttpCodes.UNAUTHORIZED).json({
      data: null,
      error: true,
      message: "Es necesario un token de autorización",
    });
  }

  if (!authorization.startsWith("Bearer")) {
    return res.status(HttpCodes.UNAUTHORIZED).json({
      data: null,
      error: true,
      message: "Es necesario un token de autorización válido",
    });
  }

  const token = authorization.split(" ")[1];

  const {data} = await axios.post(
    `${BUCKETS_API_URL}`,
    {
        bucketKey: bucket_name,
        policyKey: politica_bucket,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  return res.status(HttpCodes.OK).json({
    data: data,
    error: null,
    message: "Bucket creado exitosamente",
  });
};

const GetBucket = async (req, res) => {

  const { nombrebucket } = req.params;

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(HttpCodes.UNAUTHORIZED).json({
      data: null,
      error: true,
      message: "Es necesario un token de autorización",
    });
  }

  if (!authorization.startsWith("Bearer")) {
    return res.status(HttpCodes.UNAUTHORIZED).json({
      data: null,
      error: true,
      message: "Es necesario un token de autorización válido",
    });
  }

  const token = authorization.split(" ")[1];

  const url = `${BUCKETS_API_URL}/${nombrebucket}/details`;

  const {data} = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.status(HttpCodes.OK).json({
    data: data,
    error: null,
    message: "Detalles del bucket obtenidos exitosamente",
  });
}

module.exports = {
  GetBuckets,
  CreateBucket,
  GetBucket,
};
