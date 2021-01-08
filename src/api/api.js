import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '139e0614-095b-4491-807d-423fb46f3e51'
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data; // возвращяем не все данные которые пришли с get-запросом, а только data, ибо в компоненту должно приходить только те данные которые нужны.
    })
  }

}



