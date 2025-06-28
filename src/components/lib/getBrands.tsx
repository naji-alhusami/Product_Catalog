import axios, { AxiosError } from "axios";
import { getToken } from "./getToken";

export async function getBrands(): Promise<any[] | null> {
  const tokenResponse = await getToken();

  if (!tokenResponse) {
    console.error("Failed to get access token");
    return null;
  }

  const { access_token } = tokenResponse;

  const API_URL = `${process.env.FLINKEY_API_URL}/brands`;

  const headers = {
    "flinkey-API-Key": process.env.FLINKEY_API_KEY!,
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("Brands fetch failed:", axiosError.response?.data);
    return null;
  }
}
