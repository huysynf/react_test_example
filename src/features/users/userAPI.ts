export const userAPI = {
  fetchUser: async () => {
    return await fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => data)
      .catch((data) => data);
  },
};
