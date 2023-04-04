import {BASE_URL} from "../Variables/ServerConfig";

export const getCategoriesReviews = async () => {
  const response = await fetch(`${BASE_URL}/api/category`);
  if (!response.ok) {
    throw new Error("Server Error!");
  }
  return await response.json();
}

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error("Server Error!");
  }
  return await response.json();
}

export const getFilmByOption = async ({Order, Type, RatingFrom, RatingTo, YearFrom, YearTo, Page}) => {
  const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': 'e7f99f2b-0c59-4103-9d86-aaaefcc3de17',
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?order=${Order}&type=${Type}&ratingFrom=${RatingFrom}&ratingTo=${RatingTo}&yearFrom=${YearFrom}&yearTo=${YearTo}&page=${Page}`, options);

  if (!response.ok) {
    throw new Error("Server Error!");
  }

  return await response.json();
}

export const getFilmByID = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': 'e7f99f2b-0c59-4103-9d86-aaaefcc3de17',
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, options);

  if (!response.ok) {
    throw new Error("Server Error!");
  }

  return await response.json();
}