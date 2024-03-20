import { API_URL } from "../constants/contants";

const fetchQuestions = async (token) => {
  try {
    const response = await fetch(`${API_URL}/questions/play?total=10`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchQuestions;
