import axios from "axios";

const instance = axios.create({
  //   baseURL: "https://task-react-auth.herokuapp.com/api",
  baseURL: "http://localhost:5000/api",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
