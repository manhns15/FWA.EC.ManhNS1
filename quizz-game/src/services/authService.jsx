import { API_URL } from "../constants/contants";

const loginService = async (email, password) => {
  const response = await fetch(`${API_URL}/authentication/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
};

const registerService = async (email, name, password) => {
  const response = await fetch(`${API_URL}/authentication/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name, password }),
  });
  return await response.json();
};

export { loginService, registerService };
