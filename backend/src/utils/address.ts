import axios from "axios";

const api = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode/",
});
export const Address = async (data) => {
  const startResult = await (
    await api.get(
      `json?latlng=${data.ltStart},${data.LgSatrt}&key=${process.env.KEY_API_GOOGLEMAPS}`
    )
  ).data;

  const endResult = await (
    await api.get(
      `json?latlng=${data.ltEnd},${data.lgEnd}&key=${process.env.KEY_API_GOOGLEMAPS}`
    )
  ).data;

  const results = {
    start: startResult.results[0].formatted_address,
    end: endResult.results[0].formatted_address,
  };

  return results;
};

// http://negobot.com.br/punctuatedroutes/8
