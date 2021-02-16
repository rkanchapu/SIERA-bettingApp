import axios from "axios";

export const GET = async (url) => await axios.get(url);
export const POST = async (url, data, config) =>
  await axios.post(url, data, config);
