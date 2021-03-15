import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

class Api {
  static getNewRecipe = async () => {
    try {
      const res = await axios.get(`${baseUrl}/recipes-length/?limit=9`)

      return await res.data
    } catch (error) {
      return error
    }
  }

  static getTipsMasak = async () => {
    try {
      const res = await axios.get(`${baseUrl}/categorys/article/tips-masak`)

      return await res.data
    } catch (error) {
      return error
    }
  }
}

export default Api
