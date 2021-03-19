import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

class Api {
  static getNewRecipe = async () => {
    try {
      const res = await axios.get(`${baseUrl}/recipes-length/?limit=9`)

      return await res.data
    } catch (error) {
      return JSON.parse(error)
    }
  }

  static getDetailRecipe = async (key) => {
    try {
      const res = await axios.get(`${baseUrl}/recipe/${key}`)

      return await res.data
    } catch (error) {
      return JSON.parse(error)
    }
  }

  static getTipsMasak = async () => {
    try {
      const res = await axios.get(`${baseUrl}/categorys/article/tips-masak`)

      return await res.data
    } catch (error) {
      return JSON.parse(error)
    }
  }

  static getDetailArticle = async (tag, endpoint) => {
    try {
      const res = await axios.get(`${baseUrl}/article/${tag}/${endpoint}`)

      return await res.data
    } catch (error) {
      return JSON.parse(error)
    }
  }
}

export default Api
