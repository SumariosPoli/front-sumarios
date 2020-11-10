import axios from "axios";
import All from '../config'

export const getArticlesByKeyword = async (data) => {
  const result = await axios(
    {
      method: "POST",
      baseURL: `${process.env.REACT_APP_PROTOCOL_BACKEND}://${process.env.REACT_APP_HOST_BACKEND}${process.env.REACT_APP_PORT_BACKEND}`,
      url: `${process.env.REACT_APP_API_ARTICLES}`,
      data,
    }
  )
  return result
}

export const createSummary = async (data, token) => {
  return axios({
    method: "POST",
    baseURL: All.backend.url,
    url: '/summaries',
    data,
    headers: {
      token
    }
  })
}