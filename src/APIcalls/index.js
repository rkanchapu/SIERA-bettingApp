import { GET } from './APIMethods'
import appConfig from "../appConfig";

const { MockAPI } = appConfig();

export const getEvents = async (file) => {
  const url = `${MockAPI}`;
  const APIResponse = await GET(url);
  return APIResponse;
};
