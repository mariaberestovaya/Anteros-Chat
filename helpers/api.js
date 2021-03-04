const helperAPI = async (url, arg) => {
  const res = await fetch(`/api/${url}`, {
    body: JSON.stringify({
      login: arg.login,
      password: arg.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  return await res.json();
};

export const chatAPI = {
  async getUserChat(user_id) {
    const res = await fetch("/api/chat", {
      body: JSON.stringify({
        user_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    return await res.json();
  },
};

export const userAPI = {
  // async getUserLogin(login, password) {
  //   const res = await fetch("/api/login", {
  //     body: JSON.stringify({
  //       login,
  //       password,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //   });
  //   return await res.json();
  // },
  async getUserLogin(login, password) {
    const arg = { login, password };
    return helperAPI("login", arg);
  },

  async addUserRegister(username, login, password, description, image) {
    const res = await fetch("/api/register", {
      body: JSON.stringify({
        username,
        login,
        password,
        description,
        image,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    return await res.json();
  },
};
