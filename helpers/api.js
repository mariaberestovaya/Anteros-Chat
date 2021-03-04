export const chatAPI = {
  async getUserChat(user_id) {
    const res = await fetch("/api/chat", {
      body: JSON.stringify({
        user_id: user_id,
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
  async getUserLogin(log, pass) {
    const res = await fetch("/api/login", {
      body: JSON.stringify({
        login: log,
        password: pass,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    return await res.json();
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
