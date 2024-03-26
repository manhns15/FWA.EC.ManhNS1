import { API_URL } from "../constants/contants";

const fetchProfile = async (token) => {
  try {
    const response = await fetch(`${API_URL}/user/my-profile`, {
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
const uploadAvatar = async (token, file) => {
  try {
    const formData = new FormData();
    formData.append("avatar", file);

    const response = await fetch(`${API_URL}/user/upload-avatar`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Upload avatar failed");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Upload avatar error:", error);
    throw error;
  }
};
export { fetchProfile, uploadAvatar };
