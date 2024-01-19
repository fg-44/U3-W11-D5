import axios from "axios";
import store from "./store.js";
import { createApi, fetchBaseQuery } from "@redux/toolkit/query/react";
import artistCard from "../assets/component/ArtistCard.js";



     export const handleSection = async (artistName, querySelector) => {
        try {
          let response = await axios.get(
            'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
            artistName,
          {
            headers: {
              'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
              'X-RapidAPI-Key':
              '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
            },
            }
          )
          if (response.ok) {
            const { data } = await response.json()
            let musicSection = document.querySelector(querySelector)
            for (let i = 0; i < 4; i++) {
              musicSection.innerHTML += artistCard(data[i])
           }
            store.dispatch({ type: 'FETCH_SECTION_SUCCESS', payload: data });
          } else {
            throw new Error('Error in fetching songs')
          }
        } catch (error) {
          console.log(error);
        }
      };
      
export const Api = createApi => ({
  reducerPath: "Api",
});

 



