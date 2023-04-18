// const API_URL = "https://raw.githubusercontent.com/4akhilkumar/Portfolio/master/portfolio.json";
const API_URL = "http://127.0.0.1:8000/portfolio";

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
