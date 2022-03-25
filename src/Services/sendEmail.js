import axios from "axios";

const BASE_URL = "/api/sendemail";

export const sendEmail = async (data) =>
  (await axios.post(BASE_URL, data)).data;
