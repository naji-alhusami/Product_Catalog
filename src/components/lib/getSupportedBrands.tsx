import axios from "axios";
import { getToken } from "./getToken";

export async function getSupportedBrands(): Promise<string[] | null> {
  const tokenResponse = await getToken();
  if (!tokenResponse) return null;

  const { access_token } = tokenResponse;

  const API_URL = `${process.env.FLINKEY_API_URL}/brands`;

  const headers = {
    "flinkey-API-Key": process.env.FLINKEY_API_KEY!,
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await axios.get(API_URL, { headers });
    // Ensure all brands are uppercased and trimmed
    return response.data.map((b: string) => b.trim().toUpperCase());
  } catch (error) {
    console.error("Error fetching supported brands:", error);
    return null;
  }
}
