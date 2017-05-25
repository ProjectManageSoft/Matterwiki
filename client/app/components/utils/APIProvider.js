import axios from "axios";

// TODO Add better error handling

const token = window.localStorage.getItem("userToken");
const axiosInstance = axios.create({
  baseURL: "api/",
  headers: { "x-access-token": token }
});

/**
 * Takes care of user created errors, returns a promise which could be handled at the component side
 */
function prepareResponse(response) {
  if (!response.data) return;

  const serverResponse = response.data;
  const code = serverResponse.code;

  if (serverResponse.error.error) {
    const error = Object.assign({}, { code }, serverResponse.error);
    return Promise.reject(error);
  } else {
    return Promise.resolve(serverResponse.data);
  }
}

/**
 * Main export
 */
const APIProvider = {
  get: endpoint => axiosInstance.get(endpoint).then(prepareResponse),
  post: (endpoint, payload) =>
    axiosInstance.post(endpoint, payload).then(prepareResponse),
  put: (endpoint, payload) =>
    axiosInstance.put(endpoint, payload).then(prepareResponse),
  delete: endpoint => axiosInstance.delete(endpoint)
};

export default APIProvider;
