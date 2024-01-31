import axios from 'axios';

const API_KEY = '65ba4abcb4d53c06655280d8';
const BASE_URL = `https://${API_KEY}.mockapi.io/contacts`;

export const requestContacts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/contacts`);
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    console.error(error);
    throw error;
  }
};

// export const requestMovieById = async movieId => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`);
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export const requestMovieCast = async id => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits`);
//     return data;
//   } catch (error) {
//     console.error('Error fetching movie credits:', error);
//     throw error;
//   }
// };

// export const requestMovieReviews = async id => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews`);
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export const requestSearchMovies = async searchTerm => {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}/search/movie?query=${searchTerm}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export const getPoster = url =>
//   url
//     ? `https://media.themoviedb.org/t/p/w440_and_h660_face/${url}`
//     : 'https://fakeimg.pl/400x600?text=No+image&font=bebas';

// export const getProfileImg = url =>
//   url
//     ? `https://image.tmdb.org/t/p/w200${url}`
//     : 'https://fakeimg.pl/400x600?text=No+image&font=bebas';
