import axios, { AxiosError } from "axios";

type TokenResponse = {
  access_token: string;
  expires_in: string;
  token_type: string;
};

export async function getToken(): Promise<TokenResponse | null> {
  const API_URL = `${process.env.FLINKEY_API_URL}/oauth2/token`;

  const headers = {
    "flinkey-API-Key": process.env.FLINKEY_API_KEY!,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const formBody = new URLSearchParams();
  formBody.append("username", process.env.FLINKEY_USERNAME!);
  formBody.append("password", process.env.FLINKEY_PASSWORD!);
  formBody.append("grant_type", process.env.FLINKEY_GRANT_TYPE!);
  try {
    const response = await axios.post(API_URL, formBody.toString(), {
      headers,
    });

    const { access_token } = response.data;

    return access_token;
  } catch (error) {
    const axiosError = error as AxiosError;

    console.error("Error status:", axiosError.response?.status);
    console.error("Error data:", axiosError.response?.data);
    return null;
  }
}
