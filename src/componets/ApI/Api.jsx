const apiKey = "7403e41b9f50db29f5917421cd76cfeb";

const getWeather = async (city) => {
  return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export default getWeather;
