import axios from "axios";

export const chatApi = axios.create({
  baseURL: "https://chatbotportfolio-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});
