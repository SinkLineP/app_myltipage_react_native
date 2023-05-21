import {
  API_ID_SMS,
  API_KEY_GeoAPIFY,
  BASE_URL,
  TIME_TO_DELETE_THE_SMS
} from "../Variables/ServerConfig";
import {useState} from "react";
import {formattedResultPlaces, translateText} from "../Variables/functions";

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
    throw new Error("Server Error! LoginEmail.");
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
  return await response.json();
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

export const VerifyUserPhone = async (phone, smsCode) => {
  console.log(smsCode);

  const developerMode = (boolean) => {
    if (boolean === true) {
      return "&test=1";
    } else if (boolean === false) {
      return "";
    }
  }

  const response = await fetch(`https://sms.ru/sms/send?api_id=${API_ID_SMS}&to=${phone}&msg=Код+подтверждения:+${smsCode}&json=1&ttl=${TIME_TO_DELETE_THE_SMS}${developerMode(true)}`, {
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


export const createUserWithPhone = async (user) => {
  const response = await fetch(`${BASE_URL}/create-with-phone`, {
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
    throw new Error("Server Error! createUserWithPhone");
  }
  return await response.json();
}


export const LoginDBPhone = async (user) => {
  const response = await fetch(`${BASE_URL}/login-with-phone`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  })
  if (!response.ok) {
    throw new Error("Server Error! LoginPhone.");
  }
  return await response.json()
}

export const checkCreatedUserWithPhone = async (phone) => {
  const response = await fetch(`${BASE_URL}/check-created-user-with-phone`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user: {
        phone: phone
      }
    })
  })
  if (!response.ok) {
    throw new Error("Server Error! LoginPhone.");
  }
  return await response.json()
}

export const checkUsedEmail = async (mail) => {
  const response = await fetch(`${BASE_URL}/check-created-user-with-mail?mail=${mail}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json'
    },
  })
  if (!response.ok) {
    throw new Error("Server Error! checkUsedEmail.");
  }
  return await response.json()
}

export const sendEmailSignUp = async (mail) => {
  const response = await fetch(`${BASE_URL}/send-email-signup?mail=${mail}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json'
    },
  })
  if (!response.ok) {
    throw new Error("Server Error! sendEmailSignUp.");
  }
  return await response.json()
}

export const sendConfirmCodeToMail = async (id, mail) => {
  const response = await fetch(`${BASE_URL}/confirm-email`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user: {
        id: id,
        mail: mail
      }
    })
  })
  if (!response.ok) {
    throw new Error("Server Error! sendConfirmCodeToMail");
  }
  return await response.json()
}

// get Categories Search Estate

export const getCategoriesSearchEstate = async () => {
  const response = await fetch(`${BASE_URL}/get-categories`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json'
    }
  })
  if (!response.ok) {
    throw new Error("Server Error! getCategoriesSearchEstate.");
  }
  return await response.json()
}

export const getMainCategoriesSearchEstate = async () => {
  const response = await fetch(`${BASE_URL}/get-main-categories`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json'
    }
  })
  if (!response.ok) {
    throw new Error("Server Error! getMainCategoriesSearchEstate.");
  }
  return await response.json()
}

export const getUnderCategoriesSearchEstate = async (category_id) => {
  const response = await fetch(`${BASE_URL}/get-under-categories?category_id=${category_id}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json'
    }
  })
  if (!response.ok) {
    throw new Error("Server Error! getUnderCategoriesSearchEstate.");
  }
  return await response.json()
}

export const showGeocodingPlaces = (region) => {
  const [city, setCity] = useState("");

  fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${region.latitude}&lon=${region.longitude}&type=city&format=json&apiKey=${API_KEY_GeoAPIFY}`)
    .then(response => response.json())
    .then(async result => {
      setCity(await translateText("", formattedResultPlaces(result)))
    })

  if (city !== "") {
    return city;
  }
}