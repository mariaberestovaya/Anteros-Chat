const helperAPI = async (url, arg, method) => {
  const res = await fetch(`/api/${url}`, {
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
    method: `${method}`,
  });

  return await res.json();
};

export const userAPI = {
  async getUserLogin(login, password) {
    const arg = { login, password };
    return helperAPI("login", arg, "POST");
  },

  async addUserRegister(username, login, password, description, image) {
    const arg = { username, login, password, description, image };
    return helperAPI("register", arg, "POST");
  },
};

export const chatAPI = {
  async getUserChat(user_id) {
    const arg = { user_id };
    return helperAPI("chat", arg, "POST");
  },
};
