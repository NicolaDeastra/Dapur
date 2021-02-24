import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

class Api {
  static getLatestManga = async () => {
    try {
      const res = await axios.get(`${baseUrl}/manga/page/1`)

      return await res.data.manga_list
    } catch (error) {
      return error
    }
  }
}

export default Api
