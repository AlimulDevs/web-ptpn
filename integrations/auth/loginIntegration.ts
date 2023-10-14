import { LoginRequest } from "../../types";

export default async function LoginIntegration(props: LoginRequest) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL + "admin/login";
    const fetchData = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(props),
    });

    const result = await fetchData.json();

    return await result;
  } catch (error) {
    return error;
  }
}
