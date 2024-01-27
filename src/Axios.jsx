import axios from 'axios'
const instance = axios.create({
    baseURL: "https://zyfarer.pythonanywhere.com/api/",
  });

  export default instance