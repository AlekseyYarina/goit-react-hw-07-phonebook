import axios from 'axios';

// const API_KEY = '65ba4abcb4d53c06655280d8';

const instance = axios.create({
  baseURL: `https://65ba4abcb4d53c06655280d8.mockapi.io/contacts`,
});

export const requestContacts = async () => {
  try {
    const { data } = await instance.get('/contacts');
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const requestDeleteContact = async contactId => {
  try {
    await instance.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    console.error('Error delete contact:', error);
    throw error;
  }
};

export const requestAddContact = async formData => {
  try {
    const { data } = await instance.post('/contacts', formData);
    return data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

// ============================================
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
