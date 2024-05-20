// create a config file that has server configuration details
import axios from "axios";
const config = { baseURL: "http://localhost:3000/api", withCredentials: true };
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

// how will i use this in other files
// The axios instance exported from the config file can be imported into other files where API requests need to be made.
// For example, in the authActions file, the axios instance can be imported and used to make API requests to the server.
// The axios instance can be used to make GET, POST, PUT, DELETE, and other types of requests to the server.
// make example of how to use this in other files
// import config from "../../config";
// export const login = () => {
//   return async (dispatch) => {
//     const handleLogin = async () => {
//       // perform login
//       // use axios instance to make API requst config definde in config.js file
//       const response = await config.post("/login", { email, password });
//       const user = response.data;
//       // dispatch(authSlice.actions.getUser(user));
