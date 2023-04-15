import {BASE_URL} from "../Variables/ServerConfig";

export const getCategoriesReviews = async () => {
  const response = await fetch(`${BASE_URL}/api/category`);
  if (!response.ok) {
    throw new Error("Server Error! Categories.");
  }
  return await response.json();
}

export const checkIsCreatedUser = async (user) => {
  const response = await fetch(`${BASE_URL}/users/check-is-created-user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      user: user
    })
  });
  if (!response.ok) {
    throw new Error("Server Error!");
  }
  return await response.json();
}

export const createUser = async (user) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user: user
    })
  });
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

export const LoginDB = async (user) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  })
  if (!response.ok) {
    throw new Error("Server Error! Login.");
  }
  return await response.json()
}

export const AutoLogin = async (token) => {
  const response = await fetch(`${BASE_URL}/auto_login`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return await response.json()
}

export const UserIsAuthed = async (token) => {
  const response = await fetch(`${BASE_URL}/user_is_authed`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response.message;
}

export const EditUser = async ({user, token}) => {
  const response = await fetch(`${BASE_URL}/user-edit/`, {
    method: 'PUT',
    headers: {
      "Content-Type": 'application/json' ,
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      user: user
    })
  })
  return response.message;
}

export const getAllUsers = async () => {
  const response = await fetch(`${BASE_URL}/users/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error("Server Error!");
  }

  return await response.json();
}

//=============================

