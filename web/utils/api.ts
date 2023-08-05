import axios from "axios";

const API_URL = "https://localhost:3000";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
