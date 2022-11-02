import axios from "axios";

const customAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export default customAxios;
