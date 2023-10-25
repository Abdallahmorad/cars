export async function fetchCars(filters) {
  const { manufacturer, model, year, limit, fuel } = filters;
  const headers = {
    "X-RapidAPI-Key": "5d8e8fcf4emshc75d3bd06467755p1a5d46jsn0549077e424b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}

export const generateImageUrl = (car, angle) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};
