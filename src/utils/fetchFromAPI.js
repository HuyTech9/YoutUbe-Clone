import axios from "axios";

const BASE_URL ="https://youtube-v31.p.rapidapi.com";


const options = {
    params: {
     maxResults: "50"
    },
    headers: {
      'X-RapidAPI-Key': "9ddf9e3f03mshad619059df7bfb9p1dbc0bjsn92c1e2a66719",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }