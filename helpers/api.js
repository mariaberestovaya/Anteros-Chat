export const helperAPI = async (url, args, method) => {
  const res = await fetch(`/api${url}`, {
    body: JSON.stringify(args),
    headers: {
      "Content-Type": "application/json",
    },
    method: `${method}`,
  });

  return await res.json();
};
