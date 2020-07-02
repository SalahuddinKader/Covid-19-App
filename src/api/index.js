import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeAbleURL = url;
  if (country) {
    changeAbleURL = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeAbleURL);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifyData = data.map((dailydata) => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportData,
    }));
    return modifyData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (err) {
    console.log(err);
  }
};
