export const login = async (email: string, password: string) => {
  fetch(`${import.meta.env.VITE_API_URL}/token_json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    /* `${encodeURIComponent("username")}=${encodeURIComponent(
      "dimas"
    )}&${encodeURIComponent("password")}=${encodeURIComponent("secret")}` */
    body: JSON.stringify({ username: email, password: password }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      localStorage.setItem(
        "token",
        `${responseData.token_type} ${responseData.access_token}`
      );
      getMe();
    });
};

export const getMe = async () => {
  fetch(`${import.meta.env.VITE_API_URL}/users/me/`, {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token") as string,
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
    });
};

export const posts = () => {
  fetch(`${import.meta.env.VITE_API_URL}/parts`, {
    method: "GET",
    headers: {
      Authorization: import.meta.env.VITE_AUTH_TOKEN,
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
    });
};

export const createUser = () => {
  console.log(import.meta.env.VITE_API_URL);

  fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: "POST",
    headers: {
      Authorization: import.meta.env.VITE_AUTH_TOKEN,
      mediaType: "application/json",
    },
    body: JSON.stringify({
      username: "react",
      email: "react@react.dev",
      groups: [],
    }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
    });
};
