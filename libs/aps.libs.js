const axios = require("axios");

const GetAPSTwoToken = async () => {
  const aps_client_id = process.env.APS_CLIENT_ID;
  const aps_client_secret = process.env.APS_CLIENT_SECRET;
  if (!aps_client_id || !aps_client_secret) {
    return res.status(HttpCodes.BAD_REQUEST).json({
      data: null,
      error: true,
      message: "Missing Autodesk Platform Services credentials",
    });
  }

  const credentials = `${aps_client_id}:${aps_client_secret}`;
  const encodedCredentials = Buffer.from(credentials).toString("base64");

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
    Authorization: `Basic ${encodedCredentials}`,
  };

  const requestData = {
    grant_type: "client_credentials",
    scope: "data:read",
  };

  const { data } = await axios.post(
    "https://developer.api.autodesk.com/authentication/v2/token",
    new URLSearchParams(requestData).toString(),
    { headers }
  );

  return data;
};
module.exports = GetAPSTwoToken;
