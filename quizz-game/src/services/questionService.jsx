import { API_URL } from "../constants/contants";

const fetchQuestions = async (token, totalQuestion) => {
  try {
    const response = await fetch(
      `${API_URL}/questions/play?total=${totalQuestion}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const submitQuestions = async (token, listQuestionSubmitted) => {
  try {
    const response = await fetch(`${API_URL}/questions/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ listQuestionSubmitted }),
    });
    console.log("je", listQuestionSubmitted);
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export { fetchQuestions, submitQuestions };
