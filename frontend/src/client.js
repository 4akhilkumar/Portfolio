const API_URL = "https://raw.githubusercontent.com/4akhilkumar/Portfolio/master/backend/portfolio.json";

export const client = () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
