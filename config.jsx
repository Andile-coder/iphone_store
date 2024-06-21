// create a config file that has server configuration details
import axios from "axios";
const config = {
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
};
const axiosInstance = axios.create(config);

export default axiosInstance;
// The config file exports an axios instance with the base URL set to http://localhost:3001.
// This instance can be used to make API requests to the server.
// The instance is exported to be used in other parts of the application.
// The instance is created using the axios.create method, which takes a configuration object as an argument.
// The configuration object contains the base URL of the server.
// The instance is then exported to be used in other parts of the application.
// what is axios
// Axios is a popular promise-based HTTP client for the browser and Node.js. It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations on data.
