import { API_URL } from "../constants/contants";

const fetchQuestionsPlay = async (token, totalQuestion) => {
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
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchQuestions = async (token, page) => {
  try {
    const response = await fetch(`${API_URL}/questions?page=${page}`, {
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

const fetchQuestionById = async (id, token) => {
  try {
    const response = await fetch(`${API_URL}/questions/${id}`, {
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
    throw new Error(`Error fetching question by ID: ${error.message}`);
  }
};
const createQuestion = async (questionData, token) => {
  try {
    const response = await fetch(`${API_URL}/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(questionData),
    });

    if (!response.ok) {
      throw new Error("Failed to create question");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error creating question: ${error.message}`);
  }
};

const updateQuestion = async (id, updatedQuestionData, token) => {
  try {
    const response = await fetch(`${API_URL}/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedQuestionData),
    });

    if (!response.ok) {
      throw new Error("Failed to update question");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error updating question: ${error.message}`);
  }
};

const deleteQuestion = async (id, token) => {
  try {
    const response = await fetch(`${API_URL}/questions/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete question");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error deleting question: ${error.message}`);
  }
};

export {
  fetchQuestionsPlay,
  submitQuestions,
  fetchQuestions,
  fetchQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
